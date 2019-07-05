import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';

const routes: Routes = [
 
  {path: 'form', loadChildren: './components/components.module#ComponentsModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
