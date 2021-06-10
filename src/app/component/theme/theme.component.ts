import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Theme } from 'src/app/models/theme';
import { ThemeService } from 'src/app/service/theme.service';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent implements OnInit {
  public themes: Theme[] = [];

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    this.getThemes;
  }

  
  public getThemes(): void {
    this.themeService.getThemes().subscribe(
      (response: Theme[]) => {
        this.themes= response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  } 

}
