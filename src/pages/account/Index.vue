<template>
  <div class="v_account_container">
    <el-form :inline="true">
      <el-form-item>
        <el-input size="small" v-model="searchData.name" placeholder="姓名"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="small" icon="el-icon-search" @click="doQuery" :loading="isLoading">查询</el-button>
      </el-form-item>
      <el-form-item>
        <el-button class="add_btn" size="small" icon="el-icon-plus" type="primary" @click.stop="doShowDialog('add')">新增成员</el-button>
      </el-form-item>
    </el-form>
    <el-table
      class="table_box"
      :data="dataList"
      v-loading="isLoadingTable"
      element-loading-text="拼命加载中"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.8)"
      stripe
      :highlight-current-row="true"
      style="width: 100%"
      height="100%">
      <el-table-column
        fixed="left"
        type="index"
        label="序号"
        width="60">
      </el-table-column>
      <el-table-column
        prop="empId"
        label="员工编号">
      </el-table-column>
      <el-table-column
        fixed="left"
        prop="name"
        label="姓名">
      </el-table-column>
      <el-table-column
        prop="phone"
        label="手机号">
      </el-table-column>
      <el-table-column
        prop="gender"
        label="性别">
      </el-table-column>
      <el-table-column
        :show-overflow-tooltip="true"
        prop="email"
        label="邮箱地址">
      </el-table-column>
      <el-table-column
        prop="depa1.name"
        label="一级部门">
      </el-table-column>
      <el-table-column
        label="账号状态">
        <template slot-scope="scope">
          <el-tag v-if="scope.row.status === 'Y'" type="success">启用</el-tag>
          <el-tag v-else type="danger">禁用</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        width="280"
        label="操作">
        <template slot-scope="scope">
          <el-button @click.stop="doShowDialog('edit', scope.row.userId)" type="primary" size="small">修改</el-button>
          <el-button @click.stop="doShowDialog('detail', scope.row.userId)" type="danger" size="small">查看详情</el-button>
          <el-button @click.stop="doShowResetPop(scope.row.userId)" type="success" size="small">重置密码</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
      title="重置密码"
      :visible.sync="isShowResetPop"
      width="30%">
      <span>亲,您确定要重置密码么?</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="isShowResetPop = false">取 消</el-button>
        <el-button type="primary" @click="doResetPwd">确 定</el-button>
      </span>
    </el-dialog>
    <el-pagination
      class="page_box"
      background
      @size-change="doSizeChange"
      @current-change="doCurrentChange"
      :current-page="1"
      :page-sizes="[10, 20, 50, 100]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="totalData">
    </el-pagination>
    <el-dialog :title="isEditDialog ? '更新信息' : '员工信息'" :visible.sync="isShowDialog">
      <el-form :model="dialogFormData" label-position="left" label-width="80px">
        <el-form-item label="员工编号">
          <el-input v-model="dialogFormData.empId" placeholder="员工编号" disabled></el-input>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input v-model="dialogFormData.name" placeholder="姓名"></el-input>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input v-model="dialogFormData.phone" placeholder="手机号"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-input v-model="dialogFormData.gender" placeholder="性别"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="dialogFormData.password" type="password" placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item label="生日">
          <el-date-picker
            v-model="dialogFormData.birthday"
            value-format="yyyy-MM-dd"
            type="date"
            placeholder="生日">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="电话号">
          <el-input v-model="dialogFormData.telePhone" placeholder="电话号"></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="dialogFormData.email" placeholder="邮箱"></el-input>
        </el-form-item>
        <el-form-item label="QQ">
          <el-input v-model="dialogFormData.qq" placeholder="QQ"></el-input>
        </el-form-item>
        <el-form-item label="微信">
          <el-input v-model="dialogFormData.wechat" placeholder="微信"></el-input>
        </el-form-item>
        <el-form-item v-if="dialogFormData.depa1" label="一级部门">
          <el-input v-model="dialogFormData.depa1.name" placeholder="一级部门"></el-input>
        </el-form-item>
        <el-form-item v-if="dialogFormData.depa2" label="二级部门">
          <el-input v-model="dialogFormData.depa2.name" placeholder="二级部门"></el-input>
        </el-form-item>
        <el-form-item v-if="dialogFormData.depa3"  label="三级部门">
          <el-input v-model="dialogFormData.depa3.name" placeholder="三级部门"></el-input>
        </el-form-item>
        <el-form-item label="账号状态">
          <div>
            <el-radio v-model="dialogFormData.status" label="Y" border>启用</el-radio>
            <el-radio v-model="dialogFormData.status" label="N" border>禁用</el-radio>
          </div>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isShowDialog = false">关闭</el-button>
        <template v-if="isEditDialog">
          <el-button v-if="!isDisabledBtn && dialogFormData.empId !== '' && dialogFormData.name !== '' && dialogFormData.phone !== ''" @click="doSubmit('edit')" type="primary">更新</el-button>
          <el-button v-else type="primary" disabled>更新</el-button>
        </template>
      </div>
    </el-dialog>
    <el-dialog title="新增员工" :visible.sync="isAddDialog">
      <el-form :model="addFormData" label-position="left" label-width="80px">
        <el-form-item label="员工编号">
          <el-input v-model="addFormData.empId" placeholder="员工编号" @blur="doCheckStaff"></el-input>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input v-model="addFormData.name" placeholder="姓名"></el-input>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input v-model="addFormData.phone" placeholder="手机号"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-input v-model="addFormData.gender" placeholder="性别"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="addFormData.password" type="password" placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item label="生日">
          <el-date-picker
            v-model="addFormData.birthday"
            value-format="yyyy-MM-dd"
            type="date"
            placeholder="生日">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="电话号">
          <el-input v-model="addFormData.telePhone" placeholder="电话号"></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="addFormData.email" placeholder="邮箱"></el-input>
        </el-form-item>
        <el-form-item label="QQ">
          <el-input v-model="addFormData.qq" placeholder="QQ"></el-input>
        </el-form-item>
        <el-form-item label="微信">
          <el-input v-model="addFormData.wechat" placeholder="微信"></el-input>
        </el-form-item>
        <el-form-item label="一级部门">
          <el-input v-model="addFormData.depa1.name" placeholder="一级部门"></el-input>
        </el-form-item>
        <el-form-item label="二级部门">
          <el-input v-model="addFormData.depa2.name" placeholder="二级部门"></el-input>
        </el-form-item>
        <el-form-item label="三级部门">
          <el-input v-model="addFormData.depa3.name" placeholder="三级部门"></el-input>
        </el-form-item>
        <el-form-item label="账号状态">
          <div>
            <el-radio v-model="addFormData.status" label="Y" border>启用</el-radio>
            <el-radio v-model="addFormData.status" label="N" border>禁用</el-radio>
          </div>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isAddDialog = false">关闭</el-button>
        <template>
          <el-button v-if="!isDisabledBtn && addFormData.empId !== '' && addFormData.name !== '' && addFormData.phone !== ''" @click="doSubmit('add')" type="danger">新增</el-button>
          <el-button v-else type="danger" disabled>新增</el-button>
        </template>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { apiConfig } from '../../configs/api/apiConfig'

