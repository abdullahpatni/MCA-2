import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "AngularApplication";
  products: any[] = [
    {
      ProductID: "1",
      ProductName: "SSD",
      CategoryId: "1",
      AvilableQty: 34,
      ReorderQty: 555
    },
    {
      ProductID: "2",
      ProductName: "Web",
      CategoryId: "1013",
      AvilableQty: 203,
      ReorderQty: 130
    },
    {
      ProductID: "3",
      ProductName: "Flash Light",
      CategoryId: "1300",
      AvilableQty: 53,
      ReorderQty: 130
    },
    {
      ProductID: "4",
      ProductName: "Word",
      CategoryId: "1053",
      AvilableQty: 335,
      ReorderQty: 3830
    },
    {
      ProductID: "5",
      ProductName: "Think Pad Ultra Dock",
      CategoryId: "105",
      AvilableQty: 25,
      ReorderQty: 20
    }
  ];
}
