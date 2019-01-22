import { Component, OnInit } from "@angular/core";
import { DocumentService } from "../services/document.service";
import { Document } from "./document";

@Component({
  selector: "documents",
  templateUrl: "documents.component.html",
  styleUrls: ["documents.component.scss"],
  providers: [DocumentService]
})
export class DocumentsComponent implements OnInit {
  pageTitle: string = "Document Dashboard";
  documents: Object;

  constructor(private docService: DocumentService) {}

  ngOnInit() {
    this.docService
      .getDoc()
      .subscribe(documents => (this.documents = documents));
  }
}
