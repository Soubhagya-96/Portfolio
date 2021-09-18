import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills: any =[] ;

  constructor() { }

  ngOnInit(): void {

    this.skills = [
      {
        technology: 'Python',
        knowledge: 80
      },
      {
        technology: 'Flask',
        knowledge: 70
      },
      {
        technology: 'Django',
        knowledge: 40
      },
      {
        technology: 'Angular',
        knowledge: 60
      },
      {
        technology: 'Ionic',
        knowledge: 60
      },
      {
        technology: 'HTML',
        knowledge: 70
      },
      {
        technology: 'CSS',
        knowledge: 60
      }, 
      {
        technology: 'Javascript',
        knowledge: 70
      },
      {
        technology: 'MySQL',
        knowledge: 70
      },
      {
        technology: 'PostgresSQL',
        knowledge: 70
      },
      {
        technology: 'GIT',
        knowledge: 70
      },
      {
        technology: 'AWS Serverless',
        knowledge: 80
      },
      {
        technology: 'Ubuntu',
        knowledge: 80
      },
      {
        technology: 'Heroku',
        knowledge: 40
      },
    ]

  }

}
