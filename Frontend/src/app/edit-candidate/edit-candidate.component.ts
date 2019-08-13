import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CandidateService } from '../candidate.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-candidate',
  templateUrl: './edit-candidate.component.html',
  styleUrls: ['./edit-candidate.component.css']
})
export class EditCandidateComponent implements OnInit {

  public candidateData:any = []
  public id:string;
  editCandidateForm : FormGroup

  constructor(private service:CandidateService, private fb:FormBuilder, private route:ActivatedRoute, private router:Router) { 
      this.id = route.snapshot.params.id;
      this.service.getCandidateById(this.id).subscribe((res) => {
      this.candidateData = res
    })

    this.editCandidateForm = this.fb.group({
      name: [this.candidateData.name,[Validators.required]],
      party: [this.candidateData.party,[Validators.required]]
    })
  }
  
  ngOnInit() {
  }

  updateCandidate() {
    this.service.updateCandidateById(this.editCandidateForm.value, this.id).subscribe((res) => {
        this.editCandidateForm.reset()
        this.router.navigate(['/candidate'])
    })
  }

}
