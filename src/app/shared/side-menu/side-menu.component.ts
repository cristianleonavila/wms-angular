import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'app-sidemenu',
  templateUrl: './side-menu.component.html',
  styles: ``
})
export class SideMenuComponent {

  public menuItems = routes
  .map( route => route.children ?? [])
  .flat()
  .filter( route => route.path && !route.path.includes(':'));

  constructor() {


  }
}
