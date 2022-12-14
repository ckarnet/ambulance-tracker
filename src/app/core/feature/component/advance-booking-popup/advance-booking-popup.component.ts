import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ambulanceType } from 'src/app/core/models/register';

@Component({
  selector: 'app-advance-booking-popup',
  templateUrl: './advance-booking-popup.component.html',
  styleUrls: ['./advance-booking-popup.component.scss'],
})
export class AdvanceBookingPopupComponent implements OnInit {
  @Input() displayModal: any;
  @Output() advancedPopup = new EventEmitter<boolean>();

  displayBasic: boolean = false;
  displayBasic2: boolean = false;
  displayMaximizable: boolean = false;
  displayPosition: boolean = false;
  position: string = '';
  cities: ambulanceType[];
  advanceBookingForm!: FormGroup;
  selectedCity!: ambulanceType;
  results: ambulanceType[] = [];



  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.cities = [
      { name: 'ALS', code: 'NY' },
      { name: 'BLS', code: 'RM' },
      { name: 'PTS', code: 'LDN' },
    ];
  }

  ngOnInit(): void {
    this.createForm();
  }
  createForm() {
    this.advanceBookingForm = this.formBuilder.group({
      selectedCity: [''],
      pickUpLocation: [''],
      dropLocation: [''],
      date:['']
    });
  }
  search() {
    this.results = [
      { name: 'Ernakulam', code: 'NY' },
      { name: 'Kunnumpuram', code: 'RM' },
      { name: 'Pipeline', code: 'LDN' },
      { name: 'Vytilla', code: 'IST' },
      { name: 'Edapally', code: 'PRS' },
      { name: 'Vazhakala', code: 'VKL' },
    ];
  }
  showModalDialog() {
    this.displayModal = true;
  }

  showBasicDialog() {
    this.displayBasic = true;
  }

  showBasicDialog2() {
    this.displayBasic2 = true;
  }

  showMaximizableDialog() {
    this.displayMaximizable = true;
  }

  showPositionDialog(position: string) {
    this.position = position;
    this.displayPosition = true;
  }
  onClosePopUp() {
    this.advancedPopup.emit(false);
  }
  onSubmit() {
    this.displayModal = false;
    this.advancedPopup.emit(false);
    this.router.navigate(['/ambulance-list']);
  }
}
