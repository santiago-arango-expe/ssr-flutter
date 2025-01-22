import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import DeviceDetector = require("device-detector-js");

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const deviceDetector = new DeviceDetector();
    const userAgent = req.headers['user-agent'];
    const device : DeviceDetector.DeviceDetectorResult = deviceDetector.parse(userAgent);
    if(device.bot){
      console.log('is bot request')
    }else{
      console.log('is user request')
    }

    next();
  }
}
