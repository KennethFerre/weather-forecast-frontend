import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BlockUIService } from '../common/services/ui/block-ui.service';
import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, MatProgressSpinnerModule, MatButtonModule,  MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  
  title = 'weather-forecast-frontend';
  showLoading = false;

  private blockUIService = inject(BlockUIService);

  ngOnInit(): void {
    this.blockUIService.loading$.subscribe((valor) => {
      this.showLoading = valor > 0;
    });
  }

}
