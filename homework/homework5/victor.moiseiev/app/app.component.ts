import { Component } from "@angular/core";
import { ActivatedRoute, Router, NavigationStart } from "@angular/router";

@Component({
  moduleId: module.id,
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.css"]
})
export class AppComponent {

  constructor(private router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        console.log(event);
      }
    });
  }


  public title = "app";
}
