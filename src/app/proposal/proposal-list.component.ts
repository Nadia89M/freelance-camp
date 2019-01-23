import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { ProposalService } from "../services/proposal.service";
import { Proposal } from "./proposal";

@Component({
  selector: "app-proposal-list",
  templateUrl: "./proposal-list.component.html",
  styleUrls: ["./proposal-list.component.scss"],
  providers: [ProposalService]
})
export class ProposalListComponent implements OnInit {
  proposals: Object;

  constructor(private proposalService: ProposalService, private router: Router) {}

  ngOnInit() {
    this.proposalService
      .getProposals()
      .subscribe(proposals => (this.proposals = proposals));
  }

  goToShow(proposal: Proposal): void {
		let link = ['/proposal', proposal.id];
		this.router.navigate(link);
	}

}


