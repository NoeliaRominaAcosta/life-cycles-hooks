import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-bar.component.html',
styles : `
nav {
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
}
.active {
  color: #341162;
  font-weight: bold;
}
`
})
export class NavBarComponent { }
