import {
  Component,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';

import {
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Output() dataUser = new EventEmitter<object>();

  userForm = new FormGroup({
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
    photo: new FormControl('', Validators.required),
    about: new FormControl('', Validators.required)
  })

  constructor() {
  }

  get firstname() { return this.userForm.get('firstname'); }

  ngOnInit(): void { }

  onSubmit() {
    this.dataUser.emit(this.userForm.value)
  }
}
