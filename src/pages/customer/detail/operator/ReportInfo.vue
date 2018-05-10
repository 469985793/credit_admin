<template>
  <div class="v_operator__reportinfo_container">
    <el-tag class="title_box">申请信息</el-tag>
    <el-form class="form_list_box" label-position="left" inline>
      <el-form-item label="姓名">
        <span>{{infoData.name}}</span>
      </el-form-item>
      <el-form-item label="手机号">
        <span>{{infoData.mobile}}</span>
      </el-form-item>
      <el-form-item label="证件号码">
        <span>{{infoData.idcard}}</span>
      </el-form-item>
      <el-form-item label="客户提供姓名">
        <span>{{infoData.name_from_custom}}</span>
      </el-form-item>
      <el-form-item label="客户提供身份证号">
        <span>{{infoData.idcard_from_custom}}</span>
      </el-form-item>
      <el-form-item label="性别">
        <span>{{infoData.gender}}</span>
      </el-form-item>
      <el-form-item label="年龄">
        <span>{{infoData.age}}</span>
      </el-form-item>
      <el-form-item label="星座">
        <span>{{infoData.constellation}}</span>
      </el-form-item>
      <el-form-item label="邮箱">
        <span>{{infoData.email}}</span>
      </el-form-item>
      <el-form-item label="籍贯">
        <span>{{infoData.native_place}}</span>
      </el-form-item>
      <el-form-item label="手机号码归属地">
        <span>{{infoData.live_address}}</span>
      </el-form-item>
      <el-form-item label="居住或工作地址">
        <span>{{infoData.work_address}}</span>
      </el-form-item>
    </el-form>
    <el-tag class="title_box">数据来源</el-tag>
    <el-form class="form_list_box" label-position="left" inline>
      <el-form-item label="数据源名称">
        <span>{{srcData.source_name}}</span>
      </el-form-item>
      <el-form-item label="数据类别">
        <span>{{srcData.data_type}}</span>
      </el-form-item>
      <el-form-item label="获取时间">
        <span>{{srcData.data_gain_time}}</span>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// import { apiConfig } from '../../configs/api/apiConfig'

export default {
  name: 'VOperatorReportInfo',
  props: {
    infoData: {
      type: Object,
      default: () => {
        return {}
      }
    },
    srcData: {
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

.v_operator__reportinfo_container {
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
