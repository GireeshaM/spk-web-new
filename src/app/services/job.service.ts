import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

/* ================= JOB INTERFACE ================= */
export interface Job {
  jobId: string;
  title: string;
  location: string;
  type: string;
  experience: string;
  image: string;
  summary: string;
  responsibilities: string[];
  requiredSkills: string[];
  preferredSkills: string[];
}

@Injectable({
  providedIn: 'root',
})
export class JobService {
  private readonly http = inject(HttpClient);

  private readonly jobsUrl = '/assets/careers/jobList.json';

  public getAllJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(this.jobsUrl);
  }

  public getJobById(jobId: string): Observable<Job | undefined> {
    return this.getAllJobs().pipe(
      map((jobs) => jobs.find((job) => job.jobId === jobId)),
    );
  }
}
