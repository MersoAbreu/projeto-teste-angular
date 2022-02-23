import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Produtos } from 'src/models/Produtos';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class ConsultaService {
  url:any = "https://mystique-v2-americanas.juno.b2w.io/autocomplete?content=camiseta&source=nanook";

  constructor(private http: HttpClient) { }


  listAll(): Observable<Produtos[]>{
    return this.http.get<Produtos[]>(this.url);
   }


}
