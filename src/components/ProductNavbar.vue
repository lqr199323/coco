<template>
    <div class="product_navbar " >
        <div class="row mx-0 d-flex justify-content-center">
            <ul style="background: #ff8a06;" class="list-unstyled nav col-md-3 col-xs-12 px-0  text-md-center text-xs-left  align-items-center nav_title" v-for="(item,i) of lists" :key="i">
                <li class="w-100" >
                    <div class="dropdown row mx-0">
                        <a class="d-block p-2 col-12 px-0" id="dLabel" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img :src="item.img" class="pr-3">
                            <span  style="color:white;font-weight:bolder;" v-text="item.title"></span>
                        </a>
                        <ul class="dropdown-menu text-md-center text-xs-left col-12 px-0" aria-labelledby="dLabel">
                            <li class="nav_item w-100 " v-for="(li,index) of item.li" :key="index">
                                <router-link class="d-block w-100 p-2" to="路由path路径" v-text="li"></router-link>
                            </li>
                        </ul>
                    </div>
                </li> 
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
          lists:[
                {li:["线上申请","了解更多"],title:"合作伙伴",img:require("../../public/img/11.png"),},
                {li:["CoCo饮品"],title:"CoCo饮品",img:require("../../public/img/21.png"),},
                {li:["智联招聘","前程无忧"],title:"伙伴招募",img:require("../../public/img/31.png"),href:"#friend"},
            ]
        }
    },
    methods:{
    }
}
</script>
<style scoped>
    .product_navbar{
        background: #ff8a06;
    }
  @media screen and (min-width:992px) {
   .nav_title+.nav_title{
        border-left:1px solid white;
    }
  }
  @media screen and (min-width:768px) and (max-width:991px){
   .nav_title+.nav_title{
        border-left:1px solid white;
    }
    
  }
 @media screen and (max-width:767px){
   .nav_title+.nav_title{
        border-top:1px solid white;
    }
 }
 .dropdown-menu>li>a{color:#666666}
 .dropdown-menu>li>a:hover{color:#ff8a06 !important}
 .dropdown-menu>li>a:hover .nav_item{background:red !important}
.dropdown-menu>.nav_item+.nav_item{border-top:1px solid rgba(0, 0, 0, 0.15)}
</style>