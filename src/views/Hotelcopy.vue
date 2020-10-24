<template>
  <div id="hotel">
    <el-container>
      <el-header>
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
        >
          <el-menu-item>
            <img id="logo" src="../assets/img/logo-o.249d74db.png" alt="" />
            <div class="header">
              <div>
                <el-button-group>
                  <el-button @click="bind()"
                    >北京
                    <i class="el-icon-arrow-down" v-if="active"></i>
                    <i class="el-icon-arrow-up" v-else></i>
                  </el-button>
                </el-button-group>
                <div class="baind" v-if="show">
                  <el-input
                    placeholder="请输入内容"
                    v-model="rooms"
                    class="input_inner"
                  >
                    <i slot="prefix" class="el-input__icon el-icon-search"></i>
                  </el-input>
                  <div>
                    <el-tabs
                      v-model="activeName2"
                      type="card"
                      @tab-click="handleClick"
                    >
                      <el-tab-pane label="用户管理" name="first">
                        <ul class="nav_item itemsall">
                          <!-- <li v-for="(v, i) of 3" :key="i">途家热门公寓</li> -->
                          <el-tabs
                            v-model="activeName"
                            @tab-click="handleClick"
                          >
                            <el-tab-pane
                              label="用户管理"
                              name="first"
                              :class="color"
                            >
                              <div class="list">
                                <ul
                                  class="list_item"
                                  v-for="(v, i) of 6"
                                  :key="i"
                                >
                                  <li v-for="(v, i) of 3" :key="i">
                                    <router-link to="/">洛阳日租房</router-link>
                                  </li>
                                </ul>
                              </div>
                            </el-tab-pane>
                            <el-tab-pane
                              label="配置管理"
                              name="second"
                              :class="color"
                            >
                              <div class="list">
                                <ul
                                  class="list_item"
                                  v-for="(v, i) of 6"
                                  :key="i"
                                >
                                  <li v-for="(v, i) of 3" :key="i">
                                    <router-link to="/">石晓楠</router-link>
                                  </li>
                                </ul>
                              </div>
                            </el-tab-pane>
                            <el-tab-pane
                              label="角色管理"
                              name="third"
                              :class="color"
                            >
                              <div class="list">
                                <ul
                                  class="list_item"
                                  v-for="(v, i) of 6"
                                  :key="i"
                                >
                                  <li v-for="(v, i) of 3" :key="i">
                                    <router-link to="/">杜泽洋</router-link>
                                  </li>
                                </ul>
                              </div>
                            </el-tab-pane>
                            <el-tab-pane
                              label="定时任务补偿"
                              name="fourth"
                              :class="color"
                            >
                              <div class="list">
                                <ul
                                  class="list_item"
                                  v-for="(v, i) of 6"
                                  :key="i"
                                >
                                  <li v-for="(v, i) of 3" :key="i">
                                    <router-link to="/">徐少轩</router-link>
                                  </li>
                                </ul>
                              </div>
                            </el-tab-pane>
                          </el-tabs>
                        </ul>
                      </el-tab-pane>
                      <el-tab-pane label="配置管理" name="second"
                        >配置管理</el-tab-pane
                      >
                    </el-tabs>
                  </div>
                </div>
              </div>
              <span>|</span>
              <div>
                <el-button @click="show3 = !show3">
                  <el-input
                    id="showinput"
                    v-model="input"
                    @click="show3 = !show3"
                    dobounce
                    placeholder="关键字/位置/房屋"
                  >
                    <i slot="prefix" class="el-input__icon el-icon-search"></i>
                  </el-input>
                </el-button>
                <div style="margin-top: 20px; height: 200px;" v-if="show3">
                  <el-collapse-transition>
                    <div>
                      <div class="transition-box">el-collapse-transition</div>
                    </div>
                  </el-collapse-transition>
                </div>
              </div>
              <span>|</span>
              <div class="block">
                <el-date-picker
                  v-model="value3"
                  type="datetimerange"
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                >
                </el-date-picker>
              </div>
            </div>
          </el-menu-item>
          <div class="hotel_item">
            <el-menu-item index="2" class="item">
              <div class="horie">
                <img
                  src="../assets/img/01c7fa5de71119a801209568398d87.jpg"
                  alt=""
                />
              </div>
            </el-menu-item>
            <el-menu-item class="item">
              <!-- <a href="https://www.ele.me" target="_blank">订单管理</a> -->
              <el-dropdown trigger="click">
                <span class="el-dropdown-link">
                  下拉菜单
                </span>
                <el-dropdown-menu slot="dropdown" class="doenoad">
                  <el-dropdown-item>黄金糕</el-dropdown-item>
                  <el-dropdown-item>狮子头</el-dropdown-item>
                  <el-dropdown-item>螺蛳粉</el-dropdown-item>
                  <el-dropdown-item>双皮奶</el-dropdown-item>
                  <el-dropdown-item>蚵仔煎</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </el-menu-item>
            <el-menu-item class="item">
              <a href="https://www.ele.me" target="_blank">订单管理</a>
            </el-menu-item>
            <el-menu-item class="item">
              <!-- <a href="https://www.ele.me" target="_blank">订单管理</a> -->
              <el-dropdown trigger="hover">
                <span class="el-dropdown-link">
                  下拉菜单
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>黄金糕</el-dropdown-item>
                  <el-dropdown-item>狮子头</el-dropdown-item>
                  <el-dropdown-item>螺蛳粉</el-dropdown-item>
                  <el-dropdown-item>双皮奶</el-dropdown-item>
                  <el-dropdown-item>蚵仔煎</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </el-menu-item>
          </div>
        </el-menu>
      </el-header>
      <el-main>
        <el-row :gutter="20">
          <el-col :span="5">
            <div class="grid-content bg-purple">
              <el-form ref="form" :model="munnum" label-width="80px">
                <el-form-item label="人数" id="form">
                  <el-select v-model="region" placeholder="请选择">
                    <el-option
                      v-for="(v, i) of 5"
                      :key="i"
                      :label="i + 1"
                      :value="v"
                      >{{ i + 1 }}人</el-option
                    >
                  </el-select>
                </el-form-item>
              </el-form>
            </div>
          </el-col>
          <el-col :span="5">
            <div class="grid-content bg-purple">
              <el-form ref="form" :model="badnum" label-width="80px">
                <el-form-item label="床数" id="form">
                  <el-select v-model="badregion" placeholder="请选择">
                    <el-option
                      v-for="(v, i) of 5"
                      :key="i"
                      :label="i + 1"
                      :value="v"
                      >{{ i + 1 }}床</el-option
                    >
                  </el-select>
                </el-form-item>
              </el-form>
            </div></el-col
          >
          <el-col :span="14">
            <div class="grid-content bg-purple flex">
              <div class="label"><span>位置</span></div>
              <div class="flex selectsed">
                <el-dropdown v-for="(v, i) of 6" :key="i">
                  <span class="el-dropdown-link">
                    热门推荐<i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown" class="dropdown">
                    <el-dropdown-item>黄金糕</el-dropdown-item>
                    <el-dropdown-item>狮子头</el-dropdown-item>
                    <el-dropdown-item>螺蛳粉</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="10">
            <div class="grid-content bg-purple">
              <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="户型">
                  <el-radio-group v-model="form.resource">
                    <el-radio label="一居"></el-radio>
                    <el-radio label="二居"></el-radio>
                    <el-radio label="三居"></el-radio>
                    <el-radio label="四居及以上"></el-radio>
                  </el-radio-group>
                </el-form-item>
              </el-form>
            </div>
          </el-col>
          <el-col :span="14">
            <div class="grid-content bg-purple flex">
              <div class="label"><span>位置</span></div>
              <div style="width:400px;padding:10px 0;">
                <el-progress :percentage="100"></el-progress>
              </div>
              <div class="label"><span>0 ~ 100000</span></div>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="5">
            <div class="grid-content bg-purple">
              <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="出租类型">
                  <el-radio-group v-model="form.ctype">
                    <el-radio label="整间"></el-radio>
                    <el-radio label="单间"></el-radio>
                  </el-radio-group>
                </el-form-item>
              </el-form>
            </div>
          </el-col>
          <el-col :span="5">
            <div class="grid-content bg-purple">
              <el-form ref="form" :model="badnum" label-width="80px">
                <el-form-item label="配套" id="form">
                  <el-select v-model="form.pritao" placeholder="请选择">
                    <el-option
                      v-for="(v, i) of 5"
                      :key="i"
                      :label="i + 1"
                      :value="v"
                      >{{ i + 1 }}套</el-option
                    >
                  </el-select>
                </el-form-item>
              </el-form>
            </div>
          </el-col>
          <el-col :span="14">
            <div class="grid-content bg-purple" style="border:0;">
              <el-row :gutter="20" style="margin-bottom:0px">
                <el-col :span="8">
                  <div class="grid-content bg-purple">
                    <el-form ref="form" :model="badnum" label-width="80px">
                      <el-form-item label="房型" id="form">
                        <el-select v-model="form.pritao" placeholder="请选择">
                          <el-option
                            v-for="(v, i) of 5"
                            :key="i"
                            :label="i + 1"
                            :value="v"
                            >{{ i + 1 }}套</el-option
                          >
                        </el-select>
                      </el-form-item>
                    </el-form>
                  </div>
                </el-col>
                <el-col :span="8">
                  <div class="grid-content bg-purple">
                    <el-form ref="form" :model="badnum" label-width="80px">
                      <el-form-item label="平台推荐" id="form">
                        <el-select v-model="form.pritao" placeholder="请选择">
                          <el-option
                            v-for="(v, i) of 5"
                            :key="i"
                            :label="i + 1"
                            :value="v"
                            >{{ i + 1 }}套</el-option
                          >
                        </el-select>
                      </el-form-item>
                    </el-form>
                  </div>
                </el-col>
                <el-col :span="8">
                  <div class="grid-content bg-purple addcls">
                    <el-dropdown trigger="click">
                      <span class="el-dropdown-link">
                        更多筛选条件 +
                      </span>
                      <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>黄金糕</el-dropdown-item>
                        <el-dropdown-item>狮子头</el-dropdown-item>
                        <el-dropdown-item>螺蛳粉</el-dropdown-item>
                        <el-dropdown-item>双皮奶</el-dropdown-item>
                        <el-dropdown-item>蚵仔煎</el-dropdown-item>
                      </el-dropdown-menu>
                    </el-dropdown>
                  </div>
                </el-col>
              </el-row>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="24">
            <div class="grid-content bg-purple flex">
              <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="猜你喜欢">
                  <el-radio-group v-model="form.button">
                    <el-button>
                      <el-dropdown trigger="click">
                        <span class="el-dropdown-link">
                          优惠<i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                          <el-dropdown-item>黄金糕</el-dropdown-item>
                          <el-dropdown-item>狮子头</el-dropdown-item>
                          <el-dropdown-item>螺蛳粉</el-dropdown-item>
                          <el-dropdown-item>双皮奶</el-dropdown-item>
                          <el-dropdown-item>蚵仔煎</el-dropdown-item>
                        </el-dropdown-menu>
                      </el-dropdown>
                    </el-button>
                    <el-button>公寓</el-button>
                    <el-button>别墅</el-button>
                    <el-button>复式</el-button>
                    <el-button>四合院</el-button>
                    <el-button>可做饭</el-button>
                  </el-radio-group>
                </el-form-item>
              </el-form>
            </div>
          </el-col>
        </el-row>
        <div class="mainitem">
          <div></div>
          <div>
            <div class="breadrumb">
              <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }"
                  >途家网</el-breadcrumb-item
                >
                <el-breadcrumb-item>成都公寓住宿1000</el-breadcrumb-item>
                <el-breadcrumb-item>+套房屋符合条件</el-breadcrumb-item>
              </el-breadcrumb>
            </div>
            <div class="breadrumb">
              <a href=""><span>推荐排序</span></a>
              <a href=""
                ><span style="position:relative"
                  >价格
                  <i class="san"></i>
                  <i class="san xan"></i> </span
              ></a>
              <a href=""><span>好评优先</span></a>
            </div>
          </div>
         
          <div class="swipe_list">
            <div v-for="(v, i) of 9" :key="i">
              <el-carousel indicator-position="outside" :autoplay="false">
                <el-carousel-item v-for="item in 4" :key="item">
                  <h3 class="swipe_h3_img">
                    <img
                      style="border-radius:10px"
                      src="https://pic.tujia.com/upload/qualifiedpics/day_190202/thumb/201902021539507601_700_467.jpg"
                      alt=""
                    />
                  </h3>
                </el-carousel-item>
              </el-carousel>
              <div class="swipe_text">
                <router-link to="/"
                  >解放碑洪崖洞长江索道旁双床江景投影房</router-link
                >
                <ul>
                  <li v-for="(v, i) of 5" :key="i">
                    <router-link to="/">1居2床4人</router-link>
                  </li>
                </ul>
                <ul class="swipe_card">
                  <li v-for="(v, i) of 5" :key="i">
                    <router-link to="/">连住优惠</router-link>
                  </li>
                </ul>
                <div class="swipe_money">
                  <p>
                    <span>￥138</span>
                  </p>
                  <p>204</p>
                  <el-button class="btn" icon="el-icon-sold-out">已减¥98</el-button>
                </div>
                <div class="swipe_portrait">
                  <img
                    src="https://pic.tujia.com/upload/landlordstorelogo/day_200416/thumb/202004160944206649_90_90.jpg"
                    alt=""
                  />
                  <span></span>
                </div>
              </div>
            </div>
          </div>
           <div class="itemfor">
            <el-pagination
              background
              layout="prev, pager, next"
              :total="1000">
            </el-pagination>
          </div>
        </div>
      </el-main>
    </el-container>
    <el-footer>
      <div class="foot_img">
        <div v-for="(v,i) of 4" :key="i" class="flex">
          <img src="../assets/img/product-mission1.e77df0a5.png" alt="">
          <div>
            <h2>先行赔付</h2>
            <p>1000玩保障金</p>
          </div>
        </div>
      </div>
      <div class="foot_item">
        <div>
          <h6>成都酒店式公寓住宿推荐:</h6>
          <p>途家网(tujia.com)，全球公寓民宿预订平台，提供成都住宿预订及价格查询，一套公寓式酒店解决全家住宿需求，公寓配有客厅、厨房，日用品齐全，可洗衣做饭带宠物，享受高性价比的居家式公寓住宿体验。现推荐58483套套交通便利的成都酒店式公寓住宿供您选择，真实用户点评，7x24小时专业客服(400-188-1234)，来途家享受公寓民宿之美，更有家的味道！</p>
          <div class="item" v-for="(v,i) of 3" :key="i">
            <dl>
              <dt>更多成都住宿推荐：</dt>
              <dd>
                <ul>
                  <li v-for="(v,i) of 20" :key="i">成都酒店式公寓住宿</li>
                  <!-- <li>酒店</li> -->
                </ul>
                <a href="javascript:;" @click="toggle()">
                  <i v-if="footactive" class="el-icon-arrow-down"></i>
                  <i v-else class="el-icon-arrow-up"></i>
                </a>
              </dd>
            </dl>
          </div>
        </div>
      </div>
      <div class="foot_botm">
      <div class="one_line">
        <ul>
          <li>
            <router-link to="/">隐私协议</router-link>
          </li>
          <li>|</li>
          <li>
            <router-link to="/">用户协议</router-link>
          </li>
          <li>|</li>
          <li>
            <router-link to="/">关于我们</router-link>
          </li>
          <li>|</li>
          <li>
            <router-link to="/">我是房客</router-link>
          </li>
          <li>|</li>
          <li>
            <router-link to="/">加入途家</router-link>
          </li>
          <li>|</li>
          <li>
            <router-link to="/">网站地图</router-link>
          </li>
        </ul>
      </div>
      <div class="two_line">
        国内客服电话：400-188-1234 国内商服电话：010-81400100
        海外及港澳台客服电话：0086-571-28089451 0086-10-80697258
      </div>
      <p class="three_line">
         2020 tujia.com途家版权所有 津ICP备17006480号
        <span>
          <img src="../assets/img/download.png" alt="" />
        </span>
        <router-link to="/"
          >京公网安备11010802031847号 营业执照 途家保障计划</router-link
        >
      </p>
      <div class="four_line">
        <router-link to="/"></router-link>
        <router-link to="/"></router-link>
        <router-link to="/"></router-link>
      </div>
    </div>
    </el-footer>
  </div>
