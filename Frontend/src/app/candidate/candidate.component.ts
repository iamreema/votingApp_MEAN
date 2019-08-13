import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { CandidateService } from '../candidate.service';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent implements OnInit {

  candidateForm : FormGroup
  public allCandidates:any = []

  constructor(private fb: FormBuilder, private service: CandidateService) {
    this.candidateForm = this.fb.group({
      name : ['',[Validators.required]],
      party: ['',[Validators.required]]
    })
   }

  ngOnInit() {
    this.service.getAllCandidates().subscribe((res) => {
      this.allCandidates = res
    })
  }

  addCandidate() {
    this.service.saveCandidate(this.candidateForm.value).subscribe((res) => {
      this.candidateForm.reset()
      this.ngOnInit()
    })
  }

  deleteCandidateById(id){
    this.service.deleteCandidate(id).subscribe((res) => {
      this.ngOnInit()
    })
  }
}
