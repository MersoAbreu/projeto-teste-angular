import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { ConsultaService } from './../services/consulta.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'project';
  checked: boolean=false;
  produtos:any=[];
  name:any;
  element:any;
  produts: any;
  constructor(
   private consultaService:ConsultaService
    ) {}


  ngOnInit() {



    this.consultaService.listAll().subscribe((response:any) =>
      this.produtos = response);
      console.log(this.produtos);

  }

  filtrar(palavraChave: string) {
   this.name = palavraChave;

  }

}
