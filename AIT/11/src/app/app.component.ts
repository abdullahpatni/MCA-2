import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {
  showInfo: boolean = false;
  caption: string = "Show Text";
  productList: Array<string> = ["Android", "Why you", "Moto G 2"];
  studentList: Array<any> = new Array<any>();

  constructor() {}
  public changeData(): void {
    this.showInfo = !this.showInfo;
    if (this.showInfo) {
      this.caption = "Hide Text";
    } else {
      this.caption = "Show Text";
    }
  }

  ngOnInit() {
    this.studentList = [
      { SrlNo: 23, Name: "Abdullah Patni", Course: "MCA", Grade: "A" },
      { SrlNo: 20, Name: "Another one", Course: "BA", Grade: "A" },
      { SrlNo: 33, Name: "GB", Course: "BCom", Grade: "A" },
      { SrlNo: 40, Name: "Malkova", Course: "Bsc-Hons", Grade: "A" }
    ];
  }
}
