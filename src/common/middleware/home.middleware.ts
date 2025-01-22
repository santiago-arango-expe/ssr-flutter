import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import DeviceDetector = require("device-detector-js");

@Injectable()
export class HomeMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const deviceDetector = new DeviceDetector();
    const userAgent = req.headers['user-agent'];
    const device: DeviceDetector.DeviceDetectorResult = deviceDetector.parse(userAgent);
    if (device.bot) {
      const htmlCode = `<html>
        <head>
          <base href="/">
          <meta charset="UTF-8">
          <meta http-equiv="content-language" content="es">
          <meta content="IE=Edge" http-equiv="X-UA-Compatible">
          <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
          <!--SEO-->
          <meta name="robots" content="index, follow">
          <meta name="revisit-after" content="1 Day">

          <!--Theme-->
          <meta name="msapplication-TileColor" content="#d21d39">
          <meta name="theme-color" content="#d21d39">

          <!-- iOS and WebApp Meta Tags -->
          <meta name="apple-mobile-web-app-capable" content="yes">
          <meta name="mobile-web-app-capable" content="yes">
          <meta name="apple-mobile-web-app-status-bar-style" content="black">
          <meta name="flutter-build" content="release-no-sourcemaps">
          <meta name="apple-mobile-web-app-title" content="La Recetta ~ El gusto de servir juntos">

          <link rel="apple-touch-icon" href="icons/Icon-192.png">

          <!-- Favicon -->
          <link rel="icon" type="image/png" href="favicon.png">

          <link rel="manifest" href="manifest.json">
          
          <link rel="stylesheet" href="dist/styles/app.css">

          <meta flt-viewport="" name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">

          <title>La Recetta ~ El gusto de servir juntos</title>
          <meta id="flutterweb-theme" name="theme-color" content="#d21d39">

          <meta name="title" content="La Recetta ~ El gusto de servir juntos" flt-seo="">
          <meta name="description" content="Somos el aliado número uno del sector gastronómico en Colombia, comprometidos con cada cliente en la entrega de soluciones integrales para su negocio y el desarrollo del sector." flt-seo="">
          <meta name="keywords" content="gastronomia, colombia, soluciones, receta" flt-seo="">
          <meta name="og:type" content="sitio web" flt-seo="">
          <meta name="og:title" content="La Recetta" flt-seo="">
          <meta name="og:url" content="/" flt-seo="">
          <meta name="og:image" content="https://storage.googleapis.com/larecetta-ibis-images/Banner_LaRecetta_Pasoapaso.jpg" flt-seo="">
          <meta name="og:description" content="Somos el aliado número uno del sector gastronómico en Colombia, comprometidos con cada cliente en la entrega de soluciones integrales para su negocio y el desarrollo del sector.  " flt-seo="">
          <link rel="canonical" href="/" flt-seo="">

        </head>
        <body>
          <h1>La Recetta la mejor gastronomia al alcance del hogar</h1>
        </body>
      </html>
      `
      return res.send(htmlCode);
    }
    next();
  }
}
