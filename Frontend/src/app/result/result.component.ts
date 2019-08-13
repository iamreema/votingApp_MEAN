import { Component, OnInit } from '@angular/core';
import { CandidateService } from '../candidate.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  resultForm: FormGroup
  result:any = []
  tempArray:any= []
  voteResult:any = []
  count:any = []
  party:any=[]
  winner:any=[]
  largestValue:any=[]
  constructor(private service:CandidateService) { 
    
  }

  ngOnInit() {
    this.getVoteResult()
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
      for (var a=0; a<this.voteResult.length;a++) {
        this.count.push(this.voteResult[a][1])
        this.party.push(this.voteResult[a][0])
      }
      this.largestValue = Math.max(...this.count);
      // console.log(largestValue)W
      var index = this.count.indexOf(this.largestValue);
      // console.log(index)
      this.winner = this.voteResult[index][0]        
    })
}

}
