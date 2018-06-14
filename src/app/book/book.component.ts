import { Component, OnInit, SimpleChanges, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OnChanges } from '@angular/core'

import fontawesome from '@fortawesome/fontawesome';
import faUser from '@fortawesome/fontawesome-free-solid';
import faAccessibleIcon from '@fortawesome/fontawesome-free-brands'; 

fontawesome.library.add(faUser);
fontawesome.library.add(faAccessibleIcon);

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})

export class BookComponent implements OnInit {
  books: any;
  item: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/book').subscribe(data => {
      this.books = data;
    });
  }
}
