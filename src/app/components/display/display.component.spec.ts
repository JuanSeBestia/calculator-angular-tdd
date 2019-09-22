import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayComponent } from './display.component';

describe('DisplayComponent', () => {
  let component: DisplayComponent;
  let fixture: ComponentFixture<DisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render current value as 0', async() => {
    component.currentValue = '0';
    fixture.detectChanges();
    let compontent_ne = fixture.debugElement.nativeElement;
    expect(compontent_ne.querySelector('.displayValue').textContent).toContain('0');
  });

  it('should render current value as 1+2', async() => {
    component.currentValue = '1+2';
    fixture.detectChanges();
    let compontent_ne = fixture.debugElement.nativeElement;
    expect(compontent_ne.querySelector('.displayValue').textContent).toContain('1+2');
  });

  it('should render current value as 0', async() => {
    component.currentValue = null;
    fixture.detectChanges();
    let compontent_ne = fixture.debugElement.nativeElement;
    expect(compontent_ne.querySelector('.displayValue').textContent).toEqual('');
  });

  
  it('should render current value as 0', async() => {
    component.currentValue = undefined;
    fixture.detectChanges();
    let compontent_ne = fixture.debugElement.nativeElement;
    expect(compontent_ne.querySelector('.displayValue').textContent).toEqual('');
  });
});
