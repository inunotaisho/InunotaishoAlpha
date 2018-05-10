import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';
import { TooltipModule } from 'ngx-bootstrap/tooltip';


@Component({
     templateUrl: './write.component.html',
})

export class WriteComponent implements OnDestroy {

    subject = '';
    post = ''; // our post that we want to edit

    editorOptions = {
        placeholderText: "Type your blog post here ",
        heightMin: 200
    };

    constructor(private http: HttpClient, private blogPostSub: Subscription) { }

    blogPost(e: any) {
        console.log(this.post);
        let blogPostSub = this.http.post('/blog', {
            subject: this.subject,
            post: this.post
        }).subscribe(res => {
            console.log(res)
        }, err => {
            console.log(err);
            console.log('article did not post');
        })
    }

    ngOnDestroy() {
        if (this.blogPostSub != undefined) {
            this.blogPostSub.unsubscribe();
        }
    }

    handlePostChange(post: any) {
        console.log(post);
        this.post = post;
    }

}