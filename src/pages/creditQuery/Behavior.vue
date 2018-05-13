<template>
  <div class="v_credit_behavior">
    <el-form class="form_list_box" label-position="left" inline>
      <el-form-item label="被查询姓名">
        <span>{{dataObj.id_name}}</span>
      </el-form-item>
      <el-form-item label="被查询人身份证">
        <span>{{dataObj.id_no}}</span>
      </el-form-item>
      <el-form-item label="是否收费">
        <span>{{dataObj.fee}}</span>
      </el-form-item>
      <el-form-item label="贷款行为分">
        <span>{{dataObj.result_detail.loans_score}}</span>
      </el-form-item>
      <el-form-item label="贷款行为置信度">
        <span>{{dataObj.result_detail.loans_credibility}}</span>
      </el-form-item>
      <el-form-item label="贷款放款总订单数">
        <span>{{dataObj.result_detail.loans_count}}</span>
      </el-form-item>
      <el-form-item label="贷款已结清订单数">
        <span>{{dataObj.result_detail.loans_settle_count}}</span>
      </el-form-item>
      <el-form-item label="贷款逾期订单数">
        <span>{{dataObj.result_detail.loans_overdue_count}}</span>
      </el-form-item>
      <el-form-item label="贷款机构数">
        <span>{{dataObj.result_detail.loans_org_count}}</span>
      </el-form-item>
      <el-form-item label="消费金融类机构数">
        <span>{{dataObj.result_detail.consfin_org_count}}</span>
      </el-form-item>
      <el-form-item label="网络贷款类机构数">
        <span>{{dataObj.result_detail.loans_cash_count}}</span>
      </el-form-item>
      <el-form-item label="近1个月贷款笔数">
        <span>{{dataObj.result_detail.latest_one_month}}</span>
      </el-form-item>
      <el-form-item label="近3个月贷款笔数">
        <span>{{dataObj.result_detail.latest_three_month}}</span>
      </el-form-item>
      <el-form-item label="近6个月贷款笔数">
        <span>{{dataObj.result_detail.latest_six_month}}</span>
      </el-form-item>
      <el-form-item label="历史贷款机构成功扣款笔数">
        <span>{{dataObj.result_detail.history_suc_fee}}</span>
      </el-form-item>
      <el-form-item label="历史贷款机构失败扣款笔数">
        <span>{{dataObj.result_detail.history_fail_fee}}</span>
      </el-form-item>
      <el-form-item label="近1个月贷款机构成功扣款笔数">
        <span>{{dataObj.result_detail.latest_one_month_suc}}</span>
      </el-form-item>
      <el-form-item label="近1个月贷款机构失败扣款笔数">
        <span>{{dataObj.result_detail.latest_one_month_fail}}</span>
      </el-form-item>
      <el-form-item label="信用贷款时长">
        <span>{{dataObj.result_detail.loans_long_time}}</span>
      </el-form-item>
      <el-form-item label="最近一次贷款时间">
        <span>{{dataObj.result_detail.loans_latest_time}}</span>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// import { apiConfig } from '../../configs/api/apiConfig'

export default {
  name: 'VCreditBehavior',
  data() {
    return {
      dataObj: {}
    }
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.httpService.get('/api/behavior', (res) => {
        this.dataObj = res.data.data;
      });
    }
  }
}
</script>

<style lang="scss">
@import '../../assets/css/vars.scss';

.v_credit_behavior {
  .highlight {
    color: $ent-color-danger;
  }
  .form_list_box {
    font-size: 0;
    margin: 0 $ent-gap-base;
    width: calc(100% - 24px);
    label {
      font-size: $ent-font-size-small;
      width: 200px;
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