</template>
<style>
#logo {
  width: 7rem;
  height: 2rem;
  margin: 1rem 0;
}
.el-header {
  padding: 0;
}
.el-menu.el-menu--horizontal {
  box-shadow: 0 0 2rem #eee;
}
.el-menu-demo {
  display: flex;
  justify-content: space-between;
}
.header {
  display: flex;
}
.header > div {
  margin: 0 1rem;
}
.header > div:nth-child(1) {
  position: relative;
}
.header > div:nth-child(3) .el-button {
  padding: 0;
  border-radius: 0;
  border: 0;
}
.el-popper[x-placement^="bottom"] .popper__arrow::after {
  margin-left: -10rem !important;
}

.el-button {
  border: 0;
}
.el-menu--horizontal > .el-menu-item:nth-child(1) {
  display: flex;
  justify-content: flex-start;
}

.el-menu-item:focus,
.el-menu-item:hover {
  background: #fff;
}
.el-menu--horizontal > .el-menu-item.is-active {
  border-bottom: none;
}
.transition-box {
  margin-bottom: 10px;
  width: 200px;
  height: 100px;
  border-radius: 4px;
  background-color: #409eff;
  text-align: center;
  color: #fff;
  padding: 40px 20px;
  box-sizing: border-box;
  margin-right: 20px;
  position: absolute;
}
#hotel .showinput {
  text-align: center;
  caret-color: #ff7632;
}
.horie img {
  width: 2.5rem;
  border-radius: 50%;
}
.hotel_item {
  display: flex;
}
.transition-box {
  z-index: 10;
}
.item {
  text-align: center;
}
.item a,
.item span {
  text-decoration: none;
  color: #666;
  font-weight: bold;
}
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.bg-purple {
  background: #fff;
  border: 1px solid #eee;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.03);
}
.el-form-item {
  margin-bottom: 0;
}
#form .el-input__inner {
  border: none;
}
.el-input__inner {
  text-align: center;
  border: 1px solid #fff;
}
.el-form-item {
  margin-bottom: 0.5rem !important;
  margin: 0.5rem 0;
}
.el-button-group > .el-button:first-child:last-child {
  border: none;
  color: #000;
}
.el-button:focus,
.el-button:hover {
  background-color: #fff !important;
}
.baind {
  position: absolute;
  border: 1px solid #eee;
  width: 48rem;
  height: 18rem;
  top: 3.8rem;
  background: #fff;
  box-shadow: 0 0 1rem #eee;
  z-index: 125;
  padding: 0 2rem;
}
#hotel .el-input__inner {
  text-align: left !important;
}

