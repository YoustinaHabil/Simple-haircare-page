import { Component, OnInit } from '@angular/core';
//import { relative } from 'path';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-posts-details',
  templateUrl: './posts-details.component.html',
  styleUrls: ['./posts-details.component.scss']
})
export class PostsDetailsComponent implements OnInit {
PostId:any
  constructor(private activatedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
//this.PostId=this.activatedRoute.snapshot.paramMap.get("ID");
this.activatedRoute.paramMap.subscribe((params:ParamMap)=>{
  this.PostId=params.get("ID");
})
  }
  goNext(){
let nextid=parseInt(this.PostId)+1;
this.router.navigate(["/posts",nextid]);

  }

  goPrevious(){
    let previd=parseInt(this.PostId)-1;
    this.router.navigate(["/posts",previd]);
  }
  goBack(){
    this.router.navigate(["/posts",{id:this.PostId}])
  }
WithDiscount(){
this.router.navigate(['withdiscount'],{relativeTo:this.activatedRoute})
}
WithOutDiscount(){
  this.router.navigate(['withoutdiscount'],{relativeTo:this.activatedRoute})
}
}