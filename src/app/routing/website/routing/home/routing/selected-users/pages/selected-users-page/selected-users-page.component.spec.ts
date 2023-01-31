import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedUsersPageComponent } from './selected-users-page.component';

describe('SelectedUsersPageComponent', () => {
  let component: SelectedUsersPageComponent;
  let fixture: ComponentFixture<SelectedUsersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedUsersPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedUsersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
