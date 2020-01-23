import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Tab2Page } from './tab2.page';
import { DisplayComponent } from '../components/display/display.component';
import { NumberButtonComponent } from '../components/number-button/number-button.component';
import { ResultBtnComponent } from '../components/result-btn/result-btn.component';
import { CleanBtnComponent } from '../components/clean-btn/clean-btn.component';


describe('Tab2Page', () => {
  let component: Tab2Page;
  let fixture: ComponentFixture<Tab2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Tab2Page, DisplayComponent, NumberButtonComponent, ResultBtnComponent,
        CleanBtnComponent],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Tab2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {

    expect(component).toBeTruthy();
  });

  it('displayValue should exist', () => {
    expect(component.displayValue).toBeDefined();
  });


  it('displayValue should not contain \'undefined\'', () => {
    expect(component.displayValue).not.toContain('undefined');
  });

  it('displayValue should be an empty string', () => {
    expect(component.displayValue.length).toEqual(0);
  });


  it('after clicking \'=\' displayValue should not contain \'undefined\'', () => {
    component.displayResult();
    expect(component.displayValue).not.toContain('undefined');
  });

  it('after clicking \'=\' after clicking a math expression displayValue should not contain \'undefined\'', () => {
    component.updateDisplayValue('2+2');
    component.displayResult();
    expect(component.displayValue).not.toContain('undefined');
  });

  it('should have a Background image', () => {
    const bgImage = fixture.elementRef.nativeElement;
    expect(bgImage.style.backgroundImage).toBeDefined();
  });


  it('should show a demon image when the value of calculator is "666"', () => {
    component.displayValue = '666';
    fixture.detectChanges();
    const element = document.querySelector('.background__image') as HTMLElement;
    expect(element.classList).toContain('demon-background');
  });


  it('should show a God image when the value of calculator is "42"', () => {
    component.displayValue = '42';
    fixture.detectChanges();
    const element = document.querySelector('.background__image') as HTMLElement;
    expect(element.classList).toContain('god-background');
  });
});
