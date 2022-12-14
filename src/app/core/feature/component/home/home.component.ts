import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

type IAmbulance = {
  image: string;
  title: string;
  isClicked: boolean;
};
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isAdvancedPopup = false;
  // @Output() idAdvancedPopup = new EventEmitter<any>
  constructor(private route: Router) {}

  ngOnInit(): void {
    this.isAdvancedPopup = false;
  }
  today: number = Date.now();

  ambulances: IAmbulance[] = [
    { image: 'assets/images/als.png', title: 'ALS', isClicked: true },
    { image: 'assets/images/bls.png', title: 'BLS', isClicked: false },
    { image: 'assets/images/ptv.png', title: 'PTS', isClicked: false },
  ];
  component = '';
  onswitch(title: string) {
    this.component = title;
    this.ambulances.forEach((element) => {
      if (element.title == title) {
        element.isClicked = !element.isClicked;
      } else {
        element.isClicked = false;
      }
    });
  }

  advancedBooking() {
    this.isAdvancedPopup = true;
  }
  emergencyBooking() {
    this.route.navigate(['/emergency-booking']);
  }
  popUpEvent(event: boolean) {
    this.isAdvancedPopup = event;
  }
}
