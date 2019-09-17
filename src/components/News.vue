<template>
    <div class="container news px-0">
    <!-- news -->
        <div class="row mx-0">
            <div class="newsTitle text-center col-12">
                <p class="w-100">最新消息</p>
            </div>
            <div class="navbar navbar-expand-sm col-12 row p-0 mx-0 mb-5">
            <!-- 2.折叠之后出现的按钮 -->
                <button data-toggle="collapse" data-target="#content" class="navbar-toggler col-2 border-0 px-sm-0">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <!-- 3.折叠的导航,小屏折叠,大屏横向 -->
                <div id="content" class="collapse navbar-collapse col-12 row mx-0 px-0">
                    <ul class="nav navbar-nav d-flex justify-content-center col-12 px-0 " >
                        <li class="nav-item d-flex align-items-center justify-content-center flex-nowrap p-2 mx-md-2 mx-xs-0"  v-for="(item,i) of this.nav_title" :key="i" :class="idx==i?'li_active':''" @mouseover="change" @mouseleave="back" @click="now1" :data-i="i">
                            <img :src="idx==i?item.src1:item.src3" alt="" style="width:20px;height:20px;" :data-i="i">
                            <a :data-i="i" data-toggle="pill" class="nav-link" :href="item.href" :class="idx==i?'a_active':''"  v-text="item.name" ></a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="tab-content" @mouseover="change1">
                <div id="all" class="tab-pane col-12 row p-0 mx-0  active">
                    <ul class="d-flex col-12 px-0 row mx-0">
                        <li class="col-md-3 col-xs-6 px-0 mb-5 newsItem" v-for="(item,i) of this.newsList" :key="i">
                            <div>
                                <img :src="item.pic" alt="" class="w-100 p-2">
                                <router-link :to="item.href" v-text="item.title" class="p-1"></router-link>
                                <router-link :to="item.href" v-cloak class="zhezao"><span>详情 &gt;</span></router-link>
                            </div>
                        </li>
                    </ul>
                </div>
                <div id="new" class="tab-pane col-12 row p-0 mx-0">
                    <ul class="col-12 px-0 row mx-0">
                        <li v-for="(item,i) of this.newsList" :key="i" :class="item.nid==1?'col-md-3 col-xs-6 px-0 mb-5 newsItem':'d-none'" :data-i="i" >
                            
                                <img :src="item.pic" alt="" class="w-100 p-2">
                                <router-link :to="item.href" v-text="item.title" class="p-1"></router-link>
                                <router-link :to="item.href" v-cloak class="zhezao"><span>详情 &gt;</span></router-link>
                            
                        </li>
                    </ul>
                </div>
                <div id="media" class="tab-pane col-12 row p-0 mx-0">
                    <ul class="col-12 px-0 row mx-0">
                        <li v-for="(item,i) of this.newsList" :key="i" :class="item.nid==2?'col-md-3 col-xs-6 px-0 mb-5 newsItem':'d-none'" :data-i="i" >
                            
                                <img :src="item.pic" alt="" class="w-100 p-2">
                                <router-link :to="item.href" v-text="item.title" class="p-1"></router-link>
                                <router-link :to="item.href" v-cloak class="zhezao"><span>详情 &gt;</span></router-link>
                            
                        </li>
                    </ul>
                </div>
                <div id="member" class="tab-pane col-12 row p-0 mx-0">
                    <ul class="col-12 px-0 row mx-0">
                        <li v-for="(item,i) of this.newsList" :key="i" :class="item.nid==3?'col-md-3 col-xs-6 px-0 mb-5 newsItem':'d-none'" :data-i="i" >
                            
                                <img :src="item.pic" alt="" class="w-100 p-2 newsimg">
                                <router-link :to="item.href" v-text="item.title" class="p-1 newslink"></router-link>
                                <router-link :to="item.href" v-cloak class="zhezao"><span>详情 &gt;</span></router-link>
                            
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    <!-- /.row -->
    <!-- news end -->
