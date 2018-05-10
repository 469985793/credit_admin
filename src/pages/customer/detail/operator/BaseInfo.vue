<template>
  <div class="v_operator__baseinfo_container">
    <el-form class="form_list_box" label-position="left" inline>
      <el-form-item label="姓名">
        <span>{{data.name}}</span>
      </el-form-item>
      <el-form-item label="手机号">
        <span>{{data.mobile}}</span>
      </el-form-item>
      <el-form-item label="证件号码">
        <span>{{data.idcard}}</span>
      </el-form-item>
      <el-form-item label="入网时间">
        <span>{{data.name}}</span>
      </el-form-item>
      <el-form-item label="当前余额">
        <span>{{data.name}}</span>
      </el-form-item>
      <el-form-item label="套餐类型">
        <span>{{data.name}}</span>
      </el-form-item>
      <el-form-item label="状态">
        <span>{{data.name}}</span>
      </el-form-item>
      <el-form-item label="账号星级">
        <span>{{data.name}}</span>
      </el-form-item>
      <el-form-item label="所属运营商">
        <span>{{data.name}}</span>
      </el-form-item>
      <el-form-item label="号码归属省份">
        <span>{{data.name}}</span>
      </el-form-item>
      <el-form-item label="号码归属城市">
        <span>{{data.address}}</span>
      </el-form-item>
      <el-form-item label="最近一次更新时间">
        <span>{{data.name}}</span>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// import { apiConfig } from '../../configs/api/apiConfig'

export default {
  name: 'VOperatorBaseInfo',
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

.v_operator__baseinfo_container {
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
      width: 130px;
      color: #99a9bf;
    }
    .el-form-item {
      margin-right: 0;
      margin-bottom: 0;
      width: 33.3%;
    }
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
