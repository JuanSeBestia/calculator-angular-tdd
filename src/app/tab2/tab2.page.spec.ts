import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Tab2Page } from './tab2.page';
import { DisplayComponent } from '../calculator/components/display/display.component';
import { NumberButtonComponent } from '../calculator/components/number-button/number-button.component';
import { ResultBtnComponent } from '../calculator/components/result-btn/result-btn.component';
import { CleanBtnComponent } from '../calculator/components/clean-btn/clean-btn.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoreModule } from '@ngrx/store';
import { appReducers } from '../store/reducers/app.reducers';
import { CalculatorDataModel } from '../calculator/models/calulator-model';


describe('Tab2Page', () => {
  let component: Tab2Page;
  let fixture: ComponentFixture<Tab2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Tab2Page, DisplayComponent, NumberButtonComponent, ResultBtnComponent,
        CleanBtnComponent, ],
      imports: [
        IonicModule.forRoot(),
        CommonModule,
        FormsModule,
        HttpClientTestingModule,
        StoreModule.forRoot(appReducers),
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Tab2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('mathOperation should not contain \'undefined\'', (done) => {
    component.displayValue$.subscribe((calcModel: CalculatorDataModel) => {
      expect(calcModel.math_operation).not.toContain('undefined');
      done();
    });
  });


  it('mathOperation should be an empty string', (done) => {
    component.displayValue$.subscribe((calcModel: CalculatorDataModel) => {
      expect(calcModel.math_operation.length).toEqual(0);
      done();
    });
  });


  it('after clicking \'=\' mathOperation should not contain \'undefined\'', (done) => {
    component.displayResult();
    component.displayValue$.subscribe((calcModel: CalculatorDataModel) => {
      expect(calcModel).not.toContain('undefined');
      done();
    });
  });

  it('after clicking \'=\' after clicking a math expression, mathOperation should not contain \'undefined\'', (done) => {
    component.updateDisplayValue('2+2');
    component.displayResult();
    component.displayValue$.subscribe((calcModel: CalculatorDataModel) => {
      expect(calcModel.math_operation).not.toContain('undefined');
      done();
    });
  });

  it('should have a Background image', () => {
    const bgImage = fixture.elementRef.nativeElement;
    expect(bgImage.style.backgroundImage).toBeDefined();
  });


  it('should show a demon image when the value of calculator is "666"', () => {
    component.updateDisplayValue('666');
    fixture.detectChanges();
    const element = document.querySelector('.background__image') as HTMLElement;
    expect(element.classList).toContain('demon-background');
  });



  it('should show a God image when the value of calculator is "42"', () => {
    component.updateDisplayValue('42');
    fixture.detectChanges();
    const element = document.querySelector('.background__image') as HTMLElement;
    expect(element.classList).toContain('god-background');
  }); */
});
