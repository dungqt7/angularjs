import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  getUrl() {
    return "url('https://cdn-wp.nkdev.info/snow/demo-one-page-agency/wp-content/uploads/sites/3/2017/01/home-7.jpg')";
  }
  constructor() { }

  ngOnInit() {
  }

}
