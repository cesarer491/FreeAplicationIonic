import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersonsPage } from './persons';

@NgModule({
  declarations: [
    PersonsPage,
  ],
  imports: [
    IonicPageModule.forChild(PersonsPage),
  ],
  exports: [
    PersonsPage
  ]
})
export class PersonsPageModule {}
