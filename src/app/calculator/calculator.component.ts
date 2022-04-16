import { Component, HostListener, OnInit } from '@angular/core';

@Component({
	selector: 'app-calculator',
	templateUrl: './calculator.component.html',
	styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
	ngOnInit(): void {
	}
	
	value: string = "0";
	value1: number = 0;
	value2: number = 0;
	expOprn: boolean = false;
	performed: boolean = false;
	
	
	pressNum(num: number) {
		if(this.performed){
			this.value1 = num;
			this.performed = false;
			return;
		}
		if (this.expOprn) {
			this.value1 = 0;
		}
		this.value1 = (this.value1 * 10) + num;
	}
	
	allClear() {
		this.value1 = 0;
		this.value2 = 0;
		this.value = this.value1.toString();
	}
	
	getAnswer() {
		if (this.expOprn) {
			this.value1 = Math.pow(this.value2, this.value1);
			this.value = this.value1.toString();
		} else {
			this.value1 = 0;
			this.value = this.value1.toString();
		}
		this.expOprn = false;
		this.performed = true;
	}

	exp() {
		this.value2 = this.value1
		this.expOprn = true;
	}

	fact() {
		if(Number.isInteger(this.value1)){
			this.value1 = this.factorial(this.value1);
		}else if(this.value1>800){
			this.value = "Infinity";
			this.value1 = 0;
		}else {
			this.value = "Invalid Number";  
		}
		this.performed = true;
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
	}

	ln() {
		this.value1 = Math.log(this.value1);
		this.performed = true;
		this.value = this.value1.toString();
	}

}
