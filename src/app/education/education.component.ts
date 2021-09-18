import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  education: any = [];

  constructor() { }

  ngOnInit(): void {

    this.education = [
      {
        institute: "Silicon Institaue of Technology",
        place: "Bhubaneswar",
        year: "2020",
        course: "Master in Computer Applications"
      },
      {
        institute: "Govt. College(Autonomous)",
        place: "Angul",
        year: "2017",
        course: "BSc. Computer Science"
      },
      {
        institute: "DAV Public School, MCL, Kalinga Area",
        place: "Talcher",
        year: "2014",
        course: "Intermediate"
      },
      {
        institute: "DAV Public School, MCL, Kalinga Area",
        place: "Talcher",
        year: "2012",
        course: "Matriculation"
      }
    ];

  }

}
