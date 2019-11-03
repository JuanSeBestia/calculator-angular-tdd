import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CleanBtnComponent } from './clean-btn.component';

describe('CleanBtnComponent', () => {
  let component: CleanBtnComponent;
  let fixture: ComponentFixture<CleanBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CleanBtnComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CleanBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
  it('should be pressed', async () => {
    spyOn(component, 'clickEvent');

    const cleanBtnElement = fixture.debugElement.nativeElement;
    cleanBtnElement.querySelector('button').click();
    fixture.whenStable().then(() => {
      expect(component.clickEvent).toHaveBeenCalled();
    });
  });
});
