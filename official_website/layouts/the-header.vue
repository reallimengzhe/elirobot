<template>
  <header class="the-header">
    <nuxt-link to="/" class="the-header-logo">
      <img src="@/static/img/logo.png" alt="logo" width="100%" />
    </nuxt-link>
    <nav class="the-header-nav">
      <div v-for="route in routes" :key="route.id" class="the-header-nav-item">
        <a
          v-if="route.id === 7"
          :href="route.url"
          :target="route.id === 7 ? '_blank' : ''"
        >
          {{ route.title }}
        </a>
        <nuxt-link
          exact
          v-else
          active-class="is-active"
          :to="route.url"
          @mouseover="mouseover(route.id)"
        >
          {{ route.title }}
        </nuxt-link>
      </div>
      <!--              <transition enterActiveClass="animated fadeIn" leaveActiveClass="animated fadeOut" mode="out-in"> -->
      <!-- <div
        class="pro-nav"
        v-if="route.id == 3"
        v-show="showPro"
        @mouseout="mouseout(route.id)"
      >
        <ul class="con">
          <li v-for="(item, index) in proList" :key="index">
            <nuxt-link :to="{ path: `/pro/${item.id}` }">
              <div>
                <img :src="imgSrc + item.proImage" alt="" width="100%" />
              </div>
              <p>{{ item.proName }}<i v-if="item.sortId == 100"></i></p
            ></nuxt-link>
          </li>
        </ul>
      </div> -->
      <!--      </transition> -->
    </nav>
    <div class="the-header-search">
      <img src="@/assets/icon/icon-search.png" />
      <input placeholder="查找经销商" v-model="searchText" />
    </div>
    <!-- <el-dropdown> -->
    <!-- <div class="lang_con"></div> -->
    <div class="the-header-i18n">
      <img src="@/assets/icon/lang.png" />
      <!-- <span></span>
        <span></span> -->
      <nuxt-link :to="switchLocalePath('zh')" :disabled="$i18n.locale === 'zh'"
        >中文
      </nuxt-link>
      <span>|</span>
      <nuxt-link :to="switchLocalePath('en')" :disabled="$i18n.locale === 'en'"
        >English
      </nuxt-link>
    </div>
    <!-- <el-dropdown-menu slot="dropdown"> -->
    <!-- <el-dropdown-item
          :command="item.id"
          v-for="item in otherLang"
          :key="item.id"
          ><a :href="item.url">{{ item.title }}</a>
        </el-dropdown-item>
      </el-dropdown-menu> -->
    <!-- </el-dropdown> -->

    <!--      <a href="javascript:;" @click="consultClick"><img style="margin-left: 10px;vertical-align:middle;" src="../../assets/icon-contact-new.png" height="28" width="28" title="联系我们" alt=""></a>-->
    <transition
      enterActiveClass="animated fadeIn"
      leaveActiveClass="animated fadeOut"
      mode="out-in"
    >
      <ul class="m-nav" v-show="menuShow">
        <li class="m-nav-item" v-for="route in routes" :key="route.id">
          <div>
            <nuxt-link
              :to="route.url"
              :class="{ current: route.id == active }"
              exact
              v-if="lang == 'zh'"
              >{{ route.title }}
            </nuxt-link>
            <nuxt-link
              :to="route.url"
              :class="{ current: route.id == active }"
              exact
              v-else
              >{{ route.en }}</nuxt-link
            >
          </div>
        </li>
        <li class="m-nav-item">
          <div>
            <a href="javascript:;" class="btn-consult" @click="consultClick"
              >我要咨询</a
            >
          </div>
        </li>
        <li class="m-nav-item">
          <div class="the-header-search" id="search-box">
            <input
              type="text"
              class="input-search"
              v-model="searchText"
              name="keyword"
              @keyup.enter="searchClick()"
            />
            <img
              src="@/assets/icon/icon-search.png"
              alt=""
              class="icon-search"
              @click="searchClick()"
            />
          </div>
        </li>
      </ul>
    </transition>
    <transition
      enterActiveClass="animated fadeIn"
      leaveActiveClass="animated fadeOut"
      mode="out-in"
    >
      <el-dialog
        title="留言咨询"
        :visible.sync="showConsult"
        @close="closeClick"
        :append-to-body="true"
      >
        <p class="desc">欢迎留下咨询内容，我们将尽快给您回复</p>
        <msg :isConsult.sync="showConsult" :title.sync="courseName"></msg>
      </el-dialog>
    </transition>
  </header>
