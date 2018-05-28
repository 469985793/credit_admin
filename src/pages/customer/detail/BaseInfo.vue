<template>
  <div class="v_customer_detail_baseinfo">
    <el-tag class="title_box">基本信息</el-tag>
    <el-form class="form_list_box" label-position="left" inline>
      <el-form-item label="姓名">
        <span>{{baseInfoObj.name}}</span>
      </el-form-item>
      <el-form-item label="手机号">
        <span>{{baseInfoObj.mobileNumber}}</span>
      </el-form-item>
      <el-form-item label="身份证号">
        <span>{{baseInfoObj.identityCard}}</span>
      </el-form-item>
      <el-form-item label="性别">
        <span>{{baseInfoObj.gender}}</span>
      </el-form-item>
      <el-form-item label="QQ">
        <span>{{baseInfoObj.qqNumber}}</span>
      </el-form-item>
      <el-form-item label="芝麻分">
        <span>{{baseInfoObj.sesameSeed}}</span>
      </el-form-item>
      <el-form-item label="居住地">
        <span>{{baseInfoObj.place}}</span>
      </el-form-item>
      <el-form-item label="详细地址">
        <span>{{baseInfoObj.address}}</span>
      </el-form-item>
      <el-form-item label="正面">
        <span class="ent-square">
          <img :src="baseInfoObj.photoRight" />
        </span>
      </el-form-item>
      <el-form-item label="反面">
        <span class="ent-square">
          <img :src="baseInfoObj.photoLeft" />
        </span>
      </el-form-item>
      <el-form-item label="手持照">
        <span class="ent-square">
          <img :src="baseInfoObj.photo" />
        </span>
      </el-form-item>
    </el-form>
    <el-tag class="title_box">补充信息</el-tag>
    <el-form class="form_list_box" label-position="left" inline>
      <el-form-item label="月收入">
        <span>{{otherInfoObj.salary}}</span>
      </el-form-item>
      <el-form-item label="当前负债">
        <span>{{otherInfoObj.debt}}</span>
      </el-form-item>
      <el-form-item label="公司名称">
        <span>{{otherInfoObj.companyName}}</span>
      </el-form-item>
      <el-form-item label="公司电话">
        <span>{{otherInfoObj.companyTele}}</span>
      </el-form-item>
      <el-form-item label="公司所在地">
        <span>{{otherInfoObj.companyPlace}}</span>
      </el-form-item>
      <el-form-item label="详细地址">
        <span>{{otherInfoObj.companyAddress}}</span>
      </el-form-item>
      <el-form-item label="职位">
        <span>{{otherInfoObj.companyPost}}</span>
      </el-form-item>
      <el-form-item label="紧急联系人">
        <span>{{otherInfoObj.contact1Name}}-{{otherInfoObj.contact1Mobile}}</span>
      </el-form-item>
      <el-form-item label="紧急联系人2">
        <span>{{otherInfoObj.contact2Name}}-{{otherInfoObj.contact2Mobile}}</span>
      </el-form-item>
      <el-form-item label="备用手机">
        <span>{{otherInfoObj.reserveMobile}}</span>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { apiConfig } from '../../../configs/api/apiConfig'

export default {
  name: 'VCustomerDetailBaseInfo',
  data() {
    return {
      customerId: this.$route.params.customerId,
      baseInfoObj: {},
      otherInfoObj: {}
    }
  },
  created() {
    this.fectchBaseInfo();
    this.fectchOtherInfo();
  },
  methods: {
    fectchBaseInfo() {
      this.httpService.get(apiConfig.server.baseInfo + '/' + this.customerId, (res) => {
        this.baseInfoObj = res.data.data;
      });
    },
    fectchOtherInfo() {
      this.httpService.get(apiConfig.server.otherInfo + '/' + this.customerId, (res) => {
        this.otherInfoObj = res.data.data;
      });
    }
  }
}
</script>

<style lang="scss">
@import '../../../assets/css/vars.scss';
.v_customer_detail_baseinfo {
  height: 100%;
  overflow-y: auto;
  .highlight {
    color: $ent-color-danger;
  }
  .form_list_box {
    font-size: 0;
    margin: 0 $ent-gap-base;
    width: calc(100% - 24px);
    label {
      font-size: $ent-font-size-small;
      width: 150px;
      color: #99a9bf;
    }
    .el-form-item {
      margin-right: 0;
      margin-bottom: 0;
      width: 33.3%;
    }
  }
  .title_box {
    margin: $ent-gap-xx-small $ent-gap-small;
  }
  .page_box {
    text-align: right;
    margin: $ent-gap-small;
    font-size: 13px;
    font-weight: lighter;
  }
  @media screen and (max-width: 767px) {
    .edit_btn {
      margin: 2px 0;
    }
    .el-pagination {
      text-align: center;
    }
    .el-pagination__jump,
    .el-pagination__total {
      display: none !important;  
    }
    .el-pagination__sizes {
      display: block !important;
      margin-bottom: $ent-gap-x-small;
    }
    .el-pager {
      max-width: calc(100% - 100px);
      overflow: scroll;
    }
  }
}
</style>
