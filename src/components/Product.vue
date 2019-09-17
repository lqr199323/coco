<template>
    <div class="products">
        <div class="container" >
            <div class="row">
                <div class="productsTitle text-align col-12 align-items-center">
                    <p>推荐饮品</p>
                </div>
                <div class="productsImg col-md-4 col-xs-12 text-center align-items-center px-0">
                    <!-- <div class="canvas" id="canvas"></div> -->
                    <img src="../../public/img/cup.png" id="cupImg" class="cup">
                    <!-- <div class="cup"></div>
                    <div class="ice"></div>
                    <div class="full" id="full-drink"></div> -->
                </div>
                <div class="productsContent col-md-8 col-xs-12 row mx-0 px-0 ">
                    <div class="productsTitle_s prdTitle col-12 px-0">
                        <h2 class="text-sm-center text-md-left">选择当季食材</h2>
                        <p>一起了解CoCo 为您严选优质茶叶以及在地化采购季节鲜果并且不断创新研发严格食安控管所制成的健康茶饮!</p>
                    </div>
                    <div class="productsTitle_s col-12 px-0 row mx-0" id="prdContain">
                        <div class="productsItems col-lg-3 col-sm-4 px-0 py-3"></div>
                        <div class="productsItems col-lg-3 col-sm-4 px-0 py-3"></div>
                    </div>
                    <div class="col-12 px-0 row mx-0 items1">
                        <div class="productsItems  col-lg-3 col-sm-4  px-0 py-3" v-for="(item,i) of products1" :key="i" :data-i="i">
                            <div class="productsItemsImg" @mouseover="show" @click="change" >
                                <a href="javascript:;" class="img-plus">
                                    <span class="_title" v-text="item.title"></span>
                                    <img :src="item.pic" class="specilPic" :data-i="i">
                                </a>
                                <a href="javascript:;" class="plus" :data-i="i"></a>
                            </div>
                            <div class="productsItemsTitle">
                                <span class="pName text-center" v-text="item.name"></span>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 px-0 row mx-0 items2 d-flex" >
                        <div class="productsItems  col-lg-3 col-sm-4  px-0 py-3 " v-for="(item,index) of products2[this.i]" :key="index" :data-index="index">
                            <div class="productsItemsImg" @mouseover="show" @click="add" >
                                <a href="javascript:;" class="img-plus">
                                    <span class="_title" v-text="item.title"></span>
                                    <img :src="item.pic" class="specilPic" :data-index="index">
                                </a>
                                <a href="javascript:;" class="plus" :data-index="index"></a>
                            </div>
                            <div class="productsItemsTitle">
                                <span  class="pName text-center" v-text="item.name"></span>
                            </div>
                        </div>
                    </div>
                    <div class="endBtn">
                        <a href="javascript:location.reload();" class="refresh">
                        重新整理
                        <img src="../../public/img/resetIcon.png">
                        </a>
                        <a href="http://www.coco-tea.com.cn/#" class="details">
                            详细介绍
                        <img src="../../public/img/next.png">
                        </a>
                </div>
                </div>
            </div>
        </div>
        <div class="bg_wave"></div>
    </div>
