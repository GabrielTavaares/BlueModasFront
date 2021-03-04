import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialog,
    private dialogInformation: MatDialogRef<InformationComponent>

  ) { }


  ngOnInit(): void {
  }

  close() {
    if(this.data.error){
      this.dialogInformation.close();
    }else{
      this.dialog.closeAll();
    }
  }


}
