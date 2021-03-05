import { Component, OnInit } from '@angular/core';
import { StorageKey } from 'src/app/core/service/storage/storage.model';
import { StorageService } from 'src/app/core/service/storage/store.service';
const { ORDER } = StorageKey

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  order: any [] = [];
  orderEmpty: boolean = false;


  constructor(
    private storage: StorageService
  ) { }

  ngOnInit(): void {
    this.setOrder();
  }

  setOrder(){
    this.order = (this.storage.read(ORDER) || []);
    
    this.orderEmpty = (this.order.length < 1)
    
  }

}

