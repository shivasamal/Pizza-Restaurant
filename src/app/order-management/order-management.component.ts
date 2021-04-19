import { Component, OnInit } from '@angular/core';

export interface RestaurantData {
  customerName: string;
  customerId: number;
  position: number;
  noofItems: number;
  amount: number;
  status: string;
}

const RES_DATA: RestaurantData[] = [
  { position: 1, customerId: 11, customerName: 'Ayush', noofItems: 4, amount: 450, status: 'cooking'},
  { position: 2, customerId: 12, customerName: 'Yashaswini', noofItems: 2, amount: 231, status: 'cooking' },
  { position: 3, customerId: 13, customerName: 'Barkha', noofItems: 3, amount: 321, status: 'cooking' },
  { position: 4, customerId: 14, customerName: 'Bhuvan Bam', noofItems: 7, amount: 875, status: 'cooking' },
  { position: 5, customerId: 15, customerName: 'Ajay Nagar', noofItems: 5, amount: 379, status: 'cooking' },
  { position: 6, customerId: 16, customerName: 'Shanice', noofItems: 2, amount: 169, status: 'cooking' },
];

@Component({
  selector: 'app-order-management',
  templateUrl: './order-management.component.html',
  styleUrls: ['./order-management.component.css']
})

export class OrderManagementComponent implements OnInit {
  displayedColumns: string[] = ['position','customerId', 'customerName', 'noofItems','amount','status'];
  dataSource = RES_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
