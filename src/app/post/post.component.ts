import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {PostService} from '../post.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  error;
  posts;
  isLoading = false;
  p: number = 1;
  constructor(private postService : PostService, private authService: AuthService) { }

  ngOnInit() {
    this.fetchAllPosts();
  }

  fetchAllPosts(){
    // this.httpService.get(this.url).subscribe(data =>{
    //   console.log(data);
    //   this.posts = data;
    // });
    this.isLoading = true;
    this.postService.getAllPosts().subscribe(data =>{
      debugger;
      this.isLoading = false;
      this.posts = data;
    },
    error => {
      if(error.status == '404'){
        this.error = "Loi khong tim thay";
      }
      else{
        console.log(error);
        this.error = "Loi server " + error.message;
      }
    }
    );
  }

  createPost(dataPost){
    this.postService.createPost(dataPost).subscribe(data =>{
      console.log("Created Post Success");
      this.fetchAllPosts();
    });
  }

  onCreate(){
    var dataPost = {
      "title": "Welcome class WD18305",
      "content": "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows you to run JavaScript on the server-side and build scalable network applications. In this guide, we will explore the basics of Node.js and how to get started with it.",
      "author": "John Doe",
      "tags": ["Node.js", "JavaScript", "Backend Development"],
      "comments": [
        {
          "username": "JaneSmith",
          "comment": "This is a very helpful guide. Thanks for sharing!",
          "createdAt": "2024-05-20T12:00:00Z"
        },
        {
          "username": "AliceJohnson",
          "comment": "Great introduction to Node.js!",
          "createdAt": "2024-05-21T08:30:00Z"
        }
      ]
    }
    ;
    this.createPost(dataPost);
  }

}
