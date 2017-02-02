import {Component} from "@angular/core";

@Component({
    selector: "my-app",
    template:"<h1> {{welcomeMessage}} </h1>"
})

export class AppComponent {
    welcomeMessage: string = "Welcome to my first .NET Angular 2 project!!!!";
}