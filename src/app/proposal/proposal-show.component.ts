import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { HttpHeaders} from "@angular/common/http";
import { Observable } from "rxjs";
import { switchMap } from "rxjs/operators"
import { Proposal } from "./proposal";
import { ProposalService } from "../services/proposal.service";

@Component({
  selector: "app-proposal-show",
  templateUrl: "./proposal-show.component.html",
  styleUrls: ["./proposal-show.component.scss"],
  providers: [ ProposalService ]
})
export class ProposalShowComponent implements OnInit {

  constructor(
		private proposalService: ProposalService,
    private route: ActivatedRoute,
    private http: HttpClient
	) {}
  
	@Input()
  proposal: Object;
  data: any;

	ngOnInit(): void {
		this.data = this.route.paramMap.pipe(
      switchMap(params => {
        const id = +params.get("id")
        return this.proposalService.getProposal(id) // http request
      })
    )
    this.data.subscribe(proposal => (this.proposal = proposal));
  }
}