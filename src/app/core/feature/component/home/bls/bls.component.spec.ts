import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlsComponent } from './bls.component';

describe('BlsComponent', () => {
  let component: BlsComponent;
  let fixture: ComponentFixture<BlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
