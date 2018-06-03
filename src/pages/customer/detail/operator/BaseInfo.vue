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
        <span>{{data.open_time}}</span>
      </el-form-item>
      <el-form-item label="当前余额">
        <span>{{data.available_balance}}</span>
      </el-form-item>
      <el-form-item label="状态">
        <span>{{data.state}}</span>
      </el-form-item>
      <el-form-item label="账号星级">
        <span>{{data.level}}</span>
      </el-form-item>
      <el-form-item label="所属运营商">
        <span>{{data.carrier}}</span>
      </el-form-item>
      <el-form-item label="号码归属省份">
        <span>{{data.province}}</span>
      </el-form-item>
      <el-form-item label="号码归属城市">
        <span>{{data.city}}</span>
      </el-form-item>
      <el-form-item label="最近一次更新时间">
        <span>{{data.last_modify_time}}</span>
      </el-form-item>
    </el-form>
    <el-tag class="title_box">套餐类型: {{data.package_name}}</el-tag>
    <el-table
      class="table_box"
      stripe
      :highlight-current-row="true"
      :data="data.packages">
      <el-table-column
        type="index"
        label="序号"
        width="60">
      </el-table-column>
      <el-table-column
        label="账单起始日"
        prop="bill_start_date">
      </el-table-column>
      <el-table-column
        label="账单结束日"
        prop="bill_end_date">
      </el-table-column>
      <el-table-column
        label="操作">
        <template slot-scope="scope">
          <el-button @click.stop="showPackageModal(scope.$index)" type="primary" size="small">查看明细</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="套餐明细" :visible.sync="isShowDialog">
      <el-table
        class="table_box"
        stripe
        :data="itemList">
        <el-table-column
          type="index"
          label="序号"
          width="100">
        </el-table-column>
        <el-table-column
          :show-overflow-tooltip="true"
          label="套餐名称"
          prop="item">
        </el-table-column>
        <el-table-column
          label="总量"
          prop="total">
        </el-table-column>
        <el-table-column
          label="已使用量"
          prop="used">
        </el-table-column>
        <el-table-column
          label="单位"
          prop="unit">
        </el-table-column>
      </el-table>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isShowDialog = false">关闭</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
// import { apiConfig } from '../../configs/api/apiConfig'

export default {
  name: 'VOperatorBaseInfo',
  data() {
    return {
      isShowDialog: false,
      itemList: []
    }
  },
  props: {
    data: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  methods: {
    showPackageModal(index) {
      this.itemList = this.data.packages[index].items;
      this.isShowDialog = true;
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
  .el-dialog {
    width: 75%;
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
  .table_box {
    margin: 0 $ent-gap-small;
    width: calc(100% - 24px);
  }
  .title_box {
    margin: $ent-gap-xx-small $ent-gap-small;
  }
}
</style>
