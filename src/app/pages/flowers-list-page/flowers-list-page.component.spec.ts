import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowersListPageComponent } from './flowers-list-page.component';

describe('FlowerListPageComponent', () => {
  let component: FlowersListPageComponent;
  let fixture: ComponentFixture<FlowersListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlowersListPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FlowersListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
