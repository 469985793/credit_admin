<template>
  <div class="v_credit_behavior">
    <el-form :inline="true">
      <el-form-item>
        <el-button type="primary" size="small" icon="el-icon-search" @click="isShowDialog = true">查询行为报告</el-button>
      </el-form-item>
    </el-form>
    <el-dialog
      title="行为雷达查询"
      :visible.sync="isShowDialog"
      width="30%">
      <span>每次查询都是要花钱的哦~</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="isShowDialog = false">取 消</el-button>
        <el-button type="primary" @click="doQuery">确 定</el-button>
      </span>
    </el-dialog>
    <el-form v-if="!common.isEmptyObject(dataObj)" class="form_list_box" label-position="left" inline>
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
        <span>{{dataObj.loans_score}}</span>
      </el-form-item>
      <el-form-item label="贷款行为置信度">
        <span>{{dataObj.loans_credibility}}</span>
      </el-form-item>
      <el-form-item label="贷款放款总订单数">
        <span>{{dataObj.loans_count}}</span>
      </el-form-item>
      <el-form-item label="贷款已结清订单数">
        <span>{{dataObj.loans_settle_count}}</span>
      </el-form-item>
      <el-form-item label="贷款逾期订单数">
        <span>{{dataObj.loans_overdue_count}}</span>
      </el-form-item>
      <el-form-item label="贷款机构数">
        <span>{{dataObj.loans_org_count}}</span>
      </el-form-item>
      <el-form-item label="消费金融类机构数">
        <span>{{dataObj.consfin_org_count}}</span>
      </el-form-item>
      <el-form-item label="网络贷款类机构数">
        <span>{{dataObj.loans_cash_count}}</span>
      </el-form-item>
      <el-form-item label="近1个月贷款笔数">
        <span>{{dataObj.latest_one_month}}</span>
      </el-form-item>
      <el-form-item label="近3个月贷款笔数">
        <span>{{dataObj.latest_three_month}}</span>
      </el-form-item>
      <el-form-item label="近6个月贷款笔数">
        <span>{{dataObj.latest_six_month}}</span>
      </el-form-item>
      <el-form-item label="历史贷款机构成功扣款笔数">
        <span>{{dataObj.history_suc_fee}}</span>
      </el-form-item>
      <el-form-item label="历史贷款机构失败扣款笔数">
        <span>{{dataObj.history_fail_fee}}</span>
      </el-form-item>
      <el-form-item label="近1个月贷款机构成功扣款笔数">
        <span>{{dataObj.latest_one_month_suc}}</span>
      </el-form-item>
      <el-form-item label="近1个月贷款机构失败扣款笔数">
        <span>{{dataObj.latest_one_month_fail}}</span>
      </el-form-item>
      <el-form-item label="信用贷款时长">
        <span>{{dataObj.loans_long_time}}</span>
      </el-form-item>
      <el-form-item label="最近一次贷款时间">
        <span>{{dataObj.loans_latest_time}}</span>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { apiConfig } from '../../../../configs/api/apiConfig'

export default {
  name: 'VCreditBehavior',
  data() {
    return {
      customerId: this.$route.params.customerId,
      loading: {},
      isShowDialog: false,
      dataObj: {}
    }
  },
  methods: {
    doQuery() {
      this.isShowDialog = false;
      this.loading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      });
      this.httpService.get(apiConfig.server.behaviorList + '/' + this.customerId, (res) => {
        let message = res.data.data.errorMsg ? res.data.data.errorMsg : res.data.data.desc;
        this.$message(message);
        this.dataObj = res.data.data;
        this.loading.close();
      });
    }
  }
}
</script>

<style lang="scss">
@import '../../../../assets/css/vars.scss';

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
