import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {

  constructor() { }

  getConfig() {
    return 'http://localhost:3000';
  }
}
