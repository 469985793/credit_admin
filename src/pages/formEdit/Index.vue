<template>
  <div class="v_form_edit_container">
    <div class="name_box" v-show="isShowInfo">
      <span>罗晓彬</span>
      <span>13303623981</span>
    </div>
    <div class="form_title">编辑表单</div>
    <el-form class="form_box" label-position="top">
      <el-form-item label="姓名" :required="true">
        <el-input placeholder="请输入姓名" v-model="formData.userName" clearable></el-input>
      </el-form-item>
      <el-form-item label="联系电话" :required="true">
        <div class="item_note">一定要填写</div>
        <el-input placeholder="请输入手机号" v-model="formData.telNum" clearable :maxlength="11"></el-input>
      </el-form-item>
      <el-form-item label="联系电话2">
        <div class="item_note">有备用号的一定要填写</div>
        <el-input placeholder="请输入手机号" v-model="formData.secondTelMobile" clearable :maxlength="11"></el-input>
      </el-form-item>
      <el-form-item label="现居住地址" :required="true">
        <div class="item_note">邮编可不填</div>
        <v-distpicker class="dispicker_box" @selected="doSelectLiveAddr" @province="selectLiveProvince" @city="selectLiveCity" @area="selectLiveArea" :province="addressObj.live.province" :city="addressObj.live.city" :area="addressObj.live.area"></v-distpicker>
        <el-input placeholder="详细地址" v-model="formData.currentAddress" clearable></el-input>
      </el-form-item>
      <el-form-item label="公司名称" :required="true">
        <div class="item_note">一定要填写</div>
        <el-input placeholder="请输入公司名称" v-model="formData.companyName" clearable></el-input>
      </el-form-item>
      <el-form-item label="公司电话" :required="true">
        <div class="item_note">一定要填写</div>
        <el-input placeholder="请输入公司电话" v-model="formData.companyMobile" clearable></el-input>
      </el-form-item>
      <el-form-item label="公司地址" :required="true">
        <div class="item_note">邮编可不填</div>
        <v-distpicker class="dispicker_box" @selected="doSelectCompanyAddr" @province="selectCompanyProvince" @city="selectCompanyCity" @area="selectCompanyArea" :province="addressObj.company.province" :city="addressObj.company.city" :area="addressObj.company.area"></v-distpicker>
        <el-input placeholder="详细地址" v-model="formData.companyAdress" clearable></el-input>
      </el-form-item>
      <el-form-item label="职位" :required="true">
        <div class="item_note">例如: 公司主管、餐厅服务员等等</div>
        <el-input placeholder="请填写职位" v-model="formData.applyPosition" clearable></el-input>
      </el-form-item>
      <el-form-item label="月收入" :required="true">
        <div class="item_note">销售类职务填平均收入</div>
        <el-input placeholder="请填写收入" v-model="formData.monthIncome" clearable></el-input>
      </el-form-item>
      <el-form-item label="当前负债" :required="true">
        <div class="item_note">一定要填写</div>
        <el-input placeholder="请输入当前负债" v-model="formData.currentLiabilities" clearable></el-input>
      </el-form-item>
      <el-form-item label="资金用途">
        <div class="item_note">一定要填写</div>
        <el-input placeholder="请输入资金用途" v-model="formData.useFunds" clearable></el-input>
      </el-form-item>
      <el-form-item label="QQ" :required="true">
        <div class="item_note">一定要QQ</div>
        <el-input placeholder="请填写QQ" v-model="formData.contactQq" clearable></el-input>
      </el-form-item>
      <el-form-item label="紧急联系人" :required="true">
        <div class="item_note">例如: 妈妈-李丽-177xxx</div>
        <el-input placeholder="请填写紧急联系人" v-model="formData.emergencyContact" clearable></el-input>
      </el-form-item>
      <el-form-item label="紧急联系人2">
        <div class="item_note">例如: 同事-小王-133xxx</div>
        <el-input placeholder="请填写备用紧急联系人" v-model="formData.secondEmergencyContact" clearable></el-input>
      </el-form-item>
      <el-form-item label="芝麻分" :required="true">
        <div class="item_note">支付宝芝麻分</div>
        <el-input placeholder="请填写芝麻分" v-model="formData.sesameCredit" clearable></el-input>
      </el-form-item>
      <el-form-item label="身份证正面" :required="true">
        <div class="item_note">支持jpg, png, gif, bmp, psd, tiff等图片格式</div>
        <img :src="formData.fileCardFront"/>
      </el-form-item>
      <el-form-item label="身份证反面" :required="true">
        <div class="item_note">支持jpg, png, gif, bmp, psd, tiff等图片格式</div>
        <img :src="formData.fileCardBack"/>
      </el-form-item>
      <el-form-item label="手持身份证照片" :required="true">
        <div class="item_note">支持jpg, png, gif, bmp, psd, tiff等图片格式</div>
        <img :src="formData.fileCardHand"/>
      </el-form-item>
      <el-form-item label="手持身份证照片" :required="true">
        <div class="item_note">支持jpg, png, gif, bmp, psd, tiff等图片格式</div>
        <img :src="formData.fileCardHand"/>
      </el-form-item>
      <el-form-item class="approve_box" label="审批">
        <el-radio-group v-model="formData.reserveSecond" size="small">
          <el-radio-button label="暂不处理"></el-radio-button>
          <el-radio-button label="通过"></el-radio-button>
          <el-radio-button label="不通过"></el-radio-button>
        </el-radio-group>
      </el-form-item>
       <el-form-item label="备注">
        <el-input type="textarea" v-model="formData.reserveOne"></el-input>
      </el-form-item>
      <el-form-item class="btn_set">
        <el-button type="primary" size="small" @click="goBack">返回</el-button>
        <el-button type="warning" size="small" @click="doSubmit">保存</el-button>
      </el-form-item>
    </el-form>
    <div class="to_top_box" v-show="isShowToTop" @click="scrollToTop">
      <i class="anchor el-icon-caret-top"></i>
    </div>
    <div class="go_back_box" @click="goBack">
      <i class="anchor el-icon-back"></i>
    </div>
  </div>
