import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatSnackBar, MatDialogRef } from '@angular/material';
import { Http } from '@angular/http';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const PERSONS_REGEX = /^[0-9]{1,2}$/;

@Component({
  selector: 'app-book-dialog',
  templateUrl: './book-dialog.component.html',
  styleUrls: ['./book-dialog.component.css']
})
export class BookDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private http: Http,
    public snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<BookDialogComponent>
  ) { }

  submitted = false;

  bookForm: FormGroup;

  minDate: Date;

  maxDate: Date;

  dateValue: Date;

  totalPrice: string;

  pcLayout: boolean;

  ngOnInit() {
    this.minDate = new Date(Date.now() + (1000 * 60 * 60 * 24));
    this.maxDate = new Date(this.minDate);
    this.maxDate.setMonth(this.minDate.getMonth() + 6);
    this.bookForm = new FormGroup({
      'name': new FormControl('', [Validators.required]),
      'email': new FormControl('', [Validators.required, Validators.pattern(EMAIL_REGEX)]),
      'datePicker': new FormControl(new Date(), [Validators.required]),
      'persons': new FormControl('', [Validators.required, Validators.min(1), Validators.pattern(PERSONS_REGEX)]),
      'comments': new FormControl('')
    });
    this.totalPrice = '0 USD';
    this.pcLayout = window.innerWidth > 920;
  }

  public get name() {
    return this.bookForm.get('name');
  }

  public get email() {
    return this.bookForm.get('email');
  }

  public get datePicker() {
    return this.bookForm.get('datePicker');
  }

  public get persons() {
    return this.bookForm.get('persons');
  }

  public get comments() {
    return this.bookForm.get('comments');
  }

  public updatePrice() {
    this.totalPrice = this.data.price * Number(this.persons.value) + ' USD';
  }

  public onSubmit() {
    this.submitted = true;
    const bookData = {
      name: this.name.value,
      email: this.email.value,
      datePicker: this.datePicker.value,
      people: this.persons.value,
      coments: this.comments.value,
      tripName: this.data.name,
      tripId: this.data.id,
      tripPrice: this.data.price,
      finalPrice: this.data.price * Number(this.persons.value)
    }
    this.http.post('http://localhost:3000/api', bookData)
      .subscribe(res => {
        if (res.status === 200) {
          this.snackBar.open('Trip ' + this.data.name + ' booked successfully. Our team will contact you in no time.', '',
            { duration: 5000 });
          this.dialogRef.close();
        } else {
          this.snackBar.open('An error has occur with our server. Please try again later.', '', { duration: 3000 });
        }
        this.submitted = false;
      });
  }

}
