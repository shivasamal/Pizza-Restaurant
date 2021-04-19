import { Component, OnInit } from '@angular/core';

export interface Transaction {
  item: string;
  quantity: number;
  cost: number;
}

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})

export class OrderDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['item', 'quantity', 'cost'];
  transactions: Transaction[] = [
    { item: 'PEPPER BARBECUE CHICKEN PIZZA', quantity: 1, cost: 350 },
    { item: 'PEPPER BARBECUE & ONION PIZZA', quantity: 1, cost: 400},
    { item: 'VEG EXTRAVAGANZA PIZZA', quantity: 1, cost: 280},
    { item: 'DOUBLE PANEER SUPREME PIZZA', quantity: 1, cost: 350},
    { item: 'CHICKEN GOLDEN DELIGHT PIZZA', quantity: 1, cost: 450},
    { item: 'DIET COKE', quantity: 1, cost: 100},
  ];

  /** Gets the total cost of all transactions. */
  getTotalCost() {
    return this.transactions.map(t => t.cost).reduce((acc, value) => acc + value, 0);
  }
  getTotalQuantity() {
    return this.transactions.map(t => t.quantity).reduce((acc, value) => acc + value, 0);
  }

}
