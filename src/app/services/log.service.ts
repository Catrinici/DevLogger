import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/Observable/of'
import { Log } from '../models/log';

@Injectable({
	providedIn: 'root'
})
export class LogService {
	logs: Log[];

	private logSource = new BehaviorSubject<Log>({ id: null, text: null, date: null })
	selectedLog = this.logSource.asObservable();

	constructor() {
		this.logs = [
			{ id: '1', text: 'Generated components', date: new Date('04/23/2020 5:09:23') },
			{ id: '2', text: 'Added Bootstrap', date: new Date('04/22/2020 4:09:23') },
			{ id: '3', text: 'Added logs components', date: new Date('04/21/2020 7:09:23') },
		]
	}

	getLogs(): Observable<Log[]> {
		return of(this.logs);
	}

	setFormLog(log: Log) {
		this.logSource.next(log);

	}
}
