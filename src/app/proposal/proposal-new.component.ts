import { Component, OnInit } from "@angular/core";
import { ProposalService } from "../services/proposal.service";
import { Proposal } from "./proposal";

@Component({
  selector: "app-proposal-new",
  templateUrl: "./proposal-new.component.html",
  styleUrls: ["./proposal-new.component.scss"]
})
export class ProposalNewComponent {
  proposal = new Proposal;
  submitted: boolean = false;
  constructor(
		private proposalService: ProposalService
	) {}

	createProposal(proposal) {
		this.submitted = true;
		this.proposalService.createProposal(proposal)
				.subscribe(
					data => { return true },
				);
	}
}

