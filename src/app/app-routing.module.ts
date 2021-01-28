import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { ContactComponent } from './contact/contact.component';
const routes: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'contact/:id', component: ContactComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
