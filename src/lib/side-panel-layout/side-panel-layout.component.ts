import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'nb-side-panel-layout',
  standalone: true,
  imports: [CommonModule, MatSidenavModule, MatButtonModule, MatIconModule],
  templateUrl: './side-panel-layout.component.html',
  styleUrl: './side-panel-layout.component.scss',
})
export class SidePanelLayoutComponent {}
