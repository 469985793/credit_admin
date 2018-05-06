<template>
  <div class="v_alimarket_orderinfo">
    <el-table
      class="table_box"
      stripe
      :data="dataList">
      <el-table-column
        width="60"
        label="序号"
        prop="id">
      </el-table-column>
      <el-table-column
        label="交易状态"
        prop="name">
      </el-table-column>
      <el-table-column
        label="交易时间"
        prop="sex">
      </el-table-column>
      <el-table-column
        label="订单金额"
        prop="applyMoney">
      </el-table-column>
      <el-table-column
        label="卖家id"
        prop="applyMoney">
      </el-table-column>
      <el-table-column
        label="卖家昵称"
        prop="name">
      </el-table-column>
      <el-table-column
        label="店铺名称"
        prop="sex">
      </el-table-column>
      <el-table-column
        label="交易状态中文"
        prop="applyMoney">
      </el-table-column>
      <el-table-column
        label="操作">
        <template slot-scope="scope">
          <el-button @click.stop="isShowDialog = true" type="primary" size="small">查看详情</el-button>
        </template>
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
    <el-dialog title="订单详情" :visible.sync="isShowDialog">
      <el-table
        class="table_box"
        stripe
        :data="dataList">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form class="form_list_box" label-position="left" inline>
              <el-form-item label="交易id">
                <span>{{ props.row.telNum }}</span>
              </el-form-item>
              <el-form-item label="商品id">
                <span>{{ props.row.applyTime }}</span>
              </el-form-item>
              <el-form-item label="商品链接">
                <span>{{ props.row.loadMoney }}</span>
              </el-form-item>
              <el-form-item label="商品图片">
                <img />
              </el-form-item>
              <el-form-item label="商品名称">
                <span>{{ props.row.loadMoney }}</span>
              </el-form-item>
              <el-form-item label="商品数量">
                <span>{{ props.row.loadMoney }}</span>
              </el-form-item>
              <el-form-item label="商品原价">
                <span>{{ props.row.loadMoney }}</span>
              </el-form-item>
              <el-form-item label="商品真实交易价格">
                <span>{{ props.row.loadMoney }}</span>
              </el-form-item>
              <el-form-item label="一级目录的id">
                <span>{{ props.row.loadMoney }}</span>
              </el-form-item>
              <el-form-item label="二级目录的id">
                <span>{{ props.row.loadMoney }}</span>
              </el-form-item>
              <el-form-item label="一级目录的名称">
                <span>{{ props.row.loadMoney }}</span>
              </el-form-item>
              <el-form-item label="二级目录的名称">
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
          label="交易id"
          prop="name">
        </el-table-column>
        <el-table-column
          label="商品id"
          prop="sex">
        </el-table-column>
        <el-table-column
          label="商品名称"
          prop="applyMoney">
        </el-table-column>
        <el-table-column
          label="商品原价"
          prop="applyMoney">
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
  name: 'VAliMarketOrderInfo',
  data() {
    return {
      isShowDialog: false,
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

.v_alimarket_orderinfo {
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
