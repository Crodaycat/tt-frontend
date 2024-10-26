import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowersCreatePageComponent } from './flowers-create-page.component';

describe('FlowersCreatePageComponent', () => {
  let component: FlowersCreatePageComponent;
  let fixture: ComponentFixture<FlowersCreatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlowersCreatePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlowersCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