</template>
<script>
// import { eventBus } from "../../main"
// import MHeader from "../components/MHeader.vue";
import Msg from '../components/Consult.vue'
import {
  getSecCatalogs,
  choiceLanguage,
  getProducts,
  imgSrc,
  imgSrc2,
} from '../service/api'

export default {
  name: 'the-header',
  components: {
    // MHeader,
    Msg,
    // MHeader, Velocity, JLogin, JReg
  },
  // props: {
  //   active:{
  //     default: 0
  //   },
  //   isAsk:{
  //     default: false
  //   }
  // },
  props: ['active', 'isAsk'],
  data() {
    return {
      imgSrc,
      imgSrc2,
      current: 1,
      border: 'none',
      searchBox: false,
      showNews: false,
      showConsult: false,
      user: '',
      routes: [
        // { title: '首页', en: 'Homepage', url: '/', id: 1 },
        {
          title: '应用案例',
          en: 'Application Case Study',
          url: '/case',
          id: 2,
        },
        { title: '产品中心', en: 'Product Center', url: '/pro', id: 3 },
        { title: '下载中心', en: 'Download Center', url: '/download', id: 4 },
        { title: '公司动态', en: 'Company News', url: '/news', id: 5 },
        // { title: '艾.培训', en: 'ELITE Training', url: '/train', id: 6 },
        { title: 'ELITE学院', en: 'ELITE Training', url: '/train', id: 6 },
        {
          title: '技术论坛',
          en: 'ELITE Forum',
          url: 'https://bbs.elibot.cn/',
          id: 7,
        },
        { title: '关于我们', en: 'About Us', url: '/about', id: 8 },
      ],
      otherLang: [
        { title: '日本語', url: 'https://elibot.jp/', id: 1 },
        { title: 'English', url: 'https://www.elibot.cn/en/', id: 2 },
        // { title: 'Português', url: 'https://www.equinotec.com/', id: 2 },
        { title: 'Polski', url: 'https://elitecobot.pl/', id: 3 },
      ],
      menuShow: false,
      fixed: false,
      mask: false,
      loginShow: false,
      regShow: false,
      showPro: false,
      proList: [],
      editions: [],
      proLoad: [],
      curEdition: 0,
      curLoad: 0,
      searchText: '',
      lang: 'zh',
      courseName: '',
    }
  },
  computed: {
    availableLocales() {
      // return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
      return this.$i18n.locales
    },
  },
  watch: {
    isAsk(newData, oldData) {
      this.showConsult = newData
    },
  },
  methods: {
    mouseover(id) {
      if (id === 3) {
        this.showPro = true
      } else {
        this.showPro = false
      }
    },
    mouseout(id) {
      if (id === 3) {
        this.showPro = false
      }
    },
    showNewsClick() {
      this.showNews = !this.showNews
    },
    async getProEdition() {
      const { data } = await getSecCatalogs(2, 2, 1)
      if (data.code === 200) {
        console.log(data.data)
        this.editions = data.data
      }
    },
    async getPro() {
      const { data } = await getProducts()
      if (data.code === 200) {
        console.log(data.data)
        // this.proList = data.data.reverse()
      }
    },
    async getProLoad() {
      const { data } = await getSecCatalogs(2, 3, 1)
      if (data.code === 200) {
        console.log(data.data)
        this.proLoad = data.data
      }
    },
    chkLogin() {
      if (this.user) {
        this.showConsult = true
      } else {
        this.$message({
          showClose: true,
          message: '请先登录',
          center: true,
          type: 'error',
        })
      }
    },
    closeClick() {
      this.showDialog = false
      this.showConsult = false
      this.$emit('update:isAsk', false)
    },
    consultClick() {
      this.menuShow = false
      this.showConsult = true
    },
    searchClick() {
      this.menuShow = false
      // console.log(this.search)
      this.$router.push({
        path: '/search?content=' + encodeURI(this.searchText),
      })
    },
    // async changelang () {
    //   const {data} = await choiceLanguage({language: 'en'})
    //   if (data.code === 200) {
    //     console.log(data.data)
    //     // this.$i18n.locale = this.lang
    //     // sessionStorage.setItem('elite-lang',this.lang)
    //     // this.reload()
    //     this.$router.push({
    //       path: '/en'
    //     })
    //   }
    // },
    changelang() {
      localStorage.setItem('elite-lang', 'en')
      this.$router.push({
        path: '/en',
      })
    },
  },
  mounted() {},
  created() {
    // this.lang = localStorage.getItem('elite-lang')
    // this.getProEdition()
    this.getPro()
    process.client && localStorage.setItem('elite-lang', 'zh')
    if (process.client && sessionStorage.getItem('elite-user')) {
      this.user = sessionStorage.getItem('elite-user')
    }
    // eventBus.$on("courseName", message => {
    //   this.courseName = message
    //   this.showConsult = true
    // })
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll, false)
  },
}
</script>
<style lang="scss">
.the-header {
  position: sticky;
  top: 0;
  width: 100%;
  height: 60px;
  z-index: 99;
  background-color: #000816;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  padding: 0 0.625rem;
  color: white;
  font-size: var(--font-size-16px);

  // backdrop-filter: blur(18px);
  // opacity: 0.8;

  .the-header-logo {
    width: 0.552083rem;
    // height: 0.1666667rem;
  }

  .the-header-nav {
    display: flex;
    margin-left: auto;
    &-item {
      margin-left: 0.208rem;
      color: white;
      a {
        line-height: 58px;
        border-bottom: 2px solid transparent;
        transition: border 225ms;
        &:hover {
          font-weight: bold;
        }
        &.is-active {
          font-weight: bold;
          border-color: white;
        }
      }
    }
  }

  .the-header-search {
    width: 0.719rem;
    height: 0.167rem;
    padding: 0 0.083rem;
    box-sizing: border-box;

    border-radius: 0.1rem;
    border: 1px solid rgba(255, 255, 255, 0.24);
    margin-left: 0.208rem;

    display: flex;
    align-items: center;
    img {
      width: 0.083rem;
      height: 0.083rem;
    }

    input {
      // flex: 1;
      height: 100%;
      outline: none;
      margin-left: 0.052rem;
      background-color: transparent;
      border: none;
      width: calc(100% - 0.083rem - 0.052rem);
      color: white;
    }
  }

  .the-header-i18n {
    margin-left: 0.208rem;

    display: flex;
    align-items: center;

    *:not(:first-child) {
      margin-left: 0.03125rem;
    }
    *[disabled] {
      opacity: 0.5;
    }
  }
}

