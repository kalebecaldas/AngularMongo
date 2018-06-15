import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-pessoa-edit',
  templateUrl: './pessoa-edit.component.html',
  styleUrls: ['./pessoa-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PessoaEditComponent implements OnInit {

  pessoa = { };

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getPessoa(this.route.snapshot.params['id']);
  }

  getPessoa(id) {
    this.http.get('/pessoa/'+id).subscribe(data => {
      this.pessoa = data;
    });
  }


  updatePessoa(id) {
    this.http.put('/pessoa/'+id, this.pessoa)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/pessoa-edit', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

  deletePessoa(id) {
    this.http.delete('/pessoa/'+id)
      .subscribe(res => {
          this.router.navigate(['/pessoa-edit']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}