.el-tabs--card > .el-tabs__header .el-tabs__item.is-active {
  border-bottom-color: #000 !important;
  border-radius: 0 !important;
}
.el-tabs--card > .el-tabs__header .el-tabs__item {
  border-left: none !important;
}
.el-tabs--card > .el-tabs__header {
  border-bottom: 0 !important;
  margin: 0 !important;
}

.el-tabs__nav {
  height: 3rem;
  line-height: 3rem;
  border: none !important;
}
.nav_item {
  margin: 0 auto;
  display: flex;
}
.nav_item > li {
  margin-right: 10px;
  font-size: 12px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 6px;

  border: 0;
  letter-spacing: 0.5px;
  cursor: pointer;
}
.list {
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
}
.list > ul > li {
  padding: 0 12px;
  border: 1px solid #333;
  border-radius: 10px;
  margin: 5px 10px 5px 0;
  line-height: 2rem;
  text-align: left;
}
.list > ul > li > a {
  color: #b2b2b2;
  text-decoration: none;
}
.el-tabs__item {
  color: #333 !important;
  font-size: 15px !important;
  border-radius: 6px;
  text-align: center;
  margin-right: 10px;
  line-height: 40px !important;
}
.el-tabs--top .el-tabs__item.is-top:nth-child(2) {
  padding-left: 20px !important;
}
#tab-fourth {
  padding-right: 20px !important;
}
.el-tabs__nav-wrap::after {
  height: 0px !important;
}
.el-tabs__active-bar {
  height: 0px !important;
  color: #fff !important;
}
.el-tabs__item.is-active {
  color: #333 !important;
  font-size: 15px !important;
  background: hsla(0, 0%, 100%, 0.15);
}
.el-tabs__header {
  margin: 0 !important;
}
.itemsall .el-tabs__item {
  border: 1px solid #333;
  padding: auto 0px;
}
#hotel .doenoad {
  left: 895px;
}
.flex {
  display: flex;
  flex-flow: row nowrap;
  padding: 0.65rem 0;
}
.flex > div.label {
  padding: 0.55rem 1rem;
}
.flex .el-dropdown {
  margin-right: 1.5rem;
}
/* .selectsed .dropdown{
  
} */
.addcls {
  padding: 11px 0;
  padding-left: 30px;
  line-height: 30px;
}

