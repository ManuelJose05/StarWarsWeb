import { Component, ElementRef, EventEmitter, Output, ViewChild, viewChild } from '@angular/core';
import { StarWarsService } from '../../../star-wars/services/star-wars.service';
import { Router, RouterLink } from '@angular/router';
import { delay, timeInterval } from 'rxjs';

@Component({
  selector: 'app-shared-sidebar',
  templateUrl: './shared-sidebar.component.html',
})
export class SharedSidebarComponent {
  constructor(
    private router: Router
  ){}

  @ViewChild('search')
  public tagInput!: ElementRef<HTMLInputElement>

  searchStarWarsElement():void {
    localStorage.removeItem('tag')
    localStorage.setItem('tag',this.tagInput.nativeElement.value)
    this.router.navigateByUrl('both')
  }
}
