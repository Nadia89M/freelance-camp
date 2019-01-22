import { Component, OnInit } from "@angular/core";
import { Document } from "./document";

@Component({
  selector: "app-documents",
  templateUrl: "./documents.component.html",
  styleUrls: ["./documents.component.scss"]
})
export class DocumentsComponent {
  pageTitle: string = "Document Dashboard";

  documents: Document[] = [
    {
      title: "My First Doc",
      description: "asdfasdfasdf asdfasd",
      file_url: "http://google.com",
      updated_at: "11/11/16",
      image_url: "http://google.com"
    },
    {
      title: "My Second Doc",
      description: "asdfasdfasdf asdfasd",
      file_url: "http://google.com",
      updated_at: "11/11/16",
      image_url: "http://google.com"
    },
    {
      title: "My Last Doc",
      description: "asdfasdfasdf asdfasd",
      file_url: "http://google.com",
      updated_at: "11/11/16",
      image_url: "http://google.com"
    }
  ];
}
