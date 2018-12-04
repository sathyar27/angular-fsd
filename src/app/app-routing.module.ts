import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { SkillsComponent } from './skills/skills.component';
import { ProfessionalExperienceComponent } from './professional-experience/professional-experience.component';

const routes: Routes = [
  { path: 'aboutme', component: ProfileComponent },
  { path: 'mycareer', component: ExperienceComponent },
  { path: 'reachoutme', component: ContactMeComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'experience', component: ProfessionalExperienceComponent },
  { path: '', redirectTo: '/aboutme', pathMatch: 'full' },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
