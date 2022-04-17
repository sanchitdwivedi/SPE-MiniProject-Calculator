import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';

const environmentConfig: any = environment.logger;

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    LoggerModule.forRoot({
      level: NgxLoggerLevel[environmentConfig.level],
      serverLogLevel: NgxLoggerLevel[environmentConfig.serverLevel],
      serverLoggingUrl: environmentConfig.serverUrl,
    } as any),  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
