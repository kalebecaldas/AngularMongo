import { Component, OnInit, SimpleChanges, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CallbackPipe } from './filtro';
import { OnChanges } from '@angular/core'


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})

export class BookComponent implements OnInit, OnChanges {
  books: any;
  @Input() item: String;
  searchResults: any;
  search: boolean;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/book').subscribe(data => {
      this.books = data;
      this.searchResults = this.books;
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    
    if (this.item == '') {
      this.search = false;
    } else {
      this.search = true;
    }

    console.log(this.item);
    console.log(this.search);
  }
}
