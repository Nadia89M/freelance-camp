import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgbCollapseModule } from "@ng-bootstrap/ng-bootstrap";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DocumentsComponent } from "./documents/documents.component";
import { DocumentService } from "./services/document.service";
import { HomepageComponent } from "./homepage/homepage.component";
import { ProposalListComponent } from "./proposal/proposal-list.component";
import { ProposalNewComponent } from "./proposal/proposal-new.component";
import { ProposalShowComponent } from "./proposal/proposal-show.component";

@NgModule({
  declarations: [
    AppComponent,
    DocumentsComponent,
    HomepageComponent,
    ProposalListComponent,
    ProposalNewComponent,
    ProposalShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    NgbCollapseModule,
    HttpClientModule
  ],
  providers: [DocumentService],
  bootstrap: [AppComponent]
})
export class AppModule {}
