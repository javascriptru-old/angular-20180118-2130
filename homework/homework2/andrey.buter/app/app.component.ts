import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	public emails = [
		new Email(),
		new Email(),
		new Email(),
	];

	public timeout = 3000;

	constructor() { }
	
	ngOnInit() {
		this.initAutoAdd();
	}

	protected initAutoAdd() {
		setTimeout(() => {
			this.addNew();
			this.initAutoAdd();
		}, this.timeout);
	}

	public deleteEmail(email) {
		const index = this.emails.indexOf(email);
		this.emails.splice(index, 1);
	}

	public addNew(): void {
		this.emails.push( new Email() );
	}
}

// Куда размещать такие классы/сущности?
// и вообще используются ли такое выделение сущности или все прописывается в компоненте?
interface IEmail {
	name: string;
	title: string;
	subject: string;
	timeCreation: Date;
	setTimeCreation(): void;
	getDate():string;
	getLivingTime(): string;
}
class Email implements IEmail {
	static count: number = 0;

	public name: string = 'Name';
	public title: string = 'Email';
	public subject: string = 'Subject';

	public timeCreation: Date;

	constructor() {
		Email.count++;
		this.name += ` ${Email.count}`;
		this.title += ` ${Email.count}`;
		this.subject += ` ${Email.count}`;
	}

	public setTimeCreation() {
		this.timeCreation = new Date();
	}

	public getDate(): string {
		return this.getFormatted(this.timeCreation );
	}

	public getLivingTime(): string {
		const diff = +(new Date()) - +this.timeCreation;
		const live = new Date(diff);
		return this.getFormatted(live, true);
	}

	protected getFormatted( date: Date, isUTC: boolean = false ): string {
		const getHours = isUTC ? 'getUTCHours' : 'getHours';
		const hours = this.getTimeNumber( date[getHours]() );
		const min = this.getTimeNumber( date.getMinutes() );
		const sec = this.getTimeNumber( date.getSeconds() );

		return `${hours}:${min}:${sec}`;
	}

	protected getTimeNumber(number:number): string {
		const mbZero = number > 10 ? '' : '0';
		return `${mbZero}${number}`;
	}
}