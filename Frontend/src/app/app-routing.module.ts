import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CandidateComponent } from './candidate/candidate.component';
import { EditCandidateComponent } from './edit-candidate/edit-candidate.component';
import { VotesComponent } from './votes/votes.component';
import { HomeComponent } from './home/home.component';
import { ResultComponent } from './result/result.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'',component:HomeComponent},  
  {path:'candidate',component:CandidateComponent},
  {path:'candidate/:id',component:EditCandidateComponent},
  {path:'vote-for',component:VotesComponent},
  {path:'result',component:ResultComponent},
  {path:'my-profile',component:ProfileComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
