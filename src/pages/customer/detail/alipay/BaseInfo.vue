<template>
  <div class="v_insurace_baseinfo">
    <el-tag class="title_box">基本信息</el-tag>
    <el-form class="form_list_box" label-position="left" inline>
      <el-form-item label="映射ID">
        <span>{{data.userinfo.mapping_id}}</span>
      </el-form-item>
      <el-form-item label="用户ID">
        <span>{{data.userinfo.alipay_userid}}</span>
      </el-form-item>
      <el-form-item label="是否经过实名认证">
        <span>{{data.userinfo.certified}}</span>
      </el-form-item>
      <el-form-item label="性别">
        <span>{{data.userinfo.gender}}</span>
      </el-form-item>
      <el-form-item label="姓名">
        <span>{{data.userinfo.user_name}}</span>
      </el-form-item>
      <el-form-item label="身份证号">
        <span>{{data.userinfo.idcard_number}}</span>
      </el-form-item>
      <el-form-item label="邮件">
        <span>{{data.userinfo.email}}</span>
      </el-form-item>
      <el-form-item label="手机号">
        <span>{{data.userinfo.phone_number}}</span>
      </el-form-item>
      <el-form-item label="淘宝会员名">
        <span>{{data.userinfo.taobao_id}}</span>
      </el-form-item>
      <el-form-item label="注册时间">
        <span>{{data.userinfo.register_time}}</span>
      </el-form-item>
    </el-form>
    <el-tag class="title_box">资产状况信息</el-tag>
    <el-form class="form_list_box" label-position="left" inline>
      <el-form-item label="映射ID">
        <span>{{data.wealth.mapping_id}}</span>
      </el-form-item>
      <el-form-item label="账户余额">
        <span>{{data.wealth.yue}}</span>
      </el-form-item>
      <el-form-item label="余额宝金额">
        <span>{{data.wealth.yeb}}</span>
      </el-form-item>
      <el-form-item label="招财宝">
        <span>{{data.wealth.zcb}}</span>
      </el-form-item>
      <el-form-item label="基金">
        <span>{{data.wealth.fund}}</span>
      </el-form-item>
      <el-form-item label="存金宝">
        <span>{{data.wealth.cjb}}</span>
      </el-form-item>
      <el-form-item label="淘宝理财的金额">
        <span>{{data.wealth.taolicai}}</span>
      </el-form-item>
      <el-form-item label="花呗额度">
        <span>{{data.wealth.huabai_limit}}</span>
      </el-form-item>
    </el-form>
    <el-tag class="title_box">借呗额度</el-tag>
    <el-form class="form_list_box" label-position="left" inline>
      <el-form-item label="映射ID">
        <span>{{data.alipayjiebei.mapping_id}}</span>
      </el-form-item>
      <el-form-item label="借呗额度">
        <span>{{data.alipayjiebei.credit_amt}}</span>
      </el-form-item>
      <el-form-item label="借呗可用额度">
        <span>{{data.alipayjiebei.loanable_amt}}</span>
      </el-form-item>
      <el-form-item label="日利率">
        <span>{{data.alipayjiebei.risk_int_by_thousand}}</span>
      </el-form-item>
      <el-form-item label="是否逾期">
        <span>{{data.alipayjiebei.ovd_able}}</span>
      </el-form-item>
      <el-form-item label="是否未开通">
        <span>{{data.alipayjiebei.new_able}}</span>
      </el-form-item>
      <el-form-item label="绑定的手机号码">
        <span>{{data.alipayjiebei.binded_mobile}}</span>
      </el-form-item>
      <el-form-item label="未开通帮助描述">
        <span>{{data.alipayjiebei.refuse_reason}}</span>
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
