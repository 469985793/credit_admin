<template>
  <div class="v_insurance_record">
    <el-table
      class="table_box"
      stripe
      :data="dataList">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form class="form_list_box" label-position="left" inline>
            <el-form-item label="出账">
              <span>{{ props.row.telNum }}</span>
            </el-form-item>
            <el-form-item label="入账">
              <span>{{ props.row.applyTime }}</span>
            </el-form-item>
            <el-form-item label="补贴入账">
              <span>{{ props.row.loadMoney }}</span>
            </el-form-item>
            <el-form-item label="补贴出账">
              <span>{{ props.row.loadMoney }}</span>
            </el-form-item>
            <el-form-item label="缴存时间">
              <span>{{ props.row.loadMoney }}</span>
            </el-form-item>
            <el-form-item label="缴存年月">
              <span>{{ props.row.loadMoney }}</span>
            </el-form-item>
            <el-form-item label="缴存公司名称">
              <span>{{ props.row.loadMoney }}</span>
            </el-form-item>
            <el-form-item label="公司缴存金额">
              <span>{{ props.row.loadMoney }}</span>
            </el-form-item>
            <el-form-item label="个人缴存金额">
              <span>{{ props.row.loadMoney }}</span>
            </el-form-item>
            <el-form-item label="公司缴存比例">
              <span>{{ props.row.loadMoney }}</span>
            </el-form-item>
            <el-form-item label="个人缴存比例">
              <span>{{ props.row.loadMoney }}</span>
            </el-form-item>
            <el-form-item label="补缴">
              <span>{{ props.row.loadMoney }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column
        label="序号"
        prop="id">
      </el-table-column>
      <el-table-column
        label="出账"
        prop="name">
      </el-table-column>
      <el-table-column
        label="入账"
        prop="sex">
      </el-table-column>
      <el-table-column
        label="余额"
        prop="applyMoney">
      </el-table-column>
      <el-table-column
        label="缴存年月"
        prop="applyMoney">
      </el-table-column>
    </el-table>
    <el-pagination
      class="page_box"
      background
      @size-change="doSizeChange"
      @current-change="doCurrentChange"
      :current-page="1"
      :page-sizes="[10, 20, 50, 100]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="totalData">
    </el-pagination>
  </div>
</template>

<script>
// import { apiConfig } from '../../configs/api/apiConfig'

export default {
  name: 'VInsuranceRecord',
  data() {
    return {
      searchText: '',
      readStatus: '全部',
      order: 'ascend',
      dataList: [
        {
          id: '1',
          name: '小丽',
          telNum: 13303939393,
          idCardNum: 350838383898288222,
          sex: '女',
          applyMoney: 1000,
          applyTime: '2018-3-4',
          loadMoney: 1000,
          loadTime: '2018-5-4',
          shouldRepayMoney: 1000,
          shouldRepayTime: '2018-3-4',
          amerceMoney: 200,
          repayMoney: 1000,
          repayTime: '2018-3-4',
          isOverdue: '否'
        },
        {
          id: '2',
          name: '张三',
          telNum: 13303939393,
          idCardNum: 350838383898288222,
          sex: '男',
          applyMoney: 1000,
          applyTime: '2018-3-4',
          loadMoney: 1000,
          loadTime: '2018-5-4',
          shouldRepayMoney: 1000,
          shouldRepayTime: '2018-3-4',
          amerceMoney: 200,
          repayMoney: 1000,
          repayTime: '2018-3-4',
          isOverdue: '否'
        }
      ],
      isLoading: false,
      pageNum: 1,
      pageSize: 10,
      totalData: 100
    }
  },
  created() {
    this.fetchData();
  },
  watch: {
    readStatus() {
      this.doQuery();
    },
    order() {
      this.doQuery();
    }
  },
  methods: {
    fetchData(isSearch = false) {
      // let obj = {
      //   'pageNum': this.pageNum,
      //   'pageSize': this.pageSize,
      //   'order': this.order,
      //   'searchText': this.searchText,
      //   'status': this.revertStatus(this.readStatus)
      // }
      // this.httpService.post(apiConfig.server.formList, obj, (res) => {
      //   if (res.data.code === 0) {
            // if (isSearch) {
            //   this.isLoading = false;
            // }
            // this.totalData = res.data.total;
      //     this.dataList = res.data.data.list;
      //   } else {
      //     this.$message({
      //       message: res.data.msg,
      //       duration: 1000,
      //       type: 'error'
      //     });
      //   }
      // });
    },
    revertStatus(str) {
      if (str === '全部') {
        return ''
      } else if (str === '未读') {
        return '11101'
      } else {
        return '11102'
      }
    },
    goPage(userId, page) {
      this.$router.push({path: '/' + page + '/' + userId});
    },
    doQuery() {
      this.isLoading = true;
      this.fetchData(true);
      console.log('submit!');
    },
    doSizeChange(pageSize) {
      this.pageSize = pageSize;
      this.fetchData();
      console.log(`每页 ${pageSize} 条`);
    },
    doCurrentChange(pageNum) {
      this.pageNum = pageNum;
      this.fetchData();
      console.log(`当前页: ${pageNum}`);
    }
  }
}
</script>

<style lang="scss">
@import '../../../../assets/css/vars.scss';

.v_insurance_record {
  .table_box {
    width: 100%;
    .form_list_box {
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
  }
  .page_box {
    text-align: right;
    margin: $ent-gap-small;
    font-size: 13px;
    font-weight: lighter;
  }
}
</style>
