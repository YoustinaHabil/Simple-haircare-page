import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInTdfComponent } from './sign-in-tdf.component';

describe('SignInTdfComponent', () => {
  let component: SignInTdfComponent;
  let fixture: ComponentFixture<SignInTdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignInTdfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInTdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
