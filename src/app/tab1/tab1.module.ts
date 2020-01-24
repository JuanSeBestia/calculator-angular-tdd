import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { MathOperationsListComponent } from '../components/math-operations-list/math-operations-list.component';
import { PaginatorComponent } from '../components/paginator/paginator.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }]),
  ],
  declarations: [
    Tab1Page,
    MathOperationsListComponent,
    PaginatorComponent,
  ]
})
export class Tab1PageModule { }
