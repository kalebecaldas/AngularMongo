import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';

@Injectable()
export class PessoaService {

  constructor(private http: HttpClient) { }

}
