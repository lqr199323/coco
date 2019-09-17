<template>
  <section class="row mx-0">
    <div id="demo" class="carousel col-12 px-0" :style="{width:innerWidth+'px'}" @mouseenter="stop" @mouseleave="start">
      <!--1.轮播图片-->
    <div class="carousel-inner" :class="ulClass" :style="ulStyle">
      <div v-for="(img,i) of imgs" :key="i" class="carousel-item" :style="{width:innerWidth+'px'}">
        <router-link :to="img.to" :title="img.title">
          <img :src="img.src" :style="{width:innerWidth+'px'}"/>
        </router-link>
        <!-- <router-link :to="img.to" v-text="img.title"></router-link> -->
      </div>
      <div class="carousel-item" :style="{width:innerWidth+'px'}">
        <router-link :to="imgs[0].to" :title="imgs[0].title">
          <img :src="imgs[0].src" :style="{width:innerWidth+'px'}"/>
        </router-link>
        <!-- <router-link :to="imgs[0].to" v-text="imgs[0].title"></router-link> -->
      </div>
    </div>
    <!--2.左右箭头-->
    <a href="javascript:;" @click="move(1)" class="carousel-control-next">
        <span class="next-icon">&gt;</span>
    </a>
    <a href="javascript:;" @click="move(-1)" class="carousel-control-prev">
        <span class="prev-icon">&lt;</span>
    </a>
    <!--3.轮播指示符-->
    <ul class="carousel-indicators">
        <li v-for="(img,idx) of imgs" :key="idx" :class="idx==i?'active':''" @click="moveTo(idx)"></li>
    </ul>
  </div>
  </section>
</template>
<script>
export default {
  data(){
    return {
      innerWidth:window.innerWidth-17,
      ulClass:{ hasTrans:true },
      i:0,
      imgs:[
        {
          src:require("../../public/img/444.jpg"),
          title:"1",
          to:"javascript:;"
        },
        { 
          src:require("../../public/img/333.jpg"),
          title:"1",
          to:"javascript:;"
        },
        { 
          src:require("../../public/img/1111.jpg"),
          title:"1",
          to:"javascript:;"
        },
        { 
          src:require("../../public/img/222.jpg"),
          title:"1",
          to:"javascript:;"
        },
      ],
      canClick:true,
      timer:null
    }
  },
  created(){
    window.addEventListener("resize",()=>{
      this.innerWidth=window.innerWidth;
    })
    this.start();
  },
  methods:{
    stop(){
      clearInterval(this.timer);
    },
    start(){
      this.timer=setInterval(()=>{
        this.move(1);
      },3000)
    },
    move(i){
      if(this.canClick){
        this.canClick=false;
        if(i==-1&&this.i==0){
          this.ulClass.hasTrans=false;
          setTimeout(()=>{
            this.i=this.imgs.length;
            setTimeout(()=>{
              this.ulClass.hasTrans=true;
              this.i+=i;
              setTimeout(()=>{
                this.canClick=true;
              },200)
            },50)
          },50)
        }else if(i==1&&this.i==this.imgs.length-1){
          this.i+=i;
          setTimeout(()=>{
            this.ulClass.hasTrans=false;
            setTimeout(()=>{
              this.i=0;
              setTimeout(()=>{
                this.ulClass.hasTrans=true;
                setTimeout(()=>{
                  this.canClick=true;
                })
              },50)
            },50)
          },200)
        }else{
          this.i+=i;
          setTimeout(()=>{
            this.canClick=true;
          },300)
        }
      }
    },
    moveTo(i){
      if(this.canClick){
        this.i=i;
        this.canClick=false;
        setTimeout(()=>{
          this.canClick=true;
        },300)
      }
    }
  },
  computed:{
    ulStyle(){
      var width=this.innerWidth*(this.imgs.length+1)+"px";
      var marginLeft=-this.i*this.innerWidth+"px";  
      return { width, marginLeft }
    }
  }
}
</script>
<style scoped>
/* section>#carousel>.carousel-inner>div>a{
    display:block;
  } */
  section>.carousel{
    margin-top:47px;
    overflow:hidden;
  }
  section>.carousel:after{
    content:"";
    display:block;
    clear:both;
  }
   section>.carousel>.carousel-inner.hasTrans{
     transition:all .2s linear;
   }
  section>.carousel>.carousel-inner>.carousel-item{
    display:block;
    float:left;
  }
  

  /*重写指示符的样式*/
  .carousel-indicators{
    bottom:60px;
  }
  .carousel-indicators li{
    background-color:#fff;
    border:#ff8a06 1px solid;
    margin-left:6px;
    margin-right:6px;
    border-radius: 50%;
    top:60px;
  }
  .carousel-indicators>li:hover, .carousel-indicators>li.active{
    background: #ff8a06;
    transform:scale(1.3)
  }
  
  /*重写左右箭头的样式*/
   @media screen and (min-width:992px) {
       .carousel-control-prev,
  .carousel-control-next{
    width:80px;height:80px;
  }
  .carousel-control-prev{
    margin-left:-40px;
  }
   .carousel-control-next{
    margin-right:-40px;
  } 
  .next-icon{
    margin-right:23px;
  } 
  .prev-icon{
    margin-left:23px;
  }
  .carousel-indicators li{
    width:8px;height:8px;}
  }
   .next-icon,.prev-icon{
    color:#ff8a06;
    font-size:1.5rem;
    font-weight:bolder;
  } 
  @media screen and (min-width:768px) and (max-width:991px){
     .carousel-control-prev,
  .carousel-control-next{
    width:80px;height:80px;
  }
  .carousel-control-prev{
    margin-left:-40px;
  }
  .carousel-control-next{
    margin-right:-40px;
  }
  .next-icon{
    margin-right:23px;
  } 
  .prev-icon{
    margin-left:23px;
  }
  .carousel-indicators li{
    width:8px;height:8px;}
    
  }
   .next-icon,.prev-icon{
    color:#ff8a06;
    font-size:1.5rem;
    font-weight:bolder;
  } 
 @media screen and (max-width:767px){
    .carousel-control-prev,
  .carousel-control-next{
    width:40px;height:40px;
  }
  .carousel-control-prev{
    margin-left:-20px;
  }
  .carousel-control-next{
    margin-right:-20px;
  }
  .next-icon{
    margin-right:13px;
  } 
  .prev-icon{
    margin-left:13px;
  }
  .carousel-indicators li{
    width:4px;height:4px;}
     
  .next-icon,.prev-icon{
    color:#ff8a06;
    font-size:0.5rem;
    font-weight:bolder;
  } 
 }
  .carousel-control-prev,
  .carousel-control-next{
    
    background-color:rgba(252, 252, 252, 0.829);
    top:40%;
    border:2px solid #ff8a06;
    border-radius: 50%;
  }
  
 
  
 .carousel-control-prev:hover,
  .carousel-control-next:hover{
    background-color:#ff8a06;
  }
  .carousel-control-prev:hover .prev-icon,
  .carousel-control-next:hover .next-icon{
    color:white;
  }
</style>


