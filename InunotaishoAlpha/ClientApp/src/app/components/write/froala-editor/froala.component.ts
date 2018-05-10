import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { FroalaEditorModule } from 'angular-froala-wysiwyg';
declare var $ :any;
import * as Cloudinary from '@cloudinary/angular-5.x';

@Component({
    selector:'froala-editor',
    templateUrl:'./froala.component.html',
})

export default class FroalaEditor implements OnInit {
    public editorOptions: any;

    constructor(){
        
    }

    @Input()
    public  post: string;

    @Output()
    public onChange: EventEmitter<any> = new EventEmitter();

    ngOnInit() {
        this.editorOptions = {
            placeholderText: 'Enter post here',
            charCounterCount: true,
            // Set the image upload parameter.
            imageUploadParam: 'file',
    
            // Set max image size to 5MB.
            imageMaxSize: 5 * 1024 * 1024,
    
            // Allow to upload PNG and JPG.
            imageAllowedTypes: ['jpeg', 'jpg', 'png'],
            //params for handling image upload

            events: {
                'froalaEditor.image.error': (e: any, editor: any, error: any, response: any) => {
                    console.log(error);
                }
            }
        }
    };

    modelChange(e: any) {
        this.onChange.emit(e);
    }
}