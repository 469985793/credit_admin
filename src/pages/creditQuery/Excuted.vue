<template>
  <div class="v_credit_excuted">
    <el-form :inline="true">
      <el-form-item>
        <el-button type="primary" size="small" icon="el-icon-search" @click="isShowDialog = true">查询被执行报告</el-button>
      </el-form-item>
    </el-form>
    <el-dialog
      title="被执行雷达查询"
      :visible.sync="isShowDialog"
      width="30%">
      <span>每次查询都是要花钱的哦~</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="isShowDialog = false">取 消</el-button>
        <el-button type="primary" @click="doQuery">确 定</el-button>
      </span>
    </el-dialog>
    <el-table
      class="table_box"
      stripe
      :data="dataList">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form class="form_list_box" label-position="left" inline>
            <el-form-item label="姓名">
              <span>{{ props.row.user_name }}</span>
            </el-form-item>
            <el-form-item label="身份证号">
              <span>{{ props.row.idCard }}</span>
            </el-form-item>
            <el-form-item label="案件编号">
              <span>{{ props.row.case_code }}</span>
            </el-form-item>
            <el-form-item label="案件ID">
              <span>{{ props.row.case_id }}</span>
            </el-form-item>
            <el-form-item label="执行法院的名称">
              <span>{{ props.row.exec_court_name }}</span>
            </el-form-item>
            <el-form-item label="执行标的金额">
              <span>{{ props.row.exec_money }}</span>
            </el-form-item>
            <el-form-item label="执行状态">
              <span>{{ props.row.case_state }}</span>
            </el-form-item>
            <el-form-item label="查询获取的身份证号, 经过脱敏">
              <span>{{ props.row.party_card_num }}</span>
            </el-form-item>
            <el-form-item label="查询获取的姓名">
              <span>{{ props.row.query_name }}</span>
            </el-form-item>
            <el-form-item label="案件创建时间">
              <span>{{ props.row.case_create_time }}</span>
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
        prop="user_name">
      </el-table-column>
      <el-table-column
        label="身份证号"
        prop="idCard">
      </el-table-column>
      <el-table-column
        label="案件编号"
        prop="case_code">
      </el-table-column>
      <el-table-column
        label="案件创建时间"
        prop="case_create_time">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { apiConfig } from '../../configs/api/apiConfig'

export default {
  name: 'VCreditExcuted',
  data() {
    return {
      isShowDialog: false,
      loading: {},
      dataList: []
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
        user_name: this.searchData.name,
        id_card: this.searchData.idcardNum,
        industry_type: this.searchData.tradeType
      }

      this.isShowDialog = false;
      this.loading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      });
      this.httpService.post(apiConfig.server.creditQuery.excute.order, obj, (res) => {
        this.pollingOrderStatus(res.data.data.tradeNo);
      });
    },
    pollingOrderStatus(tradeNo) {
      let obj = {
        tradeNo: tradeNo
      }
      this.httpService.post(apiConfig.server.creditQuery.excute.orderStatus, obj, (res) => {
        if (res.data.data.finished) {
          this.$message(res.data.data.description);
          this.getData(obj);
        } else {
          setTimeout(() => {
            this.pollingOrderStatus(tradeNo);
          }, 2000);
        }
      });
    },
    getData(obj) {
      this.httpService.post(apiConfig.server.creditQuery.excute.info, obj, (res) => {
        this.loading.close();
        this.dataList = res.data.data;
      });
    }
  }
}
</script>

<style lang="scss">
@import '../../assets/css/vars.scss';

.v_credit_excuted {
  .table_box {
    width: 100%;
    .form_list_box {
      font-size: 0;
      label {
        width: 210px;
        color: #99a9bf;
      }
      .el-form-item {
        margin-right: 0;
        margin-bottom: 0;
        width: 33.3%;
      }
    }
  }
}
</style>
