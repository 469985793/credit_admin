<template>
  <div class="v_alimarket_baseinfo">
    <el-tag class="title_box">基本信息</el-tag>
    <el-form class="form_list_box" label-position="left" inline>
      <el-form-item label="映射ID">
        <span>{{data.userinfo.mapping_id}}</span>
      </el-form-item>
      <el-form-item label="淘宝昵称">
        <span>{{data.userinfo.nick}}</span>
      </el-form-item>
      <el-form-item label="真实姓名">
        <span>{{data.userinfo.real_name}}</span>
      </el-form-item>
      <el-form-item label="电话号码">
        <span>{{data.userinfo.phone_number}}</span>
      </el-form-item>
      <el-form-item label="绑定的邮箱">
        <span>{{data.userinfo.email}}</span>
      </el-form-item>
      <el-form-item label="vip等级">
        <span>{{data.userinfo.vip_level}}</span>
      </el-form-item>
      <el-form-item label="成长值">
        <span>{{data.userinfo.vip_count}}</span>
      </el-form-item>
      <el-form-item label="绑定的微博账号">
        <span>{{data.userinfo.weibo_account}}</span>
      </el-form-item>
      <el-form-item label="绑定的微博昵称">
        <span>{{data.userinfo.weibo_nick}}</span>
      </el-form-item>
      <el-form-item label="淘宝头像图片">
        <span>{{data.userinfo.pic}}</span>
      </el-form-item>
      <el-form-item label="绑定的支付宝账号">
        <span>{{data.userinfo.alipay_account}}</span>
      </el-form-item>
      <el-form-item label="天猫等级">
        <span>{{data.userinfo.tmall_level}}</span>
      </el-form-item>
      <el-form-item label="天猫vip值">
        <span>{{data.userinfo.tmall_vipcount}}</span>
      </el-form-item>
      <el-form-item label="天猫信誉">
        <span>{{data.userinfo.tmall_apass}}</span>
      </el-form-item>
      <el-form-item label="最早一笔订单交易时间">
        <span>{{data.userinfo.first_ordertime}}</span>
      </el-form-item>
      <el-form-item label="用户在淘宝中的用户ID">
        <span>{{data.userinfo.taobao_userid}}</span>
      </el-form-item>
      <el-form-item label="淘气值">
        <span>{{data.userinfo.tao_score}}</span>
      </el-form-item>
      <el-form-item label="注册时间">
        <span>{{data.userinfo.register_time}}</span>
      </el-form-item>
      <el-form-item label="是否实名认证">
        <span>{{data.userinfo.account_auth}}</span>
      </el-form-item>
    </el-form>
    <el-tag class="title_box">用户的淘宝对应支付宝资产</el-tag>
    <el-form class="form_list_box" label-position="left" inline>
      <el-form-item label="映射ID">
        <span>{{data.alipaywealth.mapping_id}}</span>
      </el-form-item>
      <el-form-item label="账户余额">
        <span>{{data.alipaywealth.balance}}</span>
      </el-form-item>
      <el-form-item label="余额宝历史累计收益">
        <span>{{data.alipaywealth.total_profit}}</span>
      </el-form-item>
      <el-form-item label="余额宝金额">
        <span>{{data.alipaywealth.total_quotient}}</span>
      </el-form-item>
      <el-form-item label="花呗当前可用额度">
        <span>{{data.alipaywealth.huabei_creditamount}}</span>
      </el-form-item>
      <el-form-item label="花呗授信额度">
        <span>{{data.alipaywealth.huabei_totalcreditamount}}</span>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// import { apiConfig } from '../../configs/api/apiConfig'

export default {
  name: 'VAliMarketBaseInfo',
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
.v_alimarket_baseinfo {
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
