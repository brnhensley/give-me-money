import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database'; //add this for firebase
import { ProjectService } from 'app/project.service'; //add this for firebase

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [ProjectService] //add this for firebase
})
export class ProjectsComponent implements OnInit {
  projects: FirebaseListObservable<any[]>; //add this for firebase
  constructor(private service: ProjectService) {   //add this for firebase
    this.projects = service.getProjects(); //add this for firebase

    this.projects.subscribe( items => { //add this for firebase
      console.log(items);
      
    });
  }

  ngOnInit() {
  }

}
