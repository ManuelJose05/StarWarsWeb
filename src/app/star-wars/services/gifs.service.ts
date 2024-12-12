import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Datum, SearchResponse } from '../interfaces/gif_response.interface';

@Injectable({providedIn: 'root'})
export class GifsService {
    private gifsUrl:string = 'https://api.giphy.com/v1/gifs/search';
    private api_key:string = 'u7e0tWy0QxR70K7iFBn1ll4HGYaePaNv';
    private limit:number = 1;
    public gifList: Datum[] = [];


    constructor(private http: HttpClient){
    }

    private _tagsHistory: string[] = [];

    get tagHistory(){
        return [...this._tagsHistory];
    }

    public searchTag(tag:string):void{
        if (!this._tagsHistory.includes(tag.toLocaleLowerCase()) && this._tagsHistory.length < 10) this._tagsHistory.unshift(tag.toLocaleLowerCase());
        // this.saveLocalStorage();

        const params = new HttpParams()
        .set('api_key',this.api_key)
        .set('q',tag)
        .set('limit',this.limit);

        this.http.get<SearchResponse>(this.gifsUrl,{params})
        .subscribe(response => {
            if (response) this.gifList.push(response.data[0])
        });
    }

    public getGifs():Datum[]{
        return this.gifList
    }
}