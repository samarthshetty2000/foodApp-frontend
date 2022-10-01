import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from '../Services/order/order.service';
import { ProductService } from '../Services/product-detail/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
 

  products:any={}


  itemList:any=[]


  orderDetails:any={"user":{"id":localStorage.getItem("user_id")}}
 

  response:any={}

  

  constructor(private productService:ProductService,private orderService:OrderService,private router: Router) { }

  ngOnInit(): void {
    this.productService.getproducts().subscribe((data)=>{
      console.log("hello")
      console.log(data)
      this.products=data
    })
  }

  addItem(quantity:any,product:any){
    const tempProduct={
      ...product
    }
    delete tempProduct.id
    console.log(tempProduct)
   
    tempProduct.quantity=quantity.value
    this.itemList.push(tempProduct)
  
  }

  order(){
    console.log(this.itemList)
    this.orderDetails.item=this.itemList
    console.log(this.orderDetails)
    this.orderService.addOrder(this.orderDetails).subscribe((res)=>{
      console.log(res)
      this.response=res
    localStorage.setItem("order_id",this.response.data.id)
    this.router.navigate(["order"])

    });

  }

}
