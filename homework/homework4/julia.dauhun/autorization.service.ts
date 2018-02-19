export class AutorizationService {
  private _isAutorized: boolean = false;

  constructor() {}

  get isAutorized() {
    return this._isAutorized;
  }

  set isAutorized(newValue) {
    this._isAutorized = newValue;
  }
}
