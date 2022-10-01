import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }

  addOrder(order:any){
    return this.http.post("http://localhost:8080/foodOrder",order)
  }

  getOrder(){
    return this.http.get(`http://localhost:8080/foodOrder/${localStorage.getItem('order_id')}`)
  }
}
