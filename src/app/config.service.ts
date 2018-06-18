import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {

  constructor() { }

  getConfig() {
    return 'http://191.189.21.190:8080';
  }
}
