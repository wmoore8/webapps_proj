import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupProfilesComponent } from './group-profiles.component';

describe('GroupProfilesComponent', () => {
  let component: GroupProfilesComponent;
  let fixture: ComponentFixture<GroupProfilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupProfilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
