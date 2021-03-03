import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss']
})
export class SplashScreenComponent implements OnInit {


  constructor(
    private router: Router,
  ) { }



  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['/main/store/products']);
    }, 3000);
  }
}
