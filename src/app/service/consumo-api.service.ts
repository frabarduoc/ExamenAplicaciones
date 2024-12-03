import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'; 
import { retry, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class ConsumoapiService {
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin' :'*' }) } 

  apiURL : String = 'http://127.0.0.1:5000/';

  constructor(private httpClient: HttpClient) { }

  getPosts():Observable<any>{
    return this.httpClient.get(this.apiURL+'/posts/').pipe(retry(3));}
    
  public obtenerCursosPorProfesor(profesorid:number): Observable<any>{
    return this.httpClient.get(this.apiURL+'profesores/'+ profesorid + '/cursos',this.httpOptions);
  }

  //'/profesores/<int:profesor_id>/cursos/<int:curso_id>/alumnos
  public obtenerAlumnosPorCursoPorProfesor(profesorid:number, curso_id:number): Observable<any>{
    return this.httpClient.get(this.apiURL+'profesores/'+ profesorid + '/cursos/' + curso_id + '/alumnos',this.httpOptions);
  }
}
