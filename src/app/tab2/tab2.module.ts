import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { DisplayComponent } from '../calculator/components/display/display.component';
import { NumberButtonComponent } from '../calculator/components/number-button/number-button.component';
import { ResultBtnComponent } from '../calculator/components/result-btn/result-btn.component';
import { CleanBtnComponent } from '../calculator/components/clean-btn/clean-btn.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab2Page }])
  ],
  declarations: [
    Tab2Page,
    DisplayComponent,
    NumberButtonComponent,
    ResultBtnComponent,
    CleanBtnComponent,
  ]
})
export class Tab2PageModule {}
