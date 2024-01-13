import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  constructor(private gifsService: GifsService) {
    this.gifsService.tagsHistory;
  }

  get tags(): string[] {
    return this.gifsService.tagsHistory;
  }

  searchTag(tag: string): void {
    this.gifsService.searchTag(tag);
  }
}
