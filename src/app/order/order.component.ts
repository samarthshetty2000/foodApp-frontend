import { Component, OnInit } from '@angular/core';

import { OrderService } from '../Services/order/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  items:any=[]

  constructor(private order:OrderService) { }

  ngOnInit(): void {
    this.order.getOrder().subscribe((data)=>{
      console.log(data)
      this.items=data
      
    })

  }

}