export default {
  name: 'VAccount',
  data() {
    return {
      isDisabledBtn: false,
      isShowDialog: false,
      isAddDialog: false,
      isEditDialog: false,
      isShowResetPop: false,
      userId: '',
      dialogFormData: {},
      addFormData: {
        empId: '',
        name: '',
        password: '',
        gender: '',
        birthday: '',
        phone: '',
        telePhone: '',
        email: '',
        qq: '',
        depa1: {
          name: ''
        },
        depa2: {
          name: ''
        },
        depa3: {
          name: ''
        },
        status: ''
      },
      searchData: {
        telNum: '',
        name: '',
        date: ''
      },
      dataList: [],
      isLoadingTable: true,
      isLoading: false,
      pageNum: 1,
      pageSize: 10,
      totalData: 0
    }
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData(isSearch = false) {
      let obj = {
        currentPage: this.pageNum,
        rowCount: this.pageSize,
        requestMap: {
          name: this.searchData.name
        }
      }
      this.httpService.post(apiConfig.server.staffList, obj, (res) => {
        if (isSearch) {
          this.isLoading = false;
        }
        this.isLoadingTable = false;
        this.totalData = res.data.requestPage.totalCount;
        this.dataList = res.data.data;
      });
    },
    doShowDialog(type, userId) {
      this.isAddDialog = false;
      this.isEditDialog = false;
      this.isShowDialog = false;
      switch (type) {
        case 'add':
          this.isAddDialog = true;
          break;
        case 'edit':
          this.isEditDialog = true;
          this.isShowDialog = true;
          this.getStaffDetail(userId);
          break;
        case 'detail':
          this.isShowDialog = true;
          this.getStaffDetail(userId);
          break;
        default:
          break;
      }
    },
    getStaffDetail(userId) {
      this.httpService.get(apiConfig.server.staffDetail + '/' + userId, (res) => {
        this.dialogFormData = res.data.data;
      });
    },
    doShowResetPop(userId) {
      this.isShowResetPop = true;
      this.userId = userId;
    },
    doResetPwd() {
      this.httpService.get(apiConfig.server.resetPwd + '/' + this.userId, (res) => {
        this.isShowResetPop = false;
      });
    },
    doCheckStaff() {
      this.httpService.get(apiConfig.server.checkStaff + '/' + this.addFormData.empId, (res) => {
        if (res.data.data !== 0) {
          this.addFormData.empId = '';
          this.$message({
            message: '员工编号重复, 请重新输入哦~',
            type: 'warning'
          });
        }
      });
    },
    doSubmit(type) {
      this.isDisabledBtn = true;
      let data = type === 'add' ? this.addFormData : this.dialogFormData;
      let url;
      let obj = {
        password: data.password,
        userId: data.userId,
        empId: data.empId,
        name: data.name,
        gender: data.gender,
        email: data.email,
        birthday: data.birthday,
        phone: data.phone,
        telePhone: data.telePhone,
        wechat: data.wechat,
        depa1: {
          depaId: 1
        },
        depa2: {
          depaId: 4
        },
        status: data.status
      }
      switch (type) {
        case 'add':
          url = apiConfig.server.addStaff;
          delete obj.userId;
          break;
        case 'edit':
          url = apiConfig.server.editStaff;
          break;
        default:
          break;
      }
      this.httpService.post(url, obj, (res) => {
        this.isDisabledBtn = false;
        this.isShowDialog = false;
        this.isAddDialog = false;
        this.fetchData();
      });
    },
    goPage(page) {
      this.$router.push({path: page});
    },
    doQuery() {
      this.isLoading = true;
      this.fetchData(true);
    },
    doSizeChange(pageSize) {
      this.pageSize = pageSize;
      this.fetchData();
    },
    doCurrentChange(pageNum) {
      this.pageNum = pageNum;
      this.fetchData();
    }
  }
}
</script>

<style lang="scss">
@import '../../assets/css/vars.scss';

.v_account_container {
  .el-date-editor.el-input {
    width: 100%;
  }
  .add_btn {
    border-radius: 20px;
  }
  .highlight {
    color: $ent-color-danger;
  }
  .verify_item_box {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    & > span {
      margin-bottom: 2px;
    }
  }
  .table_box {
    height: calc(100vh - 250px) !important;
  }
  /* overwrite */
  .el-table {
    font-size: 13px;
    .cell {
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
    .el-badge__content.is-fixed.is-dot {
      left: -20px;
      top: 2px;
    }
    .el-tag:hover {
      cursor: pointer;
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

