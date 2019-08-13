import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  readonly baseUrl = 'http://localhost:3003/candidates'; 
  readonly baseVoteUrl = 'http://localhost:3003/vote-for';

  constructor(private http: HttpClient) { }

  //Get all candidates
  getAllCandidates(){
    return this.http.get(this.baseUrl)
  }

  //Save all candidates
  saveCandidate(formData){
    return this.http.post(this.baseUrl,formData)
  }

  //Get candidates by Id
  getCandidateById(id){
    return this.http.get(this.baseUrl+`/${id}`)
  }

  //Update candidates by Id
  updateCandidateById(formData, id){
    return this.http.put(this.baseUrl+`/${id}`,formData)
  }

  //delete candidates by Id
  deleteCandidate(id){
    return this.http.delete(this.baseUrl+`/${id}`)
  }

  //save votes
  addParty(formData){
    return this.http.post(this.baseVoteUrl,formData)
  }

  //get result
  getResult(){
    return this.http.get('http://localhost:3003/voting-result')
  }
}