</template>
<script>
export default {
  data(){
      return {
        i:"",
        products1:[
            {name:"柠檬片",title:"酸酸柠檬超多Ç",pic:require("../../public/img/檸檬片80x80.png")},
            {name:"珍珠",title:"Q弹饱满有活力",pic:require("../../public/img/珍珠80x80.png")},
            {name:"金桔",title:"金黄的酸劲",pic:require("../../public/img/金桔80x80.png")},
            {name:"慕斯奶盖",title:"慕斯奶盖",pic:require("../../public/img/奶泡80x80.png")},
            {name:"布丁",title:"布丁",pic:require("../../public/img/布丁80x80.png")},
            {name:"牛奶",title:"牛奶",pic:require("../../public/img/牛奶玻璃杯80x80.png")},
            {name:"益菌多",title:"有助消化",pic:require("../../public/img/養樂多80x80.png")},
            {name:"柠檬",title:"酸酸柠檬超多Ç",pic:require("../../public/img/檸檬80x80.png")},
            {name:"现磨咖啡",title:"最简单也最讲究",pic:require("../../public/img/咖啡80x80.png")},
            {name:"百香果",title:"清爽酸甜好滋味",pic:require("../../public/img/5-1百香果80x80.png")},
        ],
        products2:[
            [{name:"红茶",title:"浓醇红茶",pic:require("../../public/img/紅茶80x80_.png")}],
            [{name:"奶茶",title:"奶茶",pic:require("../../public/img/7-1coco奶茶80x80.png")}],
            [{name:"柠檬片",title:"酸酸柠檬超多Ç",pic:require("../../public/img/檸檬片80x80.png")}],
            [   
                {name:"绿茶",title:"绿茶",pic:require("../../public/img/4-1綠茶80x80.png")},
                {name:"红茶",title:"浓醇红茶",pic:require("../../public/img/紅茶80x80_.png")}
            ],
            [{name:"奶茶",title:"奶茶",pic:require("../../public/img/7-1coco奶茶80x80.png")}],
            [{name:"现磨咖啡",title:"最简单也最讲究",pic:require("../../public/img/咖啡80x80.png")}],
            [{name:"柠檬片",title:"酸酸柠檬超多Ç",pic:require("../../public/img/檸檬片80x80.png")}],
            [ {name:"绿茶",title:"绿茶",pic:require("../../public/img/4-1綠茶80x80.png")}],
            [{name:"现磨咖啡",title:"最简单也最讲究",pic:require("../../public/img/咖啡80x80.png")}],
            [{name:"珍珠加椰果",title:"珍珠加椰果",pic:require("../../public/img/2-1珍珠加椰果80x80.png")}],
        ],
        details:[
            [{name:"鲜柠檬红茶",title:"严选产地鲜柠檬原汁，丰富的维C，搭配浓醇的红茶，果香酸甜红茶香醇，让您消暑拥有好气色。",pic:require("../../public/img/鲜柠檬红茶370X190.png")}],
            [{name:"珍珠奶茶",title:"香醇浓郁的奶茶融入香Q弹牙、嚼劲十足的珍珠，经典饮品却拥有丰富享受，是CoCo最具人气饮品。",pic:require("../../public/img/珍珠奶茶370X190.png")}],
            [{name:"金桔柠檬汁",title:"严选产地金桔、加入鲜榨柠檬原汁，富含维C，果香浓郁更添美味与健康，让您每日都神采奕奕。",pic:require("../../public/img/金桔柠檬汁370X190.png")}],
            [{name:"慕斯奶盖绿茶",title:"融合香草风味、绵密细致的慕斯，覆盖在淡雅的茉莉茶香上，一口啜入，香甜甘醇的双重口感，仿佛置身幸福花园。",pic:require("../../public/img/慕斯奶盖绿茶370X190.png")},
            {name:"慕斯奶盖红茶",title:"融合香草风味、绵密细致的慕斯，覆盖在淡雅的茉莉茶香上，一口啜入，香甜甘醇的双重口感，仿佛置身幸福花园。",pic:require("../../public/img/慕斯奶盖红茶370X190.png")},],
            [{name:"布丁奶茶",title:"香醇浓郁的奶茶融入顺滑口感香甜软嫩的布丁，同时触动的味蕾及嗅觉的丰富享受，是Co粉必点饮品。",pic:require("../../public/img/布丁奶茶370X190.png")}],
            [{name:"拿铁咖啡",title:"采用优质阿拉比卡咖啡豆，以德国进口咖啡机萃取，咖啡和鲜奶的经典组合，爱喝咖啡的你一定不能错过。",pic:require("../../public/img/拿铁370X190.png")}],
            [{name:"柠檬椰果益菌多",title:"鲜榨柠檬原汁富含维C，搭配可帮助肠道生态平衡、提高免疫力的乳酸菌，加入高纤椰果，口感层次丰富迷人！",pic:require("../../public/img/柠檬椰果益菌多370X190.png")}],
            [{name:"柠檬霸",title:"严选当季新鲜柠檬，萃取整颗柠檬原汁，融入甘醇绿茶，富含维生素，清新果香消暑解渴，带来满满活力!",pic:require("../../public/img/柠檬霸370X190.png")}],
            [{name:"现磨咖啡",title:"最简单也最讲究，采用优质阿拉比卡咖啡豆，以德国进口咖啡机萃取，喝一杯原汁原味的黑咖啡，品尝咖啡最单纯的风味。",pic:require("../../public/img/美式咖啡370X190.png")}],
            [{name:"鲜百香双响炮",title:"百香果含有上百种水果芳香物质，是世界上最芳香的水果之一，含多种氨基酸及维生素，能舒缓压力及养颜美容。搭配高纤椰果及QQ珍珠，绝对让您赞不绝口！",pic:require("../../public/img/鲜百香双响炮370X190.png")}],
        ]
    }
  },
  methods:{
      show(e){
          if(e.target.nodeName=="IMG"){
             $(e.target).css("opacity",".6");
             $(e.target).prev("span").css("display","inline-block");
             $(e.target).on("mouseleave",function(){
                 $(e.target).css("opacity","1");
                 $(e.target).prev("span").css("display","none")
             })
          }
      },
      
      change(e){
          $("#cupImg").attr("src",require("../../public/img/ice.png"));
          $(".specilPic").css("opacity","1");
          $("._title").css("display","none")
          var $this=e.target;
          if($this.nodeName=="IMG"){
            this.i=$this.dataset.i;
           var html1=$($this).parent().parent().parent().html();
          }
          if($this.nodeName=="A"){
            this.i=$this.dataset.i;
           var html1=$($this).parent().parent().html();
            
          }
          $(".items2").css("display","block");
          $("#prdContain").children().first().html(html1)
          $(".items1").remove();

      },
      add(e){
          $(".specilPic").css("opacity","1");
          $("._title").css("display","none")
          var $this=e.target;
         if($this.nodeName=="IMG"){
            var num=e.target.dataset.index;
            var html2=$($this).parent().parent().parent().html();
          }
          if($this.nodeName=="A"){
            var num=e.target.dataset.index;
            var html2=$($this).parent().parent().html();
          }
            $("#prdContain").children().last().html(html2)
            $(".items2").remove();
            $("#cupImg").attr("src",this.details[this.i][num].pic);
            $(".prdTitle").children("h2").text(this.details[this.i][num].name)
            $(".prdTitle").children("p").text(this.details[this.i][num].title)
            $(".endBtn").css("display","block")
      }
}
}
</script>
<style scoped>
    .products{
        background-size: cover;
        background: url(../../public/img/productBg.png);
        padding-bottom: 100px;
    }
    
    .productsTitle{
        background: url(../../public/img/seasonBg.png) no-repeat center center;
        text-align: center;
        margin:2rem 0;
        padding-top: 0.8rem;
       
    }
    .productsTitle>p{
        color: #ff5b0c;
        font-size: 1.8rem;
        line-height: 2.3em; 
    }
    .productsTitle_s .specilPic{
        border:3px solid #ff5b0c;
    }
    .products .productsImg{
        position:relative;
        display:block;
        float:right !important;
        /* padding-top:105px; */
    }
    .products .productsImg .cup{
        z-index:2;
        position:relative;
        transition: 2s linear;
    }
    .productsContent{
        float: left !important;
        padding: 0 1.8rem;
    }
    .products .productsContent .productsTitle_s h2 {
    color: #ff5b0c;
    font-size: 1.8rem;
    }
    .products .productsContent .productsItems, .products .productsContent .productsItems2 {
    margin-top: 15px;
    display: table;
    text-align: center;
}
.products .productsContent .productsItems .productsItemsImg, .products .productsContent .productsItems2 .productsItemsImg {
    text-align: center;
    position: relative;
    display: inline-block;
}
.products .productsContent .productsItems .plus, .products .productsContent .productsItems2 .plus2 {
    position: absolute;
    width: 35px;
    height: 35px;
    background-color: #ff5b0c;
    border-radius: 50%;
    color: #fff;
    font-size: inherit;
    font-weight: bold;
    text-decoration: none;
    box-shadow: 5px 5px 10px -3px rgba(0,0,0,0.4);
    right: -14px;
    bottom: -6px;
    background-image: url(../../public/img/icons-plug.png);
    background-size: 14px 15px;
    box-sizing: border-box;
    background-repeat: no-repeat;
    background-position: center center;
    cursor: pointer;
}
.specilPic {
    border-style:solid;
    border-radius:5em;
    border-width:5px;
    border-color:transparent
}
.specilPic.activeImg {
    border-color: #FF5b0c;
}
._title{
    display:none;
    position: absolute;
    width: 6rem;
    top:-2.5rem;
    z-index: 1;
    font-size: 12px;
    border:#FF5b0c solid 2px;
    color: #FF5b0c;
    border-radius: 0.2rem;
    padding:0.5rem 0;
    background: #fff;
    text-align:center;
}
 @media screen and (max-width:767px){
    .productsItems{
       width: 30% !important;
    }
}
.itmes1,.items2{
    transition:2s linear
}
.items2{
    display:none;
}
.endBtn{
    display: none;
    transition: 2s linear;
}
.endBtn a.refresh,a.details{
    padding: 8px 10px !important;
  }
  .endBtn a {
      text-decoration: none;
      display: block;
      float: left;
      border: 1px solid #ff5b0c;
      color: #ff5b0c;
      font-size: 18px;
      letter-spacing: 2px;
      margin: 0 10px;
  }
.bg_wave{
  content:"";
  height: 46px;
  position: relative;
  background: url(../../public/img/wave.png) repeat-x;
  left: 0px;
  width: 100%;
  top: 100px;
  }
.bg_wave{
  animation: waveanime 10s linear 1s infinite;
 /* -webkit-animation: waveanime 10s linear 1s infinite;
  -moz-animation: waveanime 10s linear 1s infinite;
    -webkit-animation-name:'waveanime';
    -webkit-animation-duration: 10s;/*动画时间
   
     -webkit-animation-timing-function: ease-in-out; /*动画，和transition-timing-function是一样的
     -webkit-animation-delay: 1s;/*动画延迟
     -webkit-animation-iteration-count: infinite;定义循环，infinite为无限次 */ 

}
@keyframes waveanime{
  0% {background-position:0 0;}
  100% {background-position:800px 0;}
}
@-webkit-keyframes waveanime{
  0% {background-position:0 0;}
  100% {background-position:800px 0;}
}
</style>