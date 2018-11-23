import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CategoriesPage } from './categories';
import { PipesModule } from '../../pipes/pipes.module';
import { OrderModule } from 'ngx-order-pipe';

@NgModule({
  declarations: [
    CategoriesPage,
  ],
  imports: [
    IonicPageModule.forChild(CategoriesPage),
    PipesModule,
    OrderModule
  ],
})
export class CategoriesPageModule {}
