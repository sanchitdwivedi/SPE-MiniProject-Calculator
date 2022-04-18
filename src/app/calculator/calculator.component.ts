import { Component, HostListener, OnInit } from '@angular/core';
import { LoggerService } from '../_services/logger.service';

@Component({
	selector: 'app-calculator',
	templateUrl: './calculator.component.html',
	styleUrls: ['./calculator.component.css'],
	providers: [
		{ provide: LoggerService, useValue: { info: (msg: string) => undefined}}
	]
})
export class CalculatorComponent implements OnInit {

	constructor(private loggerService: LoggerService) {}

	ngOnInit(): void {
	}
	
	value: string = "0";
	value1: number = 0;
	value2: number = 0;
	expOprn: boolean = false;
	multipleDigit: boolean = false;
	performed: boolean = false;
	
	pressNum(num: number) {
		if(this.performed){
			this.value1 = num;
			this.performed = false;
			return;
		}
		if (this.expOprn) {
			this.value1 = 0;
			this.multipleDigit = true; 
			this.expOprn = false;
		}
		this.value1 = (this.value1 * 10) + num;
		this.value = this.value1.toString();
		// this.loggerService.trace(num + " pressed");
	}
	
	allClear() {
		this.value1 = 0;
		this.value2 = 0;
		this.value = this.value1.toString();

		this.loggerService.info("Clear");
	}
	
	getAnswer() {
		if (this.expOprn || this.multipleDigit) {
			this.value1 = Math.pow(this.value2, this.value1);
			this.value = this.value1.toString();
		} else {
			this.value1 = 0;
			this.value = this.value1.toString();
		}
		this.expOprn = false;
		this.performed = true;
		this.multipleDigit = false;

		this.loggerService.info("Calculate");
	}

	exp() {
		this.value2 = this.value1
		this.expOprn = true;

		this.loggerService.info("exp() function called");
	}

	fact() {
		if(Number.isInteger(this.value1)){
			this.value1 = this.factorial(this.value1);
		}else if(this.value1>800){
			this.value = "Infinity";
			this.value1 = 0;
		}else {
			this.value = "Invalid Number";  
			this.loggerService.error("Factorial of decimal not allowed");
		}
		this.performed = true;

		this.loggerService.info("fact() function called");
	}

	factorial(n: number): any {
		if (n == 0 || n == 1)
			return 1;
		return this.factorial(n - 1) * n;
	}

	root() {
		this.value1 = Math.sqrt(this.value1);
		this.performed = true;
		this.value = this.value1.toString();

		this.loggerService.info("root() function called");
	}

	ln() {
		this.value1 = Math.log(this.value1);
		this.performed = true;
		this.value = this.value1.toString();

		this.loggerService.info("ln() function called");
	}

}