</div>
</template>
<script>
export default {
    data(){
        return{
            idx:0,
            nav_title:[
                {name:"全部",isHover:0,src1:require("../../public/img/all01.png"),src2:require("../../public/img/all03.png"),src3:require("../../public/img/all02.png"),href:"#all"},
                {name:"最新消息",isHover:0,src1:require("../../public/img/l01.png"),src2:require("../../public/img/l03.png"),src3:require("../../public/img/l02.png"),href:"#new"},
                {name:"媒体报导",isHover:0,src1:require("../../public/img/lb01.png"),src2:require("../../public/img/lb03.png"),src3:require("../../public/img/lb02.png"),href:"#media"},
                {name:"会员专属",isHover:0,src1:require("../../public/img/b1.png"),src2:require("../../public/img/b03.png"),src3:require("../../public/img/b02.png"),href:"#member"},
            ],
            newsList:[
                {id:1,title:"CoCo都可声明",pic:require("../../public/img/1.jpg"),nid:2,href:"javascript:;"},
                {id:2,title:"官宣！鲜芋雪冰上啦~",pic:require("../../public/img/官网小.png"),nid:1,href:"javascript:;"},
                {id:3,title:"今夏，“果”然很有趣！",pic:require("../../public/img/官网小Banner.jpg"),nid:1,href:"javascript:;"},
                {id:4,title:"红果 · 出色季 | 像火龙果一样出色",pic:require("../../public/img/红果桃桃官网小banner_红果.jpg"),nid:1,href:"javascript:;"},
                {id:5,title:"CoCo影院 | 映刻美好时光",pic:require("../../public/img/CoCo影院.jpg"),nid:1,href:"javascript:;"},
                {id:6,title:"你被CoCo都可点名，完成一朵小红花的心愿",pic:require("../../public/img/官网-春蕾计划.jpg"),nid:1,href:"javascript:;"},
                {id:7,title:"定义你的2019新美好，让他告诉你......",pic:require("../../public/img/222222.jpg"),nid:1,href:"javascript:;"},
                {id:8,title:"大师滴滤咖啡 | 一杯拥有大师手冲基因的咖啡",pic:require("../../public/img/咖啡.jpg"),nid:1,href:"javascript:;"},
            ]
        }
    },
    methods:{
        change(e){
            if(e.target.nodeName=="LI"){
                if($(e.target).hasClass("li_active")){
                    return;
                }else{
                    var i= e.target.dataset.i;
                    for(var num=0;num<this.nav_title.length;num++){
                        if(num==i){
                            this.nav_title[i].isHover=1;
                            $(e.target).children(["a"]).css("color","#ff5b0c");
                        }
                }}}
            },
        back(e){
            if(e.target.nodeName=="LI"){
                if($(e.target).hasClass("li_active")){
                    return;
                }else{
                    var i= e.target.dataset.i;
                    for(var num=0;num<this.nav_title.length;num++){
                        if(num==i){
                        this.nav_title[i].isHover=0;
                        $(e.target).children(["a"]).css("color","#666666")
                            }
                        }
                }}
            },
        now1(e){
           if(e.target.nodeName=="A"){
               this.idx=e.target.dataset.i;
               $(e.target).css("color","white")
               $(e.target).parent().siblings().children(["a"]).css("color","#666666");
           }
           
        },
        change1(e){
            if(e.target.nodeName=="LI"){
                var i=e.target.dataset.i;
                for(var num=0;num<this.newsList;num++){
                    if(num==i){
                         $(e.target).children().first().css("borderRadius","50%");
                        $("a").css("color","#ff5b0c");
                        $(".zhezao").css("zIndex","10");
                    }
                }
              }
            }
    },
    back1(e){
        console.log(1)
    },
    
}
</script>
<style scoped>
.newsTitle{
  height:87px;
  margin:40px 0;
  background:url(../../public/img/newsBg.png) no-repeat center center;
}
.newsTitle p{
  color: #ff5b0c;
  font-size: 36px;
  line-height: 2.3em;
}
.navNews{
  z-index:1;
}
@media screen and (max-width:570px){
    .navbar{
        background:#ddd;
    }
}
 .navbar-toggler-icon {
     display: inline-block;
    width: 50px;
    height: 50px;
    vertical-align: middle;
    content: "";
    background-size: 100% 100%;
    background: url(../../public/img/all02.png) no-repeat center center
 }
 button:focus{
     outline: 0;
 }
.li_active{
    background:#ff5b0c;
    border-radius: 5px;
    transition: 1s linear;
}
.a_active{
    color:white;
    transition: 1s linear;
}
 @media screen and (max-width:767px){
    .newsItem{
       width: 50% !important;
    }
}
@media screen and (max-width: 570px){
.newsItem{
       width: 100% !important;
    }

}
 .newsItem{
     position: relative;
     transition: 1s linear;
 }
.zhezao{
    position: absolute;
    left: 50%;top:50%;
    z-index: -1;
    display: block;
    display: flex;
    font-size:20px !important;
    margin-top:-30%;
    margin-left:-25%;
    width: 50%;height: 50%;
    /* line-height: 154px; */
    background: #ff5d0c85;
    color:white;
    font-weight: bold;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    transition: 1s linear;
}

</style>