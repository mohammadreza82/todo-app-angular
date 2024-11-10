import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-root',
  // standalone = ماژول و کامپوننت رو یکی میکنه با هم دیگه
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'todo-app-angular';
  // stringBinding
  user: string = 'MohammadReza Jamshidi'
  id = 'n-1'
  handleClick = () => {
    alert(`Hello ${this.user}`)
  }
  hansleMouseEnter = (e: MouseEvent) => {
    console.log({ x: e.x, y: e.y })
  }
}