/* //////////////////////////////// */

.mainitem {
  width: 100%;
  /* margin-top: 10px; */
  border: 1px solid #eee;
}
.mainitem > div:nth-child(1) {
  height: 40px;
}
.mainitem > div:nth-child(2) {
  border-top: 1px solid #666;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
}
.breadrumb {
  padding: 20px 10px;
}
.breadrumb > a {
  text-decoration: none;
  color: #999;
}
.breadrumb > a > span {
  margin: 0 10px;
}
.san {
  border: 5px solid red;
  border-color: #999 transparent transparent transparent;
  width: 0;
  height: 0;
  position: absolute;
  top: 3px;
  right: -8px;
}
.xan {
  position: absolute;
  bottom: 1px;
  margin-top: 5px;
  border-color: transparent transparent #999 transparent;
}
/* .itemfor{
  border: 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
}
.itemfor>div{
  flex: 0 0 33.3%;
}
.itemfor .item{
  width: 100%;
  height: 330px;
  border: 1px solid #333;
}
.itemfor .item{
  font:bold 13px 'Microsoft Yahei';
}
/* .itemfor .text{
  margin-top: 10px;
} */
/* .itemfor .text a{
  text-decoration: none;
  color: #000;
  font-weight: bolder;
  font-size: 18px;
  line-height: 30px;
}
.itemfor .text p{

}  */
.swipe_list {
  width: 100%;
  margin: 0 auto;
  margin-top: 0px;
  /* background-color: #666; */
  display: flex;
  flex-wrap: wrap;
}
.swipe_list > div {
  flex: 0 0 33.2%;
  box-sizing: border-box;
  padding: 0 10px;
}
.swipe_text {
  width: 100%;
  text-overflow: ellipsis;
  /* height: 200px; */
  /* background-color: #ff7632; */
  box-sizing: border-box;
  padding: 0 5px;
  position: relative;
  margin-bottom: 20px;
  margin-top: 20px;
}
.swipe_text > a:first-child {
  font-size: 18px;
  line-height: 22px;
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-decoration: none;
  color: #000;
}
.swipe_text > ul {
  width: 100%;
  font-size: 14px;
  align-items: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin: 10px 0;
}
.swipe_text > ul > li {
  display: inline;
}
.swipe_text > ul > li::after {
  content: "·";
  display: inline-block;
  margin-left: 5px;
  margin-right: 5px;
}
.swipe_text > ul > li:last-child::after {
  content: "";
}
.swipe_text > ul > li > a {
  text-decoration: none;
  color: #666;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.swipe_text > .swipe_card {
  width: 100%;
  font-size: 14px;
  align-items: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin: 10px 0;
}
.swipe_text > .swipe_card > li::after {
  content: "";
  display: inline-block;
  margin: 0;
}
.swipe_text > .swipe_card > li {
  text-align: center;
  padding: 2px 5px;
  background-color: #d3dce6;
  margin-right: 3px;
}
.swipe_text > .swipe_card > li > a {
  font-size: 12px;
  text-align: center;
  line-height: 16px;
}
.swipe_text > .swipe_money {
  display: flex;
  align-items: flex-end;
}
.swipe_text > .swipe_money > p {
  font-weight: 700;
  font-size: 14px;
  color: #fd8238;
  white-space: nowrap;
  margin: 0 10px 0 0;
}
.swipe_text > .swipe_money > p > span {
  line-height: 35px;
  font-size: 26px;
}
.swipe_text > .swipe_money > p:nth-child(2) {
  margin: 0 10px 2px 0;
  line-height: 21px;
  font-size: 16px;
  color: #999;
  text-decoration: line-through;
}
.swipe_text > .swipe_portrait {
  width: 64px;
  height: 64px;
  position: absolute;
  right: -5px;
  bottom: 0;
  z-index: 1;
  background-color: #5d7588;
  border-radius: 50%;
}
.swipe_text > .swipe_portrait > img {
  width: 100%;
  border-radius: 50%;
}
.swipe_text > .swipe_portrait > span {
  position: absolute;
  z-index: 10;
  right: -5px;
  bottom: 0;
  border-radius: 50%;
  background-image: url("../assets/img/component.png");
  background-position: 0 0;
  width: 24px;
  height: 24px;
}
.swipe_money .btn{
  background: #fe5e5e !important;
  color: #fff !important;
  padding: 5px 10px;
  outline: 0;
  border: 0;
  border-radius: 20px;
}
.swipe_money .btn:hover{
  background: #fe5e5e !important;
}


