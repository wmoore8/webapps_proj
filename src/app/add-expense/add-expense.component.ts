import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent implements OnInit {
  public newValue = '0';
  public displayMainContent;
  public displayContent;
  public displayName;

  constructor() { }

  ngOnInit(): void {
    this.displayMainContent=true;
    this.displayContent=false;
    this.displayName=false;
  }

  public addValue() {
    this.displayMainContent=false;
    this.displayContent=true;
   }

   public display(){
      this.displayName = true;
   }


}
