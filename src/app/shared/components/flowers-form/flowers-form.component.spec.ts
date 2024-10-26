import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowersFormComponent } from './flowers-form.component';

describe('FlowersFormComponent', () => {
  let component: FlowersFormComponent;
  let fixture: ComponentFixture<FlowersFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlowersFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlowersFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
