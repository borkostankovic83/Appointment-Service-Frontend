import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-business-schedule-display',
  templateUrl: './business-schedule-display.component.html',
  styleUrls: ['./business-schedule-display.component.css']
})
export class BusinessScheduleDisplayComponent implements OnInit {

  private scheduleType:string;

  constructor() { }

  ngOnInit(): void {
  }

displaySchedule()
{
    if(this.scheduleType === "daily")
    {
      console.log(" schedule");
    }
    else if (this.scheduleType === "weekly")
    {
    console.log(" schedule");
    }

    else if (this.scheduleType === "monthly")
    {
      console.log(" schedule");
    }
  
    else 
    {
      console.log("unexpected keyword for the schedule: "+this.scheduleType);
    }
  }
}
