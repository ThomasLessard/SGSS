import { Injectable } from '@angular/core';
import { ArgumentOutOfRangeError } from 'rxjs';
import { Agent } from '../modele/Agent';
import { listeAgents } from './../modele/listeAgents';
import { Observable, of} from 'rxjs';
import { HttpClient } from '@angular/common/http';
 

@Injectable({
  providedIn: 'root'
})
export class SGSSService {

  constructor(private http:HttpClient) { }

  //Version synchrone de recupererAgents
  //recupererAgents():Agent[]
  //{
  //  return listeAgents;
  //}

  //L'ajout de Observable <> rend la fonction asynchrone
  //recupererAgents():Observable< Agent[] >   
  //{
  //  return of (listeAgents);
  //}

  //Fonction qui accède aux données par un serveur web
  recupererAgents():Observable< Agent[] >   
  {
    let url = 'http://localhost/SGSS-serveur/getAgents.php';

    return this.http.get<Agent[]>(url);
  }
}
