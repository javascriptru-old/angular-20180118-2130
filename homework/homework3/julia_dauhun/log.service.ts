export class LogService {
  private _logs: string[] = [];

  constructor() { }

  public add(message: string) {
    console.log(message);
    this._logs.push(message);
  }

  public getLog() {
    return this._logs;
  }
}
