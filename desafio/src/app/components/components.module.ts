import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { ComponentsRoutingModule } from './components-routing.module';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [ FormComponent],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    FormsModule
  ]
})
export class ComponentsModule { }
