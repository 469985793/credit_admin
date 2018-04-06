<template>
  <div class="v_form_detail_container">
    <div class="name_box" v-show="isShowInfo">
      <span>罗晓彬</span>
      <span>13303623981</span>
    </div>
    <div class="form_title">表单详情</div>
    <ul>
      <li>
        <span class="title">姓名</span>
        <span>{{dataObj.userName}}</span>
      </li>
      <li>
        <span class="title">手机号</span>
        <span>{{dataObj.telNum}}</span>
      </li>
      <li>
        <span class="title">备用手机号</span>
        <span>{{dataObj.secondTelMobile}}</span>
      </li>
      <li>
        <span class="title">资金用途</span>
        <span>{{dataObj.useFunds}}</span>
      </li>
      <li>
        <span class="title">当前负债</span>
        <span>{{dataObj.currentLiabilities}}</span>
      </li>
      <li>
        <span class="title">现居住地址</span>
        <span>{{dataObj.currentAddress}}</span>
      </li>
      <li>
        <span class="title">公司名字</span>
        <span>{{dataObj.companyName}}</span>
      </li>
      <li>
        <span class="title">公司电话</span>
        <span>{{dataObj.companyMobile}}</span>
      </li>
      <li>
        <span class="title">公司地址</span>
        <span>{{dataObj.companyAdress}}</span>
      </li>
      <li>
        <span class="title">职位</span>
        <span>{{dataObj.applyPosition}}</span>
      </li>
     <li>
        <span class="title">月收入</span>
        <span>{{dataObj.monthIncome}}</span>
      </li>
      <li>
        <span class="title">QQ</span>
        <span>{{dataObj.contactQq}}</span>
      </li>
      <li>
        <span class="title">紧急联系人</span>
        <span>{{dataObj.emergencyContact}}</span>
      </li>
      <li>
        <span class="title">紧急联系人2</span>
        <span>{{dataObj.secondEmergencyContact}}</span>
      </li>
      <li>
        <span class="title">芝麻分</span>
        <span>{{dataObj.sesameCredit}}</span>
      </li>
      <li>
        <span class="title">身份证正面</span>
        <!-- <img :src="dataObj.fileCardHand" @click="doDownload('fileFront')" /> -->
        <img src="https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo_top_ca79a146.png" @click="doDownload('fileFront')" />
      </li>
      <li>
        <span class="title">身份证反面</span>
        <!-- <img :src="dataObj.fileCardHand" @click="doDownload('fileBack')" /> -->
        <img src="https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo_top_ca79a146.png" @click="doDownload('fileBack')" />
      </li>
      <li>
        <span class="title">手持身份证</span>
        <!-- <img :src="dataObj.fileCardHand" @click="doDownload('fileHand')" /> -->
        <img src="https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo_top_ca79a146.png" @click="doDownload('fileHand')" />
      </li>
      <li>
        <span class="title">创建时间</span>
        <span>{{dataObj.crtTime}}</span>
      </li>
      <li>
        <span class="title">修改时间</span>
        <span>{{dataObj.latestModitime}}</span>
      </li>
    </ul>
    <div class="to_top_box" v-show="isShowToTop" @click="scrollToTop">
      <i class="anchor el-icon-caret-top"></i>
    </div>
    <div class="go_back_box" @click="goBack">
      <i class="anchor el-icon-back"></i>
    </div>
    <el-button type="primary" size="small" @click="goBack">返回</el-button>
  </div>
</template>

<script>
// import { apiConfig } from '../../configs/api/apiConfig'

export default {
  name: 'VFormDetail',
  data() {
    return {
      userId: this.$route.params.userId,
      dataObj: {},
      isShowToTop: false,
      isShowInfo: false
    }
  },
  created() {
    this.fetchData();
  },
  mounted() {
    window.addEventListener('scroll', () => {
      let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
      if (scrollTop >= 150) {
        this.isShowInfo = true;
      } else {
        this.isShowInfo = false;
      }
      if (scrollTop >= 300) {
        this.isShowToTop = true;
      } else {
        this.isShowToTop = false;
      }
    })
  },
  methods: {
    fetchData() {
      // let url = apiConfig.server.formDetail + '/' + this.userId;
      // this.httpService.get(url, (res) => {
      //   if (res.data.code === 0) {
      //     this.dataObj = res.data.baseInfo;
      //   } else {
      //     this.$message({
      //       message: res.data.msg,
      //       duration: 1000,
      //       type: 'error'
      //     });
      //   }
      // });
    },
    // doDownload(type) {
    //   let url = apiConfig.server.downloadImg + '/' + this.userId + '/' + type;
    //   this.httpService.get(url, (res) => {
    //     if (res.data.code === 0) {
    //     } else {
    //       this.$message({
    //         message: res.data.msg,
    //         duration: 1000,
    //         type: 'error'
    //       });
    //     }
    //   });
    // },
    goBack() {
      window.history.go(-1);
    },
    scrollToTop() {
      let startTime = Date.now();
      let distance = document.body.scrollTop || document.documentElement.scrollTop;
      let duration = 500;
      requestAnimationFrame(function step() {
        // 动画已经用去的时间占总时间的比值
        let p = Math.min(1.0, (Date.now() - startTime) / duration);
        document.body.scrollTop = document.documentElement.scrollTop = (distance - distance * p);
        if (p < 1.0) {
          requestAnimationFrame(step);
        }
      });
      this.isShowToTop = false;
    }
  }
}
</script>

<style lang="scss">
@import '../../assets/css/vars.scss';

.v_form_detail_container {
  text-align: left;
  margin: $ent-gap-small;
  font-size: 13px;
  & .form_title {
    text-align: center;
    height: 35px;
    line-height: 35px;
    color: $ent-color-white;
    font-weight: bold;
    background: rgb(84, 92, 100);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 5;
  }
  .name_box {
    position: fixed;
    top: 45px;
    right: 15px;
    color: $ent-color-danger;
    font-size: $ent-font-size-small;
    text-align: right;
    z-index: 6;
    & > span:nth-child(1) {
      margin-bottom: 3px;
      display: block;
    }
  }
  ul {
    margin-top: 40px;
    li {
      border-bottom: 1px solid $ent-border-color-base-light-1;
      margin: $ent-gap-x-small;
      display: flex;
      align-items: center;
      min-height: 50px;
      list-style-type: none;
      position: relative;
      & .title {
        display: inline-block;
        width: 150px;
        text-align: left;
      }
      & .download_btn {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        margin-left: $ent-gap-large;
      }
    }
  }

  .to_top_box,
  .go_back_box {
    position: fixed;
    bottom: 50px;
    right: 20px;
    width: 40px;
    height: 40px;
    border-radius: 20px;
    cursor: pointer;
    transition: 0.3s;
    box-shadow: 0 0 6px rgba(0,0,0,.12);
    background-color: #fff;
    .anchor {
      color: $ent-color-primary;
      display: block;
      line-height: 40px;
      text-align: center;
      font-size: 18px;
    }
  }
  .go_back_box {
    bottom: 100px;
  }
}
</style>






