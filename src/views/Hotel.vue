<template>
  <div>
    <div class="hotel_head">
      <div>
        <img src="../assets/img/logo-o.249d74db.png" alt="">
        <div class="hotel_header">
          <span>
            北京
            <img src="" alt="">
          </span>
          <span>
            <input type="text" placeholder="关键字/位置/房屋">
          </span>
          <span>2020-10-15 至 2020-10-16</span>
        </div>
      </div>
      <div class="head_right">
        <img src="../assets/img/01c7fa5de71119a801209568398d87.jpg" alt="">
        <div v-for="(v,i) of 3" :key="i">
          通知
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.hotel_head{
  /* width: 100%; */
  padding: .8rem 5rem;
  margin: 0 auto;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eee;
  box-shadow: 0 0 1rem rgba(0, 0, 0, .2);
}
.hotel_head img{
  width: 7.2rem;
}
.hotel_head>div,.hotel_header{
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
}
.hotel_header{
  margin-left: 1.5rem;
  padding: .5rem;
  box-sizing: border-box;
  border: 1px solid #eee;
  background: #eee;
  border-radius: 15px;
  /* font-size: 15px; */
  font: 14px 'Microsoft Yahei';
}
.hotel_header span{
  padding: 0 3rem;
}
.hotel_header>span:nth-child(2){
  display: inline-block;
  border-left:1px solid #999;
  border-right:1px solid #999;
  margin: 0 1rem;
}
.hotel_header input{
  outline: 0;
  border: 0;
  padding: .3rem 1rem;
  font-size: 14px;
  text-align: center;
  box-sizing: border-box;
  background: #eee;
}
.head_right{
  display: flex;
  justify-content: flex-end;
}
.head_right img{
  width: 2rem;
  border-radius: 50%;
}
.head_right div{
  margin-left: 3rem;
}
</style>