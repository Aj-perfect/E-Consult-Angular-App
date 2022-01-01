import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
alert: boolean = false;
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  bookAppointment(){
    this.alert=true;
  }

  closeAlert(){
    this.alert=false;
  }

}
