import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { DateAdapter, MAT_DIALOG_DATA } from "@angular/material";

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  selector: 'app-book-dialog',
  templateUrl: './book-dialog.component.html',
  styleUrls: ['./book-dialog.component.css']
})
export class BookDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.minDate = new Date(Date.now() + (1000 * 60 * 60 * 24));
    this.maxDate = new Date(this.minDate);
    this.maxDate.setMonth(this.minDate.getMonth() + 6);
    this.bookForm = new FormGroup({
      'name': new FormControl('', [Validators.required]),
      'email': new FormControl('', [Validators.required, Validators.pattern(EMAIL_REGEX)]),
      'datePicker': new FormControl(new Date(), [Validators.required])
    });
  }

  bookForm: FormGroup;

  minDate: Date;

  maxDate: Date;

  public get name() {
    return this.bookForm.get('name');
  }

  public get email() {
    return this.bookForm.get('email');
  }

  public get datePicker() {
    return this.bookForm.get('datePicker');
  }

  dateValue: Date;

}
