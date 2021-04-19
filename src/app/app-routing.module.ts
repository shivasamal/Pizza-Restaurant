import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantComponent } from "../app/restaurant/restaurant.component";
import { DashboardComponent } from "../app/dashboard/dashboard.component";
import { OrderDetailsComponent } from "../app/order-details/order-details.component";
import { OrderManagementComponent } from "../app/order-management/order-management.component";
import { NotfoundComponent } from "../app/shared/notfound/notfound.component";

const routes: Routes = [
  {
    path: '', component: RestaurantComponent,
    children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "order-detls/:customerId", component: OrderDetailsComponent },
      { path: "order-mngmnt", component: OrderManagementComponent },
      { path: "404", component: NotfoundComponent },
      { path: "**", redirectTo: "dashboard" }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
