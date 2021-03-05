import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ConfirmComponent } from './confirm/confirm.component';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/core/service/storage/store.service';
import { StorageKey } from 'src/app/core/service/storage/storage.model';
const { ORDER, CART_PRODUCT } = StorageKey



@Component({
  selector: 'app-identification',
  templateUrl: './identification.component.html',
  styleUrls: ['./identification.component.scss']
})
export class IdentificationComponent implements OnInit {

  dialogConfirm: MatDialogRef<ConfirmComponent>
  order: any[] = [];

  formCheckout = this.fb.group({
    name: [null, [Validators.required]],
    email: [null, [Validators.required, Validators.email]],
    phone: [null, [Validators.required]]
  })

  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
    private router: Router,
    private storage: StorageService
  ) { }

  ngOnInit(): void {
  }

  confirm() {
    console.log(this.formCheckout.value);
    this.dialogConfirm = this.dialog.open(ConfirmComponent, {
      panelClass: 'container-add'
    });

    this.dialogConfirm.afterClosed().subscribe(res => {
      if (res) {

        this.order = (this.storage.read(ORDER) || []);
        console.log(this.order)
        
        const auxOrder = {
          products: this.storage.read(CART_PRODUCT),
          identification: this.formCheckout.value
        };

          this.order.push(auxOrder);
          this.storage.remove(ORDER);
          this.storage.save(ORDER, this.order);
          console.log(this.order);

        // this.storage.remove(CART_PRODUCT);


        // this.router.navigate(['main/client/order']);
      }
    })
  }

}
