(function loadAwsRumScript() {
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
    (function (n, i, v, r, s, c, x, z) {
        x = window.AwsRumClient = { q: [], n: n, i: i, v: v, r: r, c: c };
        window[n] = function (c, p) { x.q.push({ c: c, p: p }); };
        z = document.createElement('script');
        z.async = true;
        z.defer = true;
        z.src = s;
        document.head.insertBefore(z, document.head.getElementsByTagName('script')[0]);
    })(
        'cwr',
        'a75fafb0-15ef-425c-b6b4-0c77cdc5e0b0',
        '1.0.0',
        'us-east-1',
        'https://client.rum.us-east-1.amazonaws.com/1.16.1/cwr.js',
        {
            sessionSampleRate: 0.5,
            identityPoolId: "us-east-1:de664c24-511c-4e6a-8c63-e0055e0134e2",
            endpoint: "https://dataplane.rum.us-east-1.amazonaws.com",
            telemetries: ["performance", "errors", "http"],
            allowCookies: true,
            enableXRay: true
        }
    );
})();

