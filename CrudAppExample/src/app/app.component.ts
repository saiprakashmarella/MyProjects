import { Component } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CrudAppExample';
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }
  onStudent() {
    this.router.navigate(['/student']);
  }

  onCourse() {
    this.router.navigate(['/course']);
  }

  onBranch() {
    this.router.navigate(['/branch']);
  }
}
