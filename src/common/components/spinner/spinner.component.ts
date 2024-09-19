import { Component, inject, Input, OnInit } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BlockUIService } from '../../services/ui/block-ui.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [NgIf, MatProgressSpinnerModule],
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.scss'
})
export class SpinnerComponent implements OnInit{
  
  @Input() showSpinner = false;
  
  private blockUIService = inject(BlockUIService);
  
  ngOnInit(): void {
    this.blockUIService.loading$.subscribe((valor) => {
      this.showSpinner = valor > 0;
    });
  }

}