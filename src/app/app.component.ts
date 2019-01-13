import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

  // Galleria Properties
  constructionImages: any[];
  woodenworkImages: any[];
  fallCeiling: any [];

  // Map Properties
  options: any;

  ngOnInit() {
    
    //Galleria Code
    this.constructionImages = [];
    this.woodenworkImages = [];
    this.fallCeiling = [];

    this.constructionImages.push({source:'assets/galleria/construction/cnimg1.jpg', alt:'Description for Image 1', title:'Title 1'});
    this.constructionImages.push({source:'assets/galleria/construction/cnimg2.jpg', alt:'Description for Image 2', title:'Title 2'});
    this.constructionImages.push({source:'assets/galleria/construction/cnimg3.jpg', alt:'Description for Image 3', title:'Title 3'});

    this.woodenworkImages.push({source:'assets/galleria/woodenwork/wwimg1.img', alt:'Description for Image 1', title:'Title 1'});

    this.fallCeiling.push({source:'assets/galleria/fallceiling/fcimg1.jpg', alt:'Description for Image 1', title:'Title 1'});
    this.fallCeiling.push({source:'assets/galleria/fallceiling/fcimg2.jpg', alt:'Description for Image 1', title:'Title 1'});
    this.fallCeiling.push({source:'assets/galleria/fallceiling/fcimg3.jpg', alt:'Description for Image 1', title:'Title 1'});
    this.fallCeiling.push({source:'assets/galleria/fallceiling/fcimg4.jpg', alt:'Description for Image 1', title:'Title 1'});
    this.fallCeiling.push({source:'assets/galleria/fallceiling/fcimg5.jpg', alt:'Description for Image 1', title:'Title 1'});
    this.fallCeiling.push({source:'assets/galleria/fallceiling/fcimg6.jpg', alt:'Description for Image 1', title:'Title 1'});
    this.fallCeiling.push({source:'assets/galleria/fallceiling/fcimg7.jpg', alt:'Description for Image 1', title:'Title 1'});
    this.fallCeiling.push({source:'assets/galleria/fallceiling/fcimg8.jpg', alt:'Description for Image 1', title:'Title 1'});
    this.fallCeiling.push({source:'assets/galleria/fallceiling/fcimg9.jpg', alt:'Description for Image 1', title:'Title 1'});
    this.fallCeiling.push({source:'assets/galleria/fallceiling/fcimg10.jpg', alt:'Description for Image 1', title:'Title 1'});
    this.fallCeiling.push({source:'assets/galleria/fallceiling/fcimg11.jpg', alt:'Description for Image 1', title:'Title 1'});
    this.fallCeiling.push({source:'assets/galleria/fallceiling/fcimg12.jpg', alt:'Description for Image 1', title:'Title 1'});
    this.fallCeiling.push({source:'assets/galleria/fallceiling/fcimg13.jpg', alt:'Description for Image 1', title:'Title 1'});
    this.fallCeiling.push({source:'assets/galleria/fallceiling/fcimg14.jpg', alt:'Description for Image 1', title:'Title 1'});
    this.fallCeiling.push({source:'assets/galleria/fallceiling/fcimg15.jpg', alt:'Description for Image 1', title:'Title 1'});
    this.fallCeiling.push({source:'assets/galleria/fallceiling/fcimg16.jpg', alt:'Description for Image 1', title:'Title 1'});
    this.fallCeiling.push({source:'assets/galleria/fallceiling/fcimg17.jpg', alt:'Description for Image 1', title:'Title 1'});
    this.fallCeiling.push({source:'assets/galleria/fallceiling/fcimg18.jpg', alt:'Description for Image 1', title:'Title 1'});

    // Google Map
    this.options = {
      center: {lat: 28.641485, lng: 77.371384}, 
      zoom: 12
  };

}

}
