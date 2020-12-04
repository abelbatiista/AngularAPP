import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paginaprincipal',
  templateUrl: './paginaprincipal.component.html',
  styleUrls: ['./paginaprincipal.component.css']
})
export class PaginaprincipalComponent implements OnInit {

  public url: string;
  public data: any;
  public verify: any;

  constructor(private _http: HttpClient,
    private _router: Router) { 
    this.url = "https://fastapipython.herokuapp.com"; //https://fastapipython.herokuapp.com // http://127.0.0.1:8000
    this.data = false;
  }

  ngOnInit(): void {
    this.Verify();
  }

  Verify(){
    this._http.get(`${this.url}/`).subscribe(
      result => {
        this.verify = result;
        if (this.verify.LogIn) {
          this._router.navigate[('pagina')];
        }
        else{
          this._router.navigate[('login')];
        }
      },
      error => {
        alert("Not exists in database!\n" + <any>error);
      }
    );
  }  

  Cerrar(){
    this._http.get(`${this.url}/logOut`).subscribe(
      result => {
        this.data = result
        if (this.data) {
          Swal.fire(
            'Excelente!',
            'Sesion cerrada con exito!',
            'success'
          )
        
        }
      },
      error => {
        alert("Not exists in database!\n" + <any>error);
      }
    );
  }  
  }


