import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor(private router:Router,private activatedRoute:ActivatedRoute) { }
SelectedId :any

posts=[
  {ID:1,Title:"LeaveIN",Body:"Leave-in products provide extra moisture to the hair, protect it from damage, and help detangle the strands. Nearly every hair type — curly or straight, natural or color-treated — can benefit from the use of leave-in conditioners, but you may find them particularly useful if you have dry, damaged, or frizzy hair"},
  {ID:2,Title:"Shampoo",Body:"Shampoo helps water remove dirt, debris, and odors, such as smoke or sweat effectively. Shampoos can also remove oil. The hair gets its oil from sebaceous glands that secrete oil called sebum, which keeps the hair moisturized. Moisturized hair is less likely to break or look dry and frizzy."},
  {ID:3,Title:"HairOil",Body:"Hair oiling is a treatment for healthy hair that hails from Ayurvedic medicinal traditions. Regular oiling may prevent hair from the damage caused by pollution and chemicals present in shampoo. It may also increase moisture, luster, and shine, and possibly preventing hair loss."},
  {ID:4,Title:"HairMask",Body:"Hair masks are treatments that you apply to your hair for a certain amount of time before rinsing them out. They add moisture and nutrients to your hair that help hydrate dry strands, increase shine, and prevent frizz"},
]
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params:ParamMap)=>{
      this.SelectedId=params.get("ID");
    })
  }
  

goToPostsDetails(post:any){
this.router.navigate(["/posts",post.ID]);
}
}