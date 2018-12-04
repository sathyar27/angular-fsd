import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  public skills = [
    {
      iconName : 'fab fa-angular',
      title: 'Angular 5'
    },
    {
      iconName : 'fab fa-node-js',
      title: 'Node'
    },
    {
      iconName : 'fab fa-js-square',
      title: 'Javascript'
    },
    {
      iconName : 'fab fa-html5',
      title: 'HTML5'
    },
    {
      iconName : 'fab fa-css3-alt',
      title: 'CSS3'
    },
    {
      iconName : 'fab fa-less',
      title: 'LESS'
    },
    {
      iconName : 'fab fa-sass',
      title: 'SASS'
    },
    {
      iconName : 'fab fa-git-square',
      title: 'Git'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