.el-carousel__container {
  width: 100%;
  border-radius: 10px;
}
.el-carousel__container > .el-carousel__item {
  width: 100%;
  border-radius: 10px;
}
arousel--horizontal {
  border-radius: 10px;
}
.el-carousel__button {
  border-radius: 50%;
  width: 10px !important;
  height: 10px !important;
}
.el-carousel__indicators--outside {
  margin-top: -30px !important;
}
.el-carousel--horizontal {
  border-radius: 10px;
}
.el-carousel__indicators--outside {
  position: absolute !important;
}
.swipe_h3_img {
  opacity: 1 !important;
}


.itemfor{
  /* margin:0 auto; */
  text-align: center;
  padding: 20px 0;
}

.el-pagination.is-background .el-pager li:not(.disabled).active{
  background-color:#ff9645 !important;
}
.el-pagination.is-background .el-pager li{
  background-color: #fff !important;
   color: #666 !important;
}
.el-pagination.is-background .el-pager li:hover{
  background: #aaa !important;  
  color: #fff !important;
}

/* //////////////////////////////// */
/* footer */
/* .footer{
  
} */
.foot_botm {
  width: 100%;
  background: #fff;
  color: #666;
  padding: 60px 0;
  font-size: 12px;
}
.foot_botm > .one_line {
  width: 500px;
  margin: 0 auto;
}
.foot_botm > .one_line > ul {
  display: flex;
  justify-content: space-around;
}
.foot_botm > .one_line > ul > li > a {
  text-decoration: none;
  color: #666;
}
.foot_botm > .two_line {
  text-align: center;
  margin-top: 15px;
}
.foot_botm > .three_line {
  text-align: center;
  margin-top: 15px;
}
.foot_botm > .three_line > a {
  color: #666;
  text-decoration: none;
}
.foot_botm > .three_line > span > img {
  width: 16px;
  height: 16px;
  position: relative;
  left: -1px;
  top: 3px;
}
.foot_botm > .four_line {
  margin: 0 auto;
  display: flex;
  width: 430px;
  margin-top: 15px;
}
.foot_botm > .four_line > a {
  display: inline-block;
  width: 140px;
  height: 42px;
  text-align: center;
  background-image: url("../assets/img/download22.png");
  margin-right: 10px;
}
.foot_botm > .four_line > a:first-child {
  background-position: 0 0;
}
.foot_botm > .four_line > a:nth-child(2) {
  background-position: 0 -46px;
}
.foot_botm > .four_line > a:nth-child(3) {
  background-position: 0 -92px;
  width: 110px;
  height: 42px;
}
.foot_img{
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  padding: 40px 0;
  background: #f5f5f5;
  /* text-align: center; */
}

