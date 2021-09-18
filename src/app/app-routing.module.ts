import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProfileComponent } from './profile/profile.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent
  },
  {
    path: '*',
    component: ProfileComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'education',
    component: EducationComponent
  },
  {
    path: 'experience',
    component: ExperienceComponent
  },
  {
    path: 'skills',
    component: SkillsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
