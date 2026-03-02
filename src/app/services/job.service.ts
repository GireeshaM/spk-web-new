import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
  providedIn: 'root'
})
export class JobService {

  private jobsUrl = '/assets/careers/jobList.json';

  constructor(private http: HttpClient) {}

  getAllJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(this.jobsUrl);
  }

  getJobById(jobId: string): Observable<Job | undefined> {
    return this.getAllJobs().pipe(
      map(jobs => jobs.find(job => job.jobId === jobId))
    );
  }
}
