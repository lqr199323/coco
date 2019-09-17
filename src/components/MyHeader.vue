<template>
  <div class="header">
    <div class="contanier">
      <div class="row mx-0 d-flex justify-content-between nav">
        <div class="col-6 px-0 ">
          <router-link to="/index"><img class="mw-100" src="../../public/img/logo.png" alt=""></router-link>
        </div>
        <div class="col-6 px-0">
          <ul class="menusIcon d-flex w-100 justify-content-end p-0">
            <li class="contact"><a href="#contact" data-toggle="collapse" class="d-block"></a></li>
            <li class="earth"><a href="#earth" data-toggle="collapse" class="d-block"></a></li>
            <li class="menus"><a href="#menus" data-toggle="collapse" class="d-block"></a></li>
          </ul>
        </div>
      </div>
      <div class="row mx-0" id="parent">
        <div class="col-md-6 offset-md-6  col-xs-12 px-0 nav_body">
          <div id="contact" data-parent="#parent" class="collapse" >
            <ul class="list-unstyled d-flex justify-content-end mb-0 row mx-0 pr-5  ul_list" >
              <li class="nav_item px-0">
                <router-link to="/notF" class="px-xm-3 w-100 py-2 nav_link d-block ml-2"  >客服信箱</router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-6 offset-md-6  col-xs-12 px-0 py-0  nav_body">
          <div id="earth" data-parent="#parent" class="collapse">
            <ul class="list-unstyled d-flex justify-content-end mb-0 row mx-0 pr-5  text-center">
              <li class="nav_item col-2 px-0" v-for="(link,i) of this.links" :key="i">
                <router-link to="/notF" class=" w-100 nav_link d-block py-2 px-xm-3" >{{link}}</router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-12 px-0 py-md-0 py-xs-0 nav_body " >
          <div id="menus" data-parent="#parent" class="collapse">
            <ul class="list-unstyled d-flex justify-content-end mb-0 row mx-0 align-items-center">
              <li class="nav_item col-md-2 col-xs-12 px-0 "  v-for="(item,i) of lists" :key="i">
                <div class="dropdown row  mx-0">
                <a id="dLabel"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="d-flex  justify-content-md-center justify-content-xs-between col-12 px-0  ml-md-0 ml-xs-4">
                    <span class="p-2">{{item.menu}}</span>
                    <span class="px-md-0 py-lg-2 py-xs-2 py-2">∨</span>
                  </a>
                  <ul class="dropdown-menu text-center col-12 px-0" aria-labelledby="dLabel" >
                    <li  class="w-100 px-0" v-for="(li,index) of item.list" :key="index"><a href="#" class="w-100 d-block   py-2">{{li}}</a></li>
                  </ul>
                </div>
              </li>
              <li class="my_input col-md-2 col-xs-12 px-0  align-items-center justify-content-between row mx-0 mr-lg-5 mr-md-1 mr-xs-0"><input type="text" placeholder="关键字搜索" class="col-10 px-0 pl-2 py-xm-2 py-md-0 border-0"><img src="../../public/img/search.png" alt="" class="pr-lg-2 pr-md-0 pr-sm-5"> </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
   return {
     links:["繁中","简中","English"],
     lists:[
       {menu:"关于CoC0",list:["CoCo都可","历史沿革","三大坚持"]},
       {menu:"关CoCo饮品",list:["CoCo饮品","CoCo饮品推荐"]},
       {menu:"伙伴招募",list:["认识CoCo","学习成长","幸福福利"]},
       {menu:"合作经营",list:["CoCo优势","申请办法","伙伴分享","申请问答","线上申请"]}
     ]
  }}}

</script>

<style scoped>
.header{
    align-items: center;
    position:fixed;
    z-index: 100;
    width: 100%;
    top:0px;
    background: white
  } 
 
  @media screen and (min-width:992px) {
    .my_input{border:1px solid #ff8a06}
  }
  @media screen and (min-width:768px) and (max-width:991px){
    #dLabel{border-bottom: none;}
    .my_input{border:1px solid #ff8a06}
    
  }
 @media screen and (max-width:767px){
    #dLabel{border-bottom:1px solid #eee;}
     ipnut{width:100%;font-size:0.3rem}
     .my_input{border-bottom: 1px solid #eee}
     
 }

  *a{color:#666666}
  .nav{
    height: 45px;border-bottom:2px solid #ff8a06;
  }
  .contact>a,.earth>a,.menus>a {
    height: 42px;width: 50px;
    background:url(../../public/img/con_nom.png) no-repeat right;
  }
  .earth>a {
    background:url(../../public/img/earth.png) no-repeat center;
  }
  .earth>a:hover{
    background:url(../../public/img/earth_hov.png) no-repeat center;
  }
  .contact>a:hover{
    background:url(../../public/img/con_hov.png) no-repeat right
  }
  .menus>a{
    background:url(../../public/img/meus.png) no-repeat right;
  }
  .menus>a:hover{
    background:url(../../public/img/meus_hov.png) no-repeat right;
  }
  .nav_body{padding-left:100px;}
  .nav_item{ border-left: 1px solid #ddd}
  .nav_link{color:#ff8a06;}
.nav_link:hover{text-decoration: none; background: #ff8a06;color:white}  
.dropdown-menu>li+li{border-top:1px solid #ddd !important;} 
a[data-toggle=dropdown]:hover,.dropdown-menu>li>a:hover{color:#ff8a06 !important}
.dropdown-menu>li>a:hover{background:rgba(221,221,221,0.3)}

</style>
