import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponent } from './new/new.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-app';
  heading = "Hello to Angular"
  description = "This is a simple Angular application"
  name = "Angular"
  age = 10
}





