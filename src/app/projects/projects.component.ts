import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { ProjectService } from 'app/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [ProjectService]
})
export class ProjectsComponent implements OnInit {
  projects: FirebaseListObservable<any[]>;
  constructor(private service: ProjectService) { 
    this.projects = service.getProjects();

    this.projects.subscribe( items => {
      console.log(items);
      
    });
  }

  ngOnInit() {
  }

}
