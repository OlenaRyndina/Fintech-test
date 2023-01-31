import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarBlockComponent } from './sidebar-block.component';

describe('SidebarBlockComponent', () => {
  let component: SidebarBlockComponent;
  let fixture: ComponentFixture<SidebarBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