// .pro-nav {
//   // display:none;
//   width: 100%;
//   position: absolute;
//   left: 0;
//   top: 1rem;
//   background-color: #ffffff;
//   height: 2.2rem;

//   ul {
//     width: 10rem !important;
//     height: 100% !important;
//     display: flex;
//     justify-content: space-between;

//     li {
//       width: 20%;
//       height: 100%;

//       div {
//         width: 1.8rem;
//         height: 1.8rem;
//         display: flex;
//         align-items: center;
//       }

//       img {
//         width: 1.4rem;
//         vertical-align: middle;
//       }

//       p {
//         font-size: 0.12rem;
//         text-align: center;
//         line-height: 0.3rem;

//         i {
//           display: inline-block;
//           width: 0.06rem;
//           height: 0.06rem;
//           border-radius: 50%;
//           background-color: red;
//           vertical-align: text-top;
//           margin-left: 0.04rem;
//         }
//       }

//       &:hover {
//         box-shadow: 0 0 0.25rem 0 #e7e7e7;
//       }
//     }
//   }
// }

// .m-nav,
// .nav-btn {
//   display: none;
// }

// .nav-btn {
//   background-color: transparent;
//   border: 0.01rem solid #999;
//   border-radius: 0.08rem;
//   padding: 0 0.12rem;
//   outline: none;
//   height: 0.4rem;
//   width: auto;
//   // top: 8px;
//   // bottom: 0;
//   // right: .5rem;
//   // position: absolute;
//   span {
//     width: 0.24rem;
//     height: 0.02rem;
//     display: block;
//     margin: 0.08rem 0;
//   }

