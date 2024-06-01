import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink} from '@angular/router';
import { Jobs } from '../jobs';
import { JobsService } from '../services/jobs.service';

@Component({
  selector: 'app-jobs-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './jobs-details.component.html',
  styleUrl: './jobs-details.component.css'
})
export class JobsDetailsComponent implements OnInit {
  jobsdata: any = [];
  jobid: number = 0;

  constructor(private commentService: JobsService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.jobid = Number(params.get('id'));
      this.commentService.getJobsDetails(this.jobid).subscribe((jobsdata) => {
        console.log(jobsdata);
        this.jobsdata = jobsdata;
      },
      );
    });
  }
 
}
