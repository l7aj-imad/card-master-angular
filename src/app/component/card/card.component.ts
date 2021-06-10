import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card';
import { CardService } from 'src/app/service/card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  public cards: Card[] = [];
  constructor(private cardService:CardService) { }

  ngOnInit(): void {
    this.getCards;
  }

  
  public getCards(): void {
    this.cardService.getCards().subscribe(
      (response: Card[]) => {
        this.cards= response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
