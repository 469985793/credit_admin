<template>
  <div class="v_unread_list_container">
    <div class="head_box">
      <i class="el-icon-back" @click="goBack"></i>
      <span>未读表单列表</span>
    </div>
    <div class="content_box">
      <el-form :inline="true">
        <el-form-item>
          <el-input size="small" v-model="searchText" placeholder="姓名/手机号"></el-input>
        </el-form-item>
        <el-form-item>
          <el-radio-group v-model="order">
            <el-radio label="ascend">时间升序</el-radio>
            <el-radio label="descend">时间降序</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="small" @click="doQuery" :loading="isLoading">查询</el-button>
        </el-form-item>
      </el-form>
      <el-table
        :data="dataList"
        style="width: 100%"
        height="100%">
        <el-table-column
          prop="dkId"
          label="id"
          width="60">
        </el-table-column>
        <el-table-column
          prop="userName"
          label="姓名"
          width="80">
        </el-table-column>
        <el-table-column
          prop="telNum"
          label="手机号"
          width="120">
        </el-table-column>
        <el-table-column
          label="居住地址"
          width="120">
          <template slot-scope="scope">
            <el-tooltip :content="scope.row.currentAddress" placement="top">
              <span>{{scope.row.currentAddress}}</span>
            </el-tooltip>
          </template>
        </el-table-column>
        <el-table-column
          prop="monthIncome"
          label="月收入"
          width="120">
        </el-table-column>
        <el-table-column
          label="状态"
          width="60">
          <template slot-scope="scope">
            <span class="highlight" v-if="scope.row.status === '11101'">未读</span>
            <span v-else>已读</span>
          </template>
        </el-table-column>
        <el-table-column
          label="操作">
          <template slot-scope="scope">
            <el-button @click="goPage(scope.row.dkId, 'formDetail')" type="primary" size="small">查看</el-button>
            <el-button class="edit_btn" @click="goPage(scope.row.dkId, 'formEdit')" type="warning" size="small">编辑</el-button>
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
    </div>
  </div>
</template>

<script>
// import { apiConfig } from '../../configs/api/apiConfig'

export default {
  name: 'VUnreadList',
  data() {
    return {
      searchText: '',
      order: 'ascend',
      dataList: [
        {
          dkId: '1',
          userName: '张三',
          telNum: '1222929929',
          currentAddress: '上海市',
          monthIncome: '1000元',
          contactQq: '1000元',
          crtTime: '2016-06-6',
          status: '11101'
        },
        {
          dkId: '2',
          userName: '张三2',
          telNum: '1222929929',
          currentAddress: '上海市',
          monthIncome: '1000元',
          contactQq: '1000元',
          crtTime: '2016-06-6',
          status: '11101',
          checkout: '1'
        },
        {
          dkId: '3',
          userName: '张三3',
          telNum: '1222929929',
          currentAddress: '上海市',
          monthIncome: '1000元',
          contactQq: '1000元',
          crtTime: '2016-06-6',
          status: '11102'
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
    order() {
      this.doQuery();
    }
  },
  methods: {
    goBack() {
      window.history.go(-1);
    },
    fetchData(isSearch = false) {
      // let obj = {
      //   'pageNum': this.pageNum,
      //   'pageSize': this.pageSize,
      //   'order': this.order,
      //   'searchText': this.searchText,
      //   'status': '11101'
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
@import '../../assets/css/vars.scss';

.v_unread_list_container {
  & .head_box {
    text-align: center;
    height: 35px;
    line-height: 35px;
    color: $ent-color-white;
    font-weight: bold;
    background: rgb(84, 92, 100);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 5;
    & > i {
      position: fixed;
      top: 10px;
      left: 15px;
      color: $ent-color-white;
    }
  }
  & .content_box {
    margin: 45px $ent-gap-small $ent-gap-small;
    text-align: left;
    .highlight {
      color: $ent-color-danger;
    }

    /* overwrite */
    .el-table {
      font-size: 13px;
      .cell {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
    }
    .el-form-item {
      margin-bottom: $ent-gap-x-small;
    } /* overwrite */

    .page_box {
      text-align: right;
      margin: $ent-gap-small;
      font-size: 13px;
      font-weight: lighter;
    }
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