</template>

<script>
// import { apiConfig } from '../../configs/api/apiConfig'
import VDistpicker from 'v-distpicker';

export default {
  name: 'VFormEdit',
  data() {
    return {
      formData: {
        userName: '',
        telNum: '',
        secondTelMobile: '',
        useFunds: '',
        currentLiabilities: '',
        currentAddress: '',
        companyName: '',
        companyMobile: '',
        companyAdress: '',
        applyPosition: '',
        monthIncome: '',
        contactQq: '',
        emergencyContact: '',
        secondEmergencyContact: '',
        sesameCredit: '',
        fileFront: '',
        fileBack: '',
        fileHand: '',
        reserveOne: '', // 备注
        reserveSecond: '暂不处理'
      },
      isLoading: false,
      addressObj: {
        live: {
          text: '',
          province: '福建省',
          city: '',
          area: ''
        },
        company: {
          text: '',
          province: '福建省',
          city: '',
          area: ''
        }
      },
      isShowToTop: false,
      isShowInfo: false
    }
  },
  components: { VDistpicker },
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
      // let url = apiConfig.server.formEdit + '/' + this.userId;
      // this.httpService.get(url, (res) => {
      //   if (res.data.code === 0) {
      //     let resObj = res.data.baseInfo;
      //     this.formData.userName = resObj.userName;
      //     this.formData.telNum = resObj.telNum;
      //     this.formData.secondTelMobile = resObj.secondTelMobile;
      //     this.formData.useFunds = resObj.useFunds;
      //     this.formData.currentLiabilities = resObj.currentLiabilities;
      //     this.formData.currentAddress = this.splitAddress(resObj.currentAddress, 'live');
      //     this.formData.companyName = resObj.companyName;
      //     this.formData.companyMobile = resObj.companyMobile;
      //     this.formData.companyAdress = this.splitAddress(resObj.companyAdress, 'company');
      //     this.formData.applyPosition = resObj.applyPosition;
      //     this.formData.monthIncome = resObj.monthIncome;
      //     this.formData.contactQq = resObj.contactQq;
      //     this.formData.emergencyContact = resObj.emergencyContact;
      //     this.formData.secondEmergencyContact = resObj.secondEmergencyContact;
      //     this.formData.sesameCredit = resObj.sesameCredit;
      //     this.formData.fileFront = resObj.fileFront;
      //     this.formData.fileBack = resObj.fileBack;
      //     this.formData.fileHand = resObj.fileHand;
      //     this.formData.reserveOne = resObj.reserveOne;
      //     this.formData.reserveSecond = resObj.reserveSecond;
      //   } else {
      //     this.$message({
      //       message: res.data.msg,
      //       duration: 1000,
      //       type: 'error'
      //     });
      //   }
      // });
    },
    selectLiveProvince(data) {
      this.addressObj.live.province = data.value;
    },
    selectLiveCity(data) {
      this.addressObj.live.city = data.value;
    },
    selectLiveArea(data) {
      this.addressObj.live.area = data.value;
    },
    doSelectLiveAddr(data) {
      this.addressObj.live.text = data.province.value + '-' + data.city.value + '-' + data.area.value;
    },
    selectCompanyProvince(data) {
      this.addressObj.company.province = data.value;
    },
    selectCompanyCity(data) {
      this.addressObj.company.city = data.value;
    },
    selectCompanyArea(data) {
      this.addressObj.company.area = data.value;
    },
    doSelectCompanyAddr(data) {
      this.addressObj.company.text = data.province.value + '-' + data.city.value + '-' + data.area.value;
    },
    splitAddress(str, type) {
      let addressArray = [];
      addressArray = str.split('-');
      this.addressObj[type].province = addressArray[0];
      this.addressObj[type].city = addressArray[1];
      this.addressObj[type].area = addressArray[2];
      return addressArray[3];
    },
    goBack() {
      window.history.go(-1);
    },
    doSubmit() {
      console.log(this.formData);
      this.isLoading = true;
      let errMsg = this.format.checkRequired(this.formData.userName, '姓名');
      errMsg = errMsg !== '' ? errMsg : this.format.telPhone(this.formData.telNum);
      errMsg = errMsg !== '' ? errMsg : this.format.checkRequired(this.addressObj.live.province, '居住省份');
      errMsg = errMsg !== '' ? errMsg : this.format.checkRequired(this.addressObj.live.city, '居住市');
      errMsg = errMsg !== '' ? errMsg : this.format.checkRequired(this.addressObj.live.area, '居住区');
      errMsg = errMsg !== '' ? errMsg : this.format.checkRequired(this.formData.currentAddress, '居住详细地址');
      errMsg = errMsg !== '' ? errMsg : this.format.checkRequired(this.formData.companyName, '公司名称');
      errMsg = errMsg !== '' ? errMsg : this.format.checkRequired(this.formData.companyMobile, '公司电话');
      errMsg = errMsg !== '' ? errMsg : this.format.checkRequired(this.addressObj.company.province, '公司省份');
      errMsg = errMsg !== '' ? errMsg : this.format.checkRequired(this.addressObj.company.city, '公司所在市');
      errMsg = errMsg !== '' ? errMsg : this.format.checkRequired(this.addressObj.company.area, '公司所在区');
      errMsg = errMsg !== '' ? errMsg : this.format.checkRequired(this.formData.companyAdress, '公司详细地址');
      errMsg = errMsg !== '' ? errMsg : this.format.checkRequired(this.formData.applyPosition, '公司职位');
      errMsg = errMsg !== '' ? errMsg : this.format.checkRequired(this.formData.monthIncome, '月收入');
      errMsg = errMsg !== '' ? errMsg : this.format.checkRequired(this.formData.currentLiabilities, '当前负债');
      errMsg = errMsg !== '' ? errMsg : this.format.checkQQ(this.formData.contactQq);
      errMsg = errMsg !== '' ? errMsg : this.format.checkRequired(this.formData.emergencyContact, '紧急联系人');
      errMsg = errMsg !== '' ? errMsg : this.format.checkRequired(this.formData.sesameCredit, '芝麻信用分');
      errMsg = errMsg !== '' ? errMsg : this.format.checkRequired(this.formData.fileFront, '身份证正面照');
      errMsg = errMsg !== '' ? errMsg : this.format.checkRequired(this.formData.fileBack, '身份证反面照');
      errMsg = errMsg !== '' ? errMsg : this.format.checkRequired(this.formData.fileHand, '手持身份证照片');

      if (!errMsg) {
        // let obj = {
        //   fileFront: this.formData.fileFront,
        //   fileBack: this.formData.fileBack,
        //   fileHand: this.formData.fileHand,
        //   userName: this.formData.userName,
        //   telNum: this.formData.telNum,
        //   secondTelMobile: this.formData.secondTelMobile,
        //   useFunds: this.formData.useFunds,
        //   currentLiabilities: this.formData.currentLiabilities,
          // currentAddress: this.addressObj.live.text + '-' + this.formData.currentAddress,
        //   companyName: this.addressObj.company.text + '-' + this.formData.companyName,
        //   companyMobile: this.formData.companyMobile,
        //   companyAdress: this.formData.companyAdress,
        //   applyPosition: this.formData.applyPosition,
        //   monthIncome: this.formData.monthIncome,
        //   contactQq: this.formData.contactQq,
        //   emergencyContact: this.formData.emergencyContact,
        //   secondEmergencyContact: this.formData.secondEmergencyContact,
        //   sesameCredit: this.formData.sesameCredit,
        //   reserveOne: this.formData.reserveOne,
        //   reserveSecond: this.formData.reserveSecond
        // }
        // this.httpService.post(apiConfig.server.add, obj, (res) => {
        //   if (res.data.code === 0) {
        //     this.isLoading = false;
        //     this.$message({
        //       message: '提交成功',
        //       duration: 1000,
        //       type: 'success'
        //     });
        //     window.history.go(-1);
        //   } else {
        //     this.$message({
        //       message: res.data.msg,
        //       duration: 1000,
        //       type: 'error'
        //     });
        //   }
        // });
      } else {
        this.$message({
          message: errMsg,
          type: 'error',
          duration: 1000
        });
        this.isLoading = false;
        return;
      }
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

.v_form_edit_container {
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
  .form_box {
    margin: 40px $ent-gap-small;
    .dispicker_box {
      text-align: left;
      & select {
        margin: 2px 0;
      }
    }
    .item_note {
      line-height: 20px;
      text-align: left;
      margin: 5px 10px;
      font-size: 10px;
      color: #606266;
    }
    .btn_set.el-form-item {
      margin-top: $ent-gap-small;
      text-align: left;
    }
    .approve_box.el-form-item {
      text-align: left;
      margin-top: $ent-gap-small;
    }
    /* overwrite */
    .el-form-item {
      margin: 0;
      & .el-form-item__content {
        line-height: 0;
      }
      & .el-form-item__label {
        width: 100%;
        text-align: left;
        margin: 0;
        padding: 0;
      }
      & .el-select {
        width: 100%;
      }
      & .el-input {
        margin: 2px 0;
      }
    }
    /* overwrite */
  }
}
</style>
