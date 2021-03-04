import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-remove-item',
  templateUrl: './remove-item.component.html',
  styleUrls: ['./remove-item.component.scss']
})
export class RemoveItemComponent implements OnInit {

  constructor(
    private dialogRemoveItem: MatDialogRef<RemoveItemComponent>
  ) { }

  ngOnInit(): void {
  }


  confirmRemove(){
    this.dialogRemoveItem.close(true);
  }


}
