<template>
  <div class="v_credit_discredit">
    <el-form :inline="true">
      <el-form-item>
        <el-button type="primary" size="small" icon="el-icon-search" @click="isShowDialog = true">查询失信报告</el-button>
      </el-form-item>
    </el-form>
    <el-dialog
      title="失信雷达查询"
      :visible.sync="isShowDialog"
      width="30%">
      <span>每次查询都是要花钱的哦~</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="isShowDialog = false">取 消</el-button>
        <el-button type="primary" @click="doQuery">确 定</el-button>
      </span>
    </el-dialog>
    <el-tag class="title_box">失信人信息</el-tag>
    <el-form v-if="!common.isEmptyObject(dataObj)" class="form_list_box" label-position="left" inline>
      <el-form-item label="失信人姓名">
        <span>{{dataObj.idHolder}}</span>
      </el-form-item>
      <el-form-item label="失信人身份证号码">
        <span>{{dataObj.idCard}}</span>
      </el-form-item>
      <el-form-item label="是否收费">
        <span>{{dataObj.fee}}</span>
      </el-form-item>
    </el-form>
    <el-table
      class="table_box"
      stripe
      :highlight-current-row="true"
      :data="dataObj.enforcedInfos">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form class="form_list_box" label-position="left" inline>
            <el-form-item label="姓名">
              <span>{{ props.row.iname }}</span>
            </el-form-item>
            <el-form-item label="卡号">
              <span>{{ props.row.cardNum }}</span>
            </el-form-item>
            <el-form-item label="案件编号">
              <span>{{ props.row.caseCode }}</span>
            </el-form-item>
            <el-form-item label="年龄">
              <span>{{ props.row.age }}</span>
            </el-form-item>
            <el-form-item label="性别">
              <span>{{ props.row.sexy }}</span>
            </el-form-item>
            <el-form-item label="地区">
              <span>{{ props.row.areaName }}</span>
            </el-form-item>
            <el-form-item label="法人">
              <span>{{ props.row.businessEntity }}</span>
            </el-form-item>
            <el-form-item label="执行法院">
              <span>{{ props.row.courtName }}</span>
            </el-form-item>
            <el-form-item label="判决书确定的义务">
              <span>{{ props.row.duty }}</span>
            </el-form-item>
            <el-form-item label="履行情况">
              <span>{{ props.row.performance }}</span>
            </el-form-item>
            <el-form-item label="失信被执行人行为情形">
              <span>{{ props.row.disruptTypeName }}</span>
            </el-form-item>
            <el-form-item label="被执行日期">
              <span>{{ props.row.publishDate }}</span>
            </el-form-item>
            <el-form-item label="立案号">
              <span>{{ props.row.gistId }}</span>
            </el-form-item>
            <el-form-item label="立案日期">
              <span>{{ props.row.regDate }}</span>
            </el-form-item>
            <el-form-item label="案件受理机构">
              <span>{{ props.row.gistUnit }}</span>
            </el-form-item>
            <el-form-item label="被执行日期">
              <span>{{ props.row.publishDateStamp }}</span>
            </el-form-item>
            <el-form-item label="执行部分">
              <span>{{ props.row.performedPart }}</span>
            </el-form-item>
            <el-form-item label="未执行部分">
              <span>{{ props.row.unperformPart }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column
        type="index"
        label="序号"
        width="60">
      </el-table-column>
      <el-table-column
        label="姓名"
        prop="iname">
      </el-table-column>
      <el-table-column
        label="卡号"
        prop="cardNum">
      </el-table-column>
      <el-table-column
        label="案件编号"
        prop="caseCode">
      </el-table-column>
      <el-table-column
        label="法人"
        prop="businessEntity">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { apiConfig } from '../../../../configs/api/apiConfig'

export default {
  name: 'VCreditDiscredit',
  data() {
    return {
      customerId: this.$route.params.customerId,
      loading: {},
      isShowDialog: false,
      dataObj: []
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
      this.httpService.get(apiConfig.server.discreditList + '/' + this.customerId, (res) => {
        let message = res.data.data.errorMsg ? res.data.data.errorMsg : res.data.data.desc;
        this.$message(message);
        this.loading.close();
        this.dataObj = res.data.data;
      });
    }
  }
}
</script>

<style lang="scss">
@import '../../../../assets/css/vars.scss';

.v_credit_discredit {
  height: 100%;
  overflow-y: auto;
  .form_list_box {
    margin: 0 $ent-gap-small;
    font-size: 0;
    label {
      width: 180px;
      color: #99a9bf;
    }
    .el-form-item {
      margin-right: 0;
      margin-bottom: 0;
      width: 33.3%;
    }
  }
  .title_box {
    margin: $ent-gap-small 0;
  }
}
</style>
