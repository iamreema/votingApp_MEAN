import { Component, OnInit } from '@angular/core';
import { CandidateComponent } from '../candidate/candidate.component';
import { CandidateService } from '../candidate.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent implements OnInit {
  voteForm : FormGroup
  allParties:any = []
  result:any = []
  tempArray:any= []
  voteResult:any = []

  constructor(private service:CandidateService,private fb:FormBuilder) { 
    this.voteForm = this.fb.group({
      party : ['',[Validators.required]]
    })
  }

  ngOnInit() {
      this.service.getAllCandidates().subscribe((res) => {
      this.allParties = res
      console.log(res)
    })
    this.getVoteResult()
  }

  addVote(){
    console.log(this.voteForm.value.party)
    this.service.addParty(this.voteForm.value).subscribe((res) => {
      this.voteForm.reset()
      this.ngOnInit()
    })
  }

  getVoteResult(){
    this.service.getResult().subscribe((res) => {
      this.result = res
      var i,j,chunk = 2;
      var k=0;
      for (i=0,j=this.result.length; i<j; i+=chunk) {
        this.tempArray[k] = this.result.slice(i,i+chunk);
        // do whatever
        k++;
      }
      this.voteResult = this.tempArray
      console.log('result',this.voteResult)
  })
}
 
}
