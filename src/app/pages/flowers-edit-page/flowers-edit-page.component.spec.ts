import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowersEditPageComponent } from './flowers-edit-page.component';

describe('FlowersEditPageComponent', () => {
  let component: FlowersEditPageComponent;
  let fixture: ComponentFixture<FlowersEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlowersEditPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlowersEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
