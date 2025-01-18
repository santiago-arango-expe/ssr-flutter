// Cargar el script de AWS RUM solo una vez
(function loadAwsRumScript() {
    // Hotjar Initialization
    (function (h, o, t, j, a, r) {
        h.hj = h.hj || function () { (h.hj.q = h.hj.q || []).push(arguments) };
        h._hjSettings = { hjid: 5011601, hjsv: 6 };
        a = o.getElementsByTagName('head')[0];
        r = o.createElement('script');
        r.async = true;
        r.defer = true;
        r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
        a.appendChild(r);
    })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');

    // Cookie Consent Handlers
    window.addEventListener("CookieScriptAcceptAll", function () {
        localStorage.setItem("flutter.enable_analytics", true);
    });

    window.addEventListener("CookieScriptAccept", function (e) {
        const { detail: { categories } } = e;
        updateAnalyticsVariable(categories);
    });

    window.addEventListener("CookieScriptReject", function () {
        localStorage.setItem("flutter.enable_analytics", false);
    });

    window.addEventListener("CookieScriptLoaded", function () {
        const { categories } = CookieScript.instance.currentState();
        updateAnalyticsVariable(categories);
    });

    function updateAnalyticsVariable(categories) {
        if (categories && categories.length > 0) {
            localStorage.setItem(
                "flutter.enable_analytics",
                categories.includes("targeting") ? true : false
            );
        }
    }

    // AWS RUM Initialization
    if (!window.AwsRumClient) {
        (function (n, i, v, r, s, c, x, z) {
            x = window.AwsRumClient = { q: [], n: n, i: i, v: v, r: r, c: c };
            window[n] = function (c, p) { x.q.push({ c: c, p: p }); };
            z = document.createElement('script');
            z.async = true;
            z.src = s;
            document.head.insertBefore(z, document.head.getElementsByTagName('script')[0]);
        })(
            'cwr',
            'ac4757bf-1a0f-445b-ac02-565724edff37',
            '1.0.0',
            'us-east-1',
            'https://client.rum.us-east-1.amazonaws.com/1.19.0/cwr.js',
            {
                sessionSampleRate: 0.5,
                identityPoolId: "us-east-1:b93ace3c-6b76-46ec-879f-86a12e22e149",
                endpoint: "https://dataplane.rum.us-east-1.amazonaws.com",
                telemetries: ["performance", "errors", "http"],
                allowCookies: true,
                enableXRay: false
            }
        );
    }
})();
