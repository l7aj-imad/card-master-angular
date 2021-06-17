import { Injectable } from "@angular/core";
import { from, Observable } from "rxjs";
import { Theme } from "../models/theme";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
    //nice to meet you

export class ThemeService {
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http:HttpClient){}

    public getThemes(): Observable<Theme[]> {
        return this.http.get<Theme[]>(`${this.apiServerUrl}/theme/all`);
    }

    public findTheme(themeId: number): Observable<Theme> {
        return this.http.get<Theme>(`${this.apiServerUrl}/theme/find/${themeId}`);
    }

    public addTheme(theme: Theme): Observable<Theme> {
        return this.http.post<Theme>(`${this.apiServerUrl}/theme/add`, theme);
    }

    public updateTheme(theme: Theme): Observable<Theme> {
        return this.http.put<Theme>(`${this.apiServerUrl}/theme/update`, theme);
    }

    public deleteTheme(themeId: number): Observable<void> {
        return this.http.delete<void>(`${this.apiServerUrl}/theme/delete/${themeId}`);
    }
}