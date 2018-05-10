import { HttpClient } from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import { NgIf } from '@angular/common';


@Component({
    templateUrl: './blogpost.component.html',
})
export class BlogPostComponent implements OnInit{
    items: {};
    constructor(private http:HttpClient) {

     }

     getPostItems(){

     }
    ngOnInit(): void {
        this.getPostItems();
    }
    
}