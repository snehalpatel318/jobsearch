import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Jobs } from '../jobs';
import { JobsService } from '../services/jobs.service';

@Component({
  selector: 'app-favourites',
  standalone: true,
  imports: [NgFor,RouterLink],
  providers:[JobsService],
  templateUrl: './favourites.component.html',
  styleUrl: './favourites.component.css'
})
export class FavouritesComponent implements OnInit {
  [x: string]: any;

  jobsdata: Jobs[] = [];

  constructor(private jobservice: JobsService) { }
  ngOnInit(): void {
    this.jobservice.getJobsData().subscribe((jobsdata) => {
      for(let i= 0 ; i < jobsdata.length ; i++) {
        /* if(this.fav.includes(jobsdata[i]['id'])){
          this.jobsdata.push(jobsdata[i]);
        } */
      }
    }
    );
  }
}
