// Root application component that renders the router outlet.
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet],
    templateUrl: './app.component.html'
})
export class AppComponent {
    title = 'survey-frontend';
}
