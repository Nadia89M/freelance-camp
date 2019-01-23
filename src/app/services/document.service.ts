import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class DocumentService {
  constructor(private http: HttpClient) {}

  docUrl = "https://freelance-camp-documents.herokuapp.com/freelance_documents";

  getDoc() {
    return this.http.get(this.docUrl);
  }
}