.foot_img>div>div{
  margin-left: 10px;
}
.foot_img>div h2{
  font: bold 20px 'microsoft Yahei';
  color: #333;
  /* flex: 0 0 25%; */
}
.foot_img>div p{
  font: bold 15px 'microsoft Yahei';
  color: #999;
  line-height: 30px;
}
.foot_item{
  width: 100%;
}
.foot_item>div{
  width: 75%;
  padding: 40px 0;
  margin: 0 auto;
  font-size: 12px;
  color: #999;
  line-height: 20px;
}
.foot_item>div h6{
  font-weight: bold;
}
.foot_item .item{
  margin-top: 10px;
  width: 100%;
  height: 30px;
  overflow: hidden;
}
.foot_item .item dl{
  display: flex;
  justify-content: space-between;
  line-height: 30px;
}
.foot_item .item dt{
  text-overflow: ellipsis;
  width: 10%;
  overflow: hidden;
  white-space: nowrap;
}
.foot_item .item dd{
  flex: 0 0 85%;
  display: flex;
  justify-content: space-between;
}
.foot_item .item dd li{
  float: left;
  margin-right: 30px;
  text-overflow: ellipsis;
  width: 10%;
  overflow: hidden;
  white-space: nowrap;
  width: 96px;
}
.foot_item .item dd a{
  line-height: 15px;
  display: inline-block;
  height: 15px;
  width: 15px;
  padding: 5px;
  border: 1px solid #000;
}
</style>
<script>
export default {
  data() {
    return {
      show: false,
      active: false,
      region: "",
      badregion: "",
      input: "",
      input2: "",
      rooms: "",
      activeIndex: "1",
      show2: false,
      show3: false,
      activeName: "first",
      munnum: {
        // region:''
      },
      form: {
        resource: "",
        ctype: "",
        pritao: "",
        button: "",
      },
      footactive:true,
      activeName2: "first",
      badnum: {},
      pickerOptions2: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            },
          },
        ],
      },
      value3: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
      value4: "",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    bind() {
      this.active = !this.active;
      this.show = !this.show;
    },
    toggle(){
       this.footactive = !this.footactive;
    }
  },
};
</script>
