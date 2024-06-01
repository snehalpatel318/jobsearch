import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,NgClass,RouterOutlet],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor( private route: ActivatedRoute){
    this.route.paramMap.subscribe(params => {
      console.log(params);
    });
  }
  
}
