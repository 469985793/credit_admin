<template>
  <div class="v_credit_apply">
    <el-form :inline="true">
      <el-form-item>
        <el-button type="primary" size="small" icon="el-icon-search" @click="isShowDialog = true">查询申请报告</el-button>
      </el-form-item>
    </el-form>
    <el-dialog
      title="申请雷达查询"
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
      <el-form-item label="申请准入分">
        <span>{{dataObj.apply_score}}</span>
      </el-form-item>
      <el-form-item label="申请准入置信度">
        <span>{{dataObj.apply_credibility}}</span>
      </el-form-item>
      <el-form-item label="查询机构数">
        <span>{{dataObj.query_org_count}}</span>
      </el-form-item>
      <el-form-item label="查询消费金融类机构数">
        <span>{{dataObj.query_finance_count}}</span>
      </el-form-item>
      <el-form-item label="查询网络贷款类机构数">
        <span>{{dataObj.query_cash_count}}</span>
      </el-form-item>
      <el-form-item label="总查询次数">
        <span>{{dataObj.query_sum_count}}</span>
      </el-form-item>
      <el-form-item label="最近查询时间">
        <span>{{dataObj.latest_query_time}}</span>
      </el-form-item>
      <el-form-item label="近1个月总查询笔数">
        <span>{{dataObj.latest_one_month}}</span>
      </el-form-item>
      <el-form-item label="近3个月总查询笔数">
        <span>{{dataObj.latest_three_month}}</span>
      </el-form-item>
      <el-form-item label="近6个月总查询笔数">
        <span>{{dataObj.latest_six_month}}</span>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { apiConfig } from '../../configs/api/apiConfig'

export default {
  name: 'VCreditApply',
  data() {
    return {
      loading: {},
      isShowDialog: false,
      dataObj: {}
    }
  },
  props: {
    searchData: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    doQuery() {
      let obj = {
        id_name: this.searchData.name,
        id_no: this.searchData.idcardNum,
        industry_type: this.searchData.tradeType
      }
      this.isShowDialog = false;
      this.loading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      });
      this.httpService.post(apiConfig.server.creditQuery.apply, obj, (res) => {
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
@import '../../assets/css/vars.scss';
.v_credit_apply {
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
