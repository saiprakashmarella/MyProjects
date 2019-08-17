import { Component, OnInit } from '@angular/core';
import { TimelineMax } from 'gsap';

import { TweenLite } from 'gsap';
import { importExpr } from '@angular/compiler/src/output/output_ast';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.test()
  }
  title = 'Resp';
  menu = new TimelineMax({ paused: true, reversed: true });

  test() {

    this.menu.to("#txt1", 3, { color: "#f00", opacity: '0', display: 'block', ease: "Expo.easeInOut" }, 0)
      .to("#txt2", 3, { color: "#f00", opacity: '0', display: 'none', ease: "Expo.easeInOut" }, 0);
  }
  btnclick() {

    if (this.menu.reversed()) {
      this.menu.play();

    }
    else {
      this.menu.reverse();
    }
    return console.log('Clicked Me');
  }

}


