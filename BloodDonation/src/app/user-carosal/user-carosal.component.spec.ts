import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCarosalComponent } from './user-carosal.component';

describe('UserCarosalComponent', () => {
  let component: UserCarosalComponent;
  let fixture: ComponentFixture<UserCarosalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCarosalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCarosalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
