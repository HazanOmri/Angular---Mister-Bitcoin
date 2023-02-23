import { NgModule } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RouterModule, Routes } from '@angular/router';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactDetailsComponent } from './cmps/contact-details/contact-details.component';
import { ContactEditComponent } from './cmps/contact-edit/contact-edit.component';
import { AuthGuard } from './guards/auth.guard';
import { ContactResolver } from './services/contact.resolver';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'contact/:id', component: ContactDetailsComponent, canActivate: [AuthGuard], resolve: { contact: ContactResolver } },
  { path: 'edit', component: ContactEditComponent },
  { path: 'edit/:id', component: ContactEditComponent, resolve: { contact: ContactResolver } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: environment?.production })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
