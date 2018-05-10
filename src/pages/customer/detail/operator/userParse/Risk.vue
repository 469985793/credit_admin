<template>
  <div class="v_operator__risk_container">
    <el-tag class="title_box">风险信息</el-tag>
    <el-form class="form_list_box" label-position="left" inline>
      <el-form-item label="入网时长">
        <span>{{data.in_time}}</span>
      </el-form-item>
      <el-form-item label="号码沉默度(近三个月)">
        <span>{{data.mobile_silence_3m}}</span>
      </el-form-item>
      <el-form-item label="欠费风险度(近三个月)">
        <span>{{data.arrearage_risk_3m}}</span>
      </el-form-item>
      <el-form-item label="亲情网风险度">
        <span>{{data.binding_risk}}</span>
      </el-form-item>
      <el-form-item label="号码沉默度(近六个月)">
        <span>{{data.mobile_silence_6m}}</span>
      </el-form-item>
      <el-form-item label="欠费风险度(近六个月)">
        <span>{{data.arrearage_risk_6m}}</span>
      </el-form-item>
      <el-form-item label="申请人姓名+身份证号码是否出现在法院黑名单">
        <span>{{data.is_name_and_idcard_in_court_black}}</span>
      </el-form-item>
      <el-form-item label="申请人姓名+身份证号码是否出现在金融机构黑名单">
        <span>{{data.is_name_and_idcard_in_finance_black}}</span>
      </el-form-item>
      <el-form-item label="申请人姓名+手机号码是否出现在金融机构黑名单">
        <span>{{data.is_name_and_mobile_in_finance_black}}</span>
      </el-form-item>
    </el-form>
    <el-tag class="title_box">风险检测</el-tag>
    <el-table
      :data="data.risk_check_item"
      stripe
      style="width: 100%"
      height="100%">
      <el-table-column
        type="index"
        label="序号"
        width="60">
      </el-table-column>
      <el-table-column
        prop="item"
        label="风险类别">
      </el-table-column>
      <el-table-column
        prop="call_num_3m"
        label="近三个月通话次数">
      </el-table-column>
      <el-table-column
        prop="call_num_6m"
        label="近六个月通话次数">
      </el-table-column>
      <el-table-column
        prop="call_time_3m"
        label="近三个月通话时间">
      </el-table-column>
      <el-table-column
        prop="call_time_6m"
        label="近六个月通话时间">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
// import { apiConfig } from '../../configs/api/apiConfig'

export default {
  name: 'VOperatorRisk',
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
@import '../../../../../assets/css/vars.scss';

.v_operator__risk_container {
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
      width: 330px;
      color: #99a9bf;
    }
    .el-form-item {
      margin-right: 0;
      margin-bottom: 0;
      width: 50%;
    }
  }
  .title_box {
    margin: $ent-gap-xx-small $ent-gap-small;
  }
}
</style>
