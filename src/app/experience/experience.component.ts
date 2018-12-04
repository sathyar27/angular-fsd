import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  public projectDetails : any[];

  
  constructor() { }

  ngOnInit() {
    this.projectDetails = [
      {
        title: 'Logistics Incentive Pay',
        description: 'Incentive pay calculation for employee based on their work performance and sincerity.',        
        roles: [
          {
            rolesDesc : 'As per client requirement and worked on RWD HTML Development from PSD.'
          },
          {
            rolesDesc: 'Project has been developed with Angular5 and Typescript.'
          },
          {
            rolesDesc : 'UI implementation was done using LESS pre-processor without any framework.',
          },
        ],
        
      },
      {
        title: 'GCC Calendar (Western Union)',
        description: `GCC Calendar is developed to send SMS and launch the campaign to the customers around
the world. And maintaining the status of campaigns and SMS in the Events calendar.`,
        roles: [
          {
            rolesDesc : 'Analyzed client requirement and worked on RWD HTML Development.'
          },
          {
            rolesDesc: 'Project has been developed with Angular5 and Typescript.'
          },
          {
            rolesDesc : 'UI implementation was done using SASS Preprocessor without any framework.',
          },
        ],
        
      },
      {
        title: 'HPE Segmentation',
        description: `HPE segmentation used to configure your text based document into Redshift database. We
        could create segmentation to retrieve data’s from database in easier way. Export your segmentation
        data’s as an CSV data.`,
        roles: [
          {
            rolesDesc : 'Analyzed client requirement and worked on RWD HTML Development.'
          },
          {
            rolesDesc: 'Project has been developed with Angular5 and Typescript.'
          },
          {
            rolesDesc : 'UI implementation was done using LESS pre-processor without any framework.',
          },
        ],
        
      },
    ]
  
  }

}
