import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit {

  @Input()
  public gif!: Gif;

  constructor() { }

  ngOnInit() { 
    if (!this.gif) throw new Error("gif property is required");
     
  }
}