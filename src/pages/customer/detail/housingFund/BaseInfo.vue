<template>
  <div class="v_insurace_baseinfo">
    <el-form class="form_list_box" label-position="left" inline>
      <el-form-item label="姓名">
        <span>{{data.real_name}}</span>
      </el-form-item>
      <el-form-item label="性别">
        <span>{{data.gender}}</span>
      </el-form-item>
      <el-form-item label="出生日期">
        <span>{{data.birthday}}</span>
      </el-form-item>
      <el-form-item label="手机号码">
        <span>{{data.mobile}}</span>
      </el-form-item>
      <el-form-item label="邮箱">
        <span>{{data.email}}</span>
      </el-form-item>
      <el-form-item label="客户号">
        <span>{{data.customer_number}}</span>
      </el-form-item>
      <el-form-item label="公积金账号">
        <span>{{data.gjj_number}}</span>
      </el-form-item>
      <el-form-item label="账户余额">
        <span>{{data.balance}}</span>
      </el-form-item>
      <el-form-item label="公积金余额">
        <span>{{data.fund_balance}}</span>
      </el-form-item>
      <el-form-item label="补贴公积金账户余额">
        <span>{{data.subsidy_balance}}</span>
      </el-form-item>
      <el-form-item label="补贴月缴存">
        <span>{{data.subsidy_income}}</span>
      </el-form-item>
      <el-form-item label="缴存状态">
        <span>{{data.pay_status}}</span>
      </el-form-item>
      <el-form-item label="身份证号码">
        <span>{{data.id_card}}</span>
      </el-form-item>
      <el-form-item label="证件类型">
        <span>{{data.card_type}}</span>
      </el-form-item>
      <el-form-item label="通讯地址">
        <span>{{data.home_address}}</span>
      </el-form-item>
      <el-form-item label="企业账户号码">
        <span>{{data.corporation_number}}</span>
      </el-form-item>
      <el-form-item label="当前缴存企业名称">
        <span>{{data.corporation_name}}</span>
      </el-form-item>
      <el-form-item label="企业月度缴存">
        <span>{{data.monthly_corporation_income}}</span>
      </el-form-item>
      <el-form-item label="个人月度缴存">
        <span>{{data.monthly_customer_income}}</span>
      </el-form-item>
      <el-form-item label="月度总缴存">
        <span>{{data.monthly_total_income}}</span>
      </el-form-item>
      <el-form-item label="企业缴存比例">
        <span>{{data.corporation_ratio}}</span>
      </el-form-item>
      <el-form-item label="个人缴存比例">
        <span>{{data.customer_ratio}}</span>
      </el-form-item>
      <el-form-item label="补贴公积金公司缴存比例">
        <span>{{data.subsidy_corporation_ratio}}</span>
      </el-form-item>
      <el-form-item label="补贴公积金个人缴存比例">
        <span>{{data.subsidy_customer_ratio}}</span>
      </el-form-item>
      <el-form-item label="缴存基数">
        <span>{{data.base_number}}</span>
      </el-form-item>
      <el-form-item label="开户日期">
        <span>{{data.begin_date}}</span>
      </el-form-item>
      <el-form-item label="最新缴存日期">
        <span>{{data.last_pay_date}}</span>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// import { apiConfig } from '../../configs/api/apiConfig'

export default {
  name: 'VInsuranceBaseInfo',
  props: {
    data: {
      type: Object,
      default: () => {
        return {}
      }
    }
  }
}
</script>

<style lang="scss">
@import '../../../../assets/css/vars.scss';
.v_insurace_baseinfo {
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
}
</style>
