<template>
  <div class="v_credit_apply">
    <el-form class="form_list_box" label-position="left" inline>
      <el-form-item label="被查询姓名">
        <span>{{dataObj.id_name}}</span>
      </el-form-item>
      <el-form-item label="被查询人身份证">
        <span>{{dataObj.id_no}}</span>
      </el-form-item>
      <el-form-item label="申请准入分">
        <span>{{dataObj.result_detail.apply_score}}</span>
      </el-form-item>
      <el-form-item label="申请准入置信度">
        <span>{{dataObj.result_detail.apply_credibility}}</span>
      </el-form-item>
      <el-form-item label="查询机构数">
        <span>{{dataObj.result_detail.query_org_count}}</span>
      </el-form-item>
      <el-form-item label="查询消费金融类机构数">
        <span>{{dataObj.result_detail.query_finance_count}}</span>
      </el-form-item>
      <el-form-item label="查询网络贷款类机构数">
        <span>{{dataObj.result_detail.query_cash_count}}</span>
      </el-form-item>
      <el-form-item label="总查询次数">
        <span>{{dataObj.result_detail.query_sum_count}}</span>
      </el-form-item>
      <el-form-item label="最近查询时间">
        <span>{{dataObj.result_detail.latest_query_time}}</span>
      </el-form-item>
      <el-form-item label="近1个月总查询笔数">
        <span>{{dataObj.result_detail.latest_one_month}}</span>
      </el-form-item>
      <el-form-item label="近3个月总查询笔数">
        <span>{{dataObj.result_detail.latest_three_month}}</span>
      </el-form-item>
      <el-form-item label="近6个月总查询笔数">
        <span>{{dataObj.result_detail.latest_six_month}}</span>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// import { apiConfig } from '../../configs/api/apiConfig'

export default {
  name: 'VCreditApply',
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
      this.httpService.get('/api/apply', (res) => {
        this.dataObj = res.data.data;
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
