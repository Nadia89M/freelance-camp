import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DocumentsComponent } from "./documents/documents.component";
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
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
