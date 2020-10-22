import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupExpensesComponent } from './group-expenses.component';

describe('GroupExpensesComponent', () => {
  let component: GroupExpensesComponent;
  let fixture: ComponentFixture<GroupExpensesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupExpensesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupExpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
