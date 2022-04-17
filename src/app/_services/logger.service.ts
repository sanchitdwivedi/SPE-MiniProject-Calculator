import { Injectable } from '@angular/core';
import { NGXLogger } from 'ngx-logger';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor(private logger: NGXLogger) { }

  public trace(msg: string){
    this.logger.trace(msg);
  }

  public debug(msg: string){
    this.logger.debug(msg);
  }

  public info(msg: string){
    this.logger.info(msg);
  }

  public warn(msg: string){
    this.logger.warn(msg);
  }

  public error(msg: string){
    this.logger.error(msg);
  }

  public fatal(msg: string){
    this.logger.fatal(msg);
  }
}
