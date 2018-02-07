import { Injectable } from '@angular/core';
import { LogRecord } from './logrecord';

@Injectable()
export class LogService {
  records: LogRecord[] = [];

  public add(record: string) {
    const tstamp: number = new Date().getTime();
    const logRecord: LogRecord = {timestamp: tstamp, record: record};
    this.records.unshift(logRecord);
  }

  public clear() {
    this.records = [];
  }
}
