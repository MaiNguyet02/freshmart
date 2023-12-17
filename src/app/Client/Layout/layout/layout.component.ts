import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements AfterViewInit{
  ngAfterViewInit() {
    const script = document.createElement('script');
    script.src = "assets/Client/js/main.js"
    document.body.appendChild(script)
}

}
