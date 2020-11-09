import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent implements OnInit {
  @Input() value:string;

  // public value;

  public newValue;

  constructor() { }

  ngOnInit(): void {
  }

  public addValue() {
    this.value = this.newValue;
    console.log(this.value);


   }

}