//   span:nth-child(2) {
//     margin: 0;
//   }
// }

// .mask {
//   overflow: hidden;
//   position: fixed;
//   width: 100%;
//   height: 100%;
//   left: 0;
//   top: 0;
//   z-index: 999;
//   background-color: rgba(0, 0, 0, 0.8);
// }

// .step {
//   position: absolute;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   z-index: 12;
//   margin: auto;
//   width: 35%;
//   max-width: 620px;
//   background-color: #ffffff;
//   box-shadow: 0 0 30px #010101;

//   .start {
//     font-size: 24px;
//     color: #202020;
//     letter-spacing: 2px;
//     text-align: center;
//     height: 50px;
//     background-color: #ffffff;
//     margin-bottom: 1px;
//     cursor: pointer;

//     .btnClose {
//       position: absolute;
//       right: 12px;

//       img {
//         width: 25px;
//       }
//     }
//   }

//   .step-name {
//     background-color: #2b2b2b;
//     text-align: center;
//     padding: 10px 0;

//     i {
//       display: inline-block;
//       width: 44px;
//       height: 44px;
//       border-radius: 50%;
//       background: #178ddd;
//       color: #fff;
//       font-size: 24px;
//       line-height: 44px;
//     }

//     span {
//       display: inline-block;
//       color: #1c1b1b;
//       font-size: 14px;
//       padding-left: 10px;
//       color: #e1e1e1;
//     }
//   }

//   .step-content {
//     width: 80%;
//     height: 380px;
//     margin: 10% auto;

//     .circle {
//       width: 30%;
//       margin: 20px auto;
//     }

//     p {
//       color: #e1e1e1;
//       font-size: 14px;
//     }

//     hr {
//       height: 2px;
//       border: none;
//       background-color: #484848;
//     }
//   }
// }

// .form-control {
//   height: 40px;
//   width: 100%;
//   border-radius: 0;
//   margin: 20px auto;
//   background-color: #e1e1e1;
//   color: #464646;
// }

// button.blue {
//   width: 100%;
// }

// .search {
//   display: inline-block;
//   width: 28px;
//   vertical-align: middle;
//   margin-top: -5px;
// }

// .nav-item3 i {
//   display: inline-block;
//   width: 25px;
//   height: 25px;
//   // background-image: url("../../assets/home/icon-1.png");
//   background-size: 25px 25px;
//   vertical-align: middle;
//   margin-top: -3px;
// }

// .m-nav .the-header-search {
//   display: block;
//   height: auto;
//   padding: 0.12rem 0.1rem;

//   .icon-search {
//     position: absolute;
//     right: 0.4rem;
//     top: 0.2rem;
//   }
// }

// .m-nav .the-header-search {
//   max-width: 4rem;
//   display: block;
//   height: auto;
//   border: solid 1px #d9d9d6;
//   padding: 0 0 0 10px;
//   box-sizing: border-box;
//   margin: 10px;

//   .btn-consult {
//     padding: 0;
//   }

//   input {
//     border: none;
//     padding: 0;
//     width: calc(100% - 0.6rem);
//     outline: none;
//   }

//   .icon-search {
//     position: absolute;
//     right: 10px;
//     top: 5px;
//   }
// }

// /* PC或中大型笔记本设备 desktop */
// @media all and (min-width: 1441px) {
// }

// /* 中小型笔记本或大平板 laptop */
// @media all and (min-width: 980px) and (max-width: 1440px) {
// }

// /* 中型平板或小型笔记本 tablet */
// @media all and (min-width: 768px) and (max-width: 979px) {
//   .m-nav,
//   .nav-btn {
//     display: block;

