;
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PipeTransform, Pipe } from '@angular/core';
@Pipe({
    name: 'callback',
    pure: false
})

@Component({
    selector: 'app-book',
    templateUrl: './book.component.html',
    styleUrls: ['./book.component.css']
  })
  

export class CallbackPipe implements PipeTransform {
    books:any
    constructor(private http: HttpClient) { }

    transform(books: any[], callback: (item: any) => boolean): any {
        if (!books || !callback) {
            return books;
        }
        return books.filter(item => callback(item));
    }

    ngOnInit() {
        this.http.get('/book').subscribe(data => {
          this.books = data;
        });
      }
    
}