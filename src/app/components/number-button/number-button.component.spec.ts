import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberButtonComponent } from './number-button.component';

describe('NumberButtonComponent', () => {
  let component: NumberButtonComponent;
  let fixture: ComponentFixture<NumberButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NumberButtonComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should receive "1"', async () => {
    component.value = '1';
    fixture.detectChanges();
    const numberButtonNativeElement = fixture.debugElement.nativeElement;
    expect(numberButtonNativeElement.querySelector('.number-button').textContent).toContain('1');
  });

  it('should receive "2"', () => {
    component.value = '2';
    fixture.detectChanges();
    const numberButtonNativeElement = fixture.debugElement.nativeElement;
    expect(numberButtonNativeElement.querySelector('.number-button').textContent).toContain('2');
  });

  it('should receive "3"', () => {
    component.value = '3';
    fixture.detectChanges();
    const numberButtonNativeElement = fixture.debugElement.nativeElement;
    expect(numberButtonNativeElement.querySelector('.number-button').textContent).toContain('3');
  });

  it('should receive "4"', () => {
    component.value = '4';
    fixture.detectChanges();
    const numberButtonNativeElement = fixture.debugElement.nativeElement;
    expect(numberButtonNativeElement.querySelector('.number-button').textContent).toContain('4');
  });


  it('should receive "5"', () => {
    component.value = '5';
    fixture.detectChanges();
    const numberButtonNativeElement = fixture.debugElement.nativeElement;
    expect(numberButtonNativeElement.querySelector('.number-button').textContent).toContain('5');
  });


  it('should receive "6"', () => {
    component.value = '6';
    fixture.detectChanges();
    const numberButtonNativeElement = fixture.debugElement.nativeElement;
    expect(numberButtonNativeElement.querySelector('.number-button').textContent).toContain('6');
  });


  it('should receive "7"', () => {
    component.value = '7';
    fixture.detectChanges();
    const numberButtonNativeElement = fixture.debugElement.nativeElement;
    expect(numberButtonNativeElement.querySelector('.number-button').textContent).toContain('7');
  });


  it('should receive "8"', () => {
    component.value = '8';
    fixture.detectChanges();
    const numberButtonNativeElement = fixture.debugElement.nativeElement;
    expect(numberButtonNativeElement.querySelector('.number-button').textContent).toContain('8');
  });


  it('should receive "9"', () => {
    component.value = '9';
    fixture.detectChanges();
    const numberButtonNativeElement = fixture.debugElement.nativeElement;
    expect(numberButtonNativeElement.querySelector('.number-button').textContent).toContain('9');
  });

  it('should receive "0"', () => {
    component.value = '0';
    fixture.detectChanges();
    const numberButtonNativeElement = fixture.debugElement.nativeElement;
    expect(numberButtonNativeElement.querySelector('.number-button').textContent).toContain('0');
  });


  it('should receive "11"', () => {
    component.value = '11';
    component.validateInput();
    fixture.detectChanges();
    const numberButtonNativeElement = fixture.debugElement.nativeElement;
    expect(numberButtonNativeElement.querySelector('.number-button').textContent).toEqual('');
  });


  it('should receive "asdsd"', () => {
    component.value = 'asdsd';
    component.validateInput();
    fixture.detectChanges();
    const numberButtonNativeElement = fixture.debugElement.nativeElement;
    expect(numberButtonNativeElement.querySelector('.number-button').textContent).toEqual('');
  });


  it('should receive "null"', () => {
    component.value = null;
    fixture.detectChanges();
    const numberButtonNativeElement = fixture.debugElement.nativeElement;
    expect(numberButtonNativeElement.querySelector('.number-button').textContent).toEqual('');
  });

  it('should receive "undefined"', () => {
    component.value = undefined;
    fixture.detectChanges();
    const numberButtonNativeElement = fixture.debugElement.nativeElement;
    expect(numberButtonNativeElement.querySelector('.number-button').textContent).toEqual('');
  });


  it('should be pressed', async () => {
    spyOn(component, 'clickEvent');

    const numberButtonNativeElement = fixture.debugElement.nativeElement;
    numberButtonNativeElement.querySelector('button').click();
    fixture.whenStable().then(() => {
      expect(component.clickEvent).toHaveBeenCalled();
    });
  });

  it('should receive "."', () => {
    component.value = '.';
    component.validateInput();
    fixture.detectChanges();
    const numberButtonNativeElement = fixture.debugElement.nativeElement;
    expect(numberButtonNativeElement.querySelector('.number-button').textContent).toEqual('.');
  });

  it('should receive "*"', () => {
    component.value = '*';
    component.validateInput();
    fixture.detectChanges();
    const numberButtonNativeElement = fixture.debugElement.nativeElement;
    expect(numberButtonNativeElement.querySelector('.number-button').textContent).toEqual('*');
  });

  it('should receive "/"', () => {
    component.value = '/';
    component.validateInput();
    fixture.detectChanges();
    const numberButtonNativeElement = fixture.debugElement.nativeElement;
    expect(numberButtonNativeElement.querySelector('.number-button').textContent).toEqual('/');
  });

  it('should receive "+"', () => {
    component.value = '+';
    component.validateInput();
    fixture.detectChanges();
    const numberButtonNativeElement = fixture.debugElement.nativeElement;
    expect(numberButtonNativeElement.querySelector('.number-button').textContent).toEqual('+');
  });
});
