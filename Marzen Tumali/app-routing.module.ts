import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'skills', component: SkillsComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'contact', component: ContactComponent},
  {path: '', redirectTo:'about', pathMatch: 'full' }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AboutComponent, SkillsComponent, PortfolioComponent, ContactComponent]