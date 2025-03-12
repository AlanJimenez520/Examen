import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  standalone: true,
  template: `<footer>{{ info }}</footer>`,

})
export class FooterComponent {
  @Input() info!: string;
}