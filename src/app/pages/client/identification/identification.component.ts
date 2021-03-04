import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ConfirmComponent } from './confirm/confirm.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-identification',
  templateUrl: './identification.component.html',
  styleUrls: ['./identification.component.scss']
})
export class IdentificationComponent implements OnInit {

  dialogConfirm: MatDialogRef<ConfirmComponent>

  formCheckout = this.fb.group({
    name: [null, [Validators.required]],
    email: [null, [Validators.required, Validators.email]],
    phone: [null, [Validators.required]]
  })

  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  confirm(){
    console.log(this.formCheckout.value);
    this.dialogConfirm = this.dialog.open(ConfirmComponent, {
      panelClass: 'container-add'
    });

    this.dialogConfirm.afterClosed().subscribe(res => {
      if (res) {
        this.router.navigate(['main/client/order']);
      }
    })
  }

}