//     span {
//       background-color: #999;
//     }
//   }
//   .the-header .the-header-search,
//   .the-header .pro-nav {
//     display: none;
//   }
//   .btn-consult {
//     padding: 0;
//     width: 100px;
//     height: 32px;
//     background-color: #36bdef;
//     color: #ffffff;
//     border-radius: 16px;
//     font-size: 14px;
//     line-height: 32px;
//     display: inline-block;
//     cursor: pointer;
//     margin-right: 0.3rem;
//     text-align: center;
//   }
// }

// /* 手机或小平板 phone */
// @media screen and (max-width: 768px) {
//   .the-header {
//     .nav-top {
//       height: 0.6rem;
//     }

//     .the-header-nav {
//       height: 0.6rem;
//     }

//     .the-header-logo {
//       width: 1.2rem;
//       height: 0.365rem;
//     }
//   }
//   .m-nav,
//   .nav-btn {
//     display: block;

//     span {
//       background-color: #999;
//     }
//   }
//   .the-header .the-header-search {
//     display: none;
//   }
// }

// .m-nav {
//   width: 100%;
//   background: #ffffff;
//   position: absolute;
//   /*margin-top: 52px;*/
//   z-index: 5;

//   .m-nav-item {
//     display: block;
//     font-weight: 600;
//     margin-right: 0;
//     vertical-align: middle;
//     text-align: left;
//     border-bottom: 0.01rem solid #c0c0c0;
//     padding-left: 0.1rem;

//     a {
//       padding: 10px;
//       border-bottom: none;
//       font-size: 14px;
//     }

//     a:hover {
//       border-bottom: none;
//       color: #36bdef;
//     }

//     .active {
//       border-bottom: none;
//     }

//     .btn-consult {
//       padding: 0;
//       width: 100px;
//       height: 32px;
//       background-color: #36bdef;
//       color: #ffffff;
//       border-radius: 16px;
//       font-size: 14px;
//       line-height: 32px;
//       display: inline-block;
//       cursor: pointer;
//       text-align: center;
//       margin: 10px;

//       &:hover {
//         color: #ffffff;
//       }
//     }

//     .the-header-search {
//       display: block;
//       height: auto;
//       // padding:.12rem .2rem;
//       input {
//         width: calc(100% - 1.6rem);
//       }
//     }
//   }
// }

// @media all and (max-width: 1240px) {
//   .m-nav,
//   .nav-btn {
//     display: block;

//     span {
//       background-color: #999;
//     }
//   }
//   .the-header .the-header-search {
//     display: none;
//   }
//   .btn-consult {
//     padding: 0;
//     width: 100px;
//     height: 32px;
//     background-color: #36bdef;
//     color: #ffffff;
//     border-radius: 16px;
//     font-size: 0.14rem;
//     line-height: 32px;
//     display: inline-block;
//     cursor: pointer;
//     margin-right: 0.3rem;
//     text-align: center;
//   }
// }
//
</style>
<style type="text/scss" lang="scss" rel="stylesheet/scss" >
// .v-modal {
//   opacity: 0.85;
// }

// .el-dialog__title {
//   /*font-weight: 300;*/
// }

// .el-dialog__headerbtn {
//   width: auto;
//   height: auto;
// }

// .el-dialog__headerbtn:hover {
//   background-color: transparent;
//   border: none;
//   color: #909399;
// }

// .el-dialog__headerbtn:focus .el-dialog__close,
// .el-dialog__headerbtn:hover .el-dialog__close {
//   color: #909399;
// }

// .desc {
//   margin-bottom: 20px;
//   color: #808080;
// }

// .el-dialog__body {
//   padding-top: 0;
// }
// // .el-dropdown {
// //   margin-right: 9.375%;
// // }

// .el-dropdown span {
//   color: #000000;
//   cursor: pointer;
//   display: flex;
//   align-items: center;
//   img {
//     margin-right: 10px;
//   }
// }

// .el-dropdown span:hover {
//   color: #36bdef;
// }

// /* 手机或小平板 phone */
// @media screen and (max-width: 768px) {
//   .el-dialog {
//     width: 90%;
//   }
// }
//
</style>
