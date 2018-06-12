<template>
  <div class="v_customer_detail_apply_record_container">
    <el-table
      class="table_box"
      stripe
      :data="dataList">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form class="form_list_box" label-position="left" inline>
            <el-form-item label="姓名">
              <span>{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item label="手机号">
              <span>{{ props.row.telNum }}</span>
            </el-form-item>
            <el-form-item label="身份证号">
              <span>{{ props.row.idCardNum }}</span>
            </el-form-item>
            <el-form-item label="性别">
              <span>{{ props.row.sex }}</span>
            </el-form-item>
            <el-form-item label="申请金额">
              <span>{{ props.row.applyMoney }}</span>
            </el-form-item>
            <el-form-item label="申请天数">
              <span>{{ props.row.applyMoney }}</span>
            </el-form-item>
            <el-form-item label="申请时间">
              <span>{{ props.row.applyTime }}</span>
            </el-form-item>
            <el-form-item label="放款金额">
              <span>{{ props.row.loadMoney }}</span>
            </el-form-item>
            <el-form-item label="放款时间">
              <span>{{ props.row.loadTime }}</span>
            </el-form-item>
            <el-form-item label="应还款金额">
              <span>{{ props.row.shouldRepayMoney }}</span>
            </el-form-item>
            <el-form-item label="应还款时间">
              <span>{{ props.row.shouldRepayTime }}</span>
            </el-form-item>
            <el-form-item label="实际还款金额">
              <span>{{ props.row.repayMoney }}</span>
            </el-form-item>
            <el-form-item label="实际还款时间">
              <span>{{ props.row.repayTime }}</span>
            </el-form-item>
            <el-form-item label="罚款金额">
              <span>{{ props.row.amerceMoney }}</span>
            </el-form-item>
            <el-form-item label="是否逾期">
              <span>{{ props.row.isOverdue }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column
        label="序号"
        prop="id">
      </el-table-column>
      <el-table-column
        label="姓名"
        prop="name">
      </el-table-column>
      <el-table-column
        label="手机号"
        prop="telNum">
      </el-table-column>
      <el-table-column
        label="性别"
        prop="sex">
      </el-table-column>
      <el-table-column
        label="申请金额"
        prop="applyMoney">
      </el-table-column>
      <el-table-column
        label="放款金额"
        prop="loadMoney">
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

// export default {
//   name: 'VCustomerDetailApplyRecord',
//   data() {
//     return {
//       customerId: this.$route.customerId,
//       searchText: '',
//       readStatus: '全部',
//       order: 'ascend',
//       dataList: [
//         {
//           id: '1',
//           name: '小丽',
//           telNum: 13303939393,
//           idCardNum: 350838383898288222,
//           sex: '女',
//           applyMoney: 1000,
//           applyTime: '2018-3-4',
//           loadMoney: 1000,
//           loadTime: '2018-5-4',
//           shouldRepayMoney: 1000,
//           shouldRepayTime: '2018-3-4',
//           amerceMoney: 200,
//           repayMoney: 1000,
//           repayTime: '2018-3-4',
//           isOverdue: '否'
//         },
//         {
//           id: '2',
//           name: '张三',
//           telNum: 13303939393,
//           idCardNum: 350838383898288222,
//           sex: '男',
//           applyMoney: 1000,
//           applyTime: '2018-3-4',
//           loadMoney: 1000,
//           loadTime: '2018-5-4',
//           shouldRepayMoney: 1000,
//           shouldRepayTime: '2018-3-4',
//           amerceMoney: 200,
//           repayMoney: 1000,
//           repayTime: '2018-3-4',
//           isOverdue: '否'
//         }
//       ],
//       isLoading: false,
//       pageNum: 1,
//       pageSize: 10,
//       totalData: 0
//     }
//   },
//   created() {
//     this.fetchData();
//   },
//   watch: {
//     readStatus() {
//       this.doQuery();
//     },
//     order() {
//       this.doQuery();
//     }
//   },
//   methods: {
//     fetchData(isSearch = false) {
//       let obj = {
//         currentPage: this.pageNum,
//         rowCount: this.pageSize,
//         requestMap: {
//           cusId: this.customerId
//         }
//       }
//       this.httpService.post(apiConfig.server.applyRecordList, obj, (res) => {
//         if (res.data.code === 0) {
//             if (isSearch) {
//               this.isLoading = false;
//             }
//             this.totalData = res.data.total;
//           this.dataList = res.data.data.list;
//         } else {
//           this.$message({
//             message: res.data.msg,
//             duration: 1000,
//             type: 'error'
//           });
//         }
//       });
//     },
//     revertStatus(str) {
//       if (str === '全部') {
//         return ''
//       } else if (str === '未读') {
//         return '11101'
//       } else {
//         return '11102'
//       }
//     },
//     goPage(userId, page) {
//       this.$router.push({path: '/' + page + '/' + userId});
//     },
//     doQuery() {
//       this.isLoading = true;
//       this.fetchData(true);
//       console.log('submit!');
//     },
//     doSizeChange(pageSize) {
//       this.pageSize = pageSize;
//       this.fetchData();
//       console.log(`每页 ${pageSize} 条`);
//     },
//     doCurrentChange(pageNum) {
//       this.pageNum = pageNum;
//       this.fetchData();
//       console.log(`当前页: ${pageNum}`);
//     }
//   }
// }
</script>

<style lang="scss">
@import '../../../assets/css/vars.scss';

.v_customer_detail_apply_record_container {
  height: 100%;
  overflow-y: auto;
  .table_box {
    width: 100%;
    .form_list_box {
      font-size: 0;
      label {
        width: 130px;
        color: #99a9bf;
      }
      .el-form-item {
        margin-right: 0;
        margin-bottom: 0;
        width: 50%;
      }
    }
  }
}
</style>
