import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input({ required: true })
  caption: string = ''
  @Output()
  onCaptionClick: EventEmitter<any> = new EventEmitter()
  handleCaptionClick = () => {
    this.onCaptionClick.emit(this.caption)
  }
}
