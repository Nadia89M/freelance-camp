import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"; // Import it up here

@Injectable({
  providedIn: "root"
})
export class DocumentService {
  constructor(private http: HttpClient) {}

  docUrl = "http://localhost:3001/freelance_documents";

  getDoc() {
    return this.http.get(this.docUrl);
  }
}
