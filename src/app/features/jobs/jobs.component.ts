import { NgFor } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Jobs } from '../jobs';
import { JobsDetailsComponent } from '../jobs-details/jobs-details.component';
import { JobsService } from '../services/jobs.service';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [NgFor,JobsDetailsComponent,RouterLink],
  providers:[JobsService],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css'
})
export class JobsComponent implements OnInit {
  jobsdata: Jobs[] = [];
  favorites : number[] = [];

  constructor(private jobService: JobsService) { }
  ngOnInit(): void {
    this.getJobData();
  }

  getJobData(){
    this.jobService.getJobsData().subscribe((jobsdata) => {
      this.jobsdata = jobsdata;
    },
  );
  }
  

}
