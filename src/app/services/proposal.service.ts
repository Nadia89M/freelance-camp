import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProposalService {

  constructor(private http: HttpClient) {}

  private proposalsUrl = 'http://localhost:3002/proposals';

  getProposals() {
    return this.http.get(this.proposalsUrl);
  }

  getProposal(id: number) {
    return this.http.get(this.proposalsUrl + "/" + id + '.json');
  }

  createProposal(proposal) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
        })
      };
    return this.http.post(this.proposalsUrl, JSON.stringify(proposal), httpOptions);
  }
}

