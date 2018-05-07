<template>
  <div class="v_operator__reportinfo_container">
    <el-tag class="title_box">申请信息</el-tag>
    <el-form class="form_list_box" label-position="left" inline>
      <el-form-item label="姓名">
        <span>张三</span>
      </el-form-item>
      <el-form-item label="手机号">
        <span>133344232332</span>
      </el-form-item>
      <el-form-item label="证件号码">
        <span>3509382899328283823</span>
      </el-form-item>
      <el-form-item label="客户提供姓名">
        <span>2019-3-5</span>
      </el-form-item>
      <el-form-item label="客户提供身份证号">
        <span>100</span>
      </el-form-item>
      <el-form-item label="性别">
        <span>高端套餐</span>
      </el-form-item>
      <el-form-item label="年龄">
        <span>正常</span>
      </el-form-item>
      <el-form-item label="星座">
        <span>五星</span>
      </el-form-item>
      <el-form-item label="邮箱">
        <span>电信</span>
      </el-form-item>
      <el-form-item label="籍贯">
        <span>上海</span>
      </el-form-item>
      <el-form-item label="手机号码归属地">
        <span>上海</span>
      </el-form-item>
      <el-form-item label="居住或工作地址">
        <span>2019-3-25</span>
      </el-form-item>
    </el-form>
    <el-tag class="title_box">数据来源</el-tag>
    <el-form class="form_list_box" label-position="left" inline>
      <el-form-item label="数据源名称">
        <span>张三</span>
      </el-form-item>
      <el-form-item label="数据类别">
        <span>133344232332</span>
      </el-form-item>
      <el-form-item label="获取时间">
        <span>2019-3-25</span>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// import { apiConfig } from '../../configs/api/apiConfig'

export default {
  name: 'VOperatorReportInfo',
  data() {
    return {
      dataList: [
        {
          dkId: '1',
          userName: '张三',
          telNum: '1222929929',
          currentAddress: '上海市-普通新区-林展路411弄1501',
          monthIncome: '1000元',
          contactQq: '1000元',
          crtTime: '2016-06-6',
          status: '11101',
          reserveOne: '1',
          remark: '这个是个穷小子',
          modiJobno: '罗晓彬'
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
          reserveOne: '1',
          remark: '这个是个穷小子',
          modiJobno: '罗晓彬'
        },
        {
          dkId: '3',
          userName: '张三3',
          telNum: '1222929929',
          currentAddress: '上海市',
          monthIncome: '1000元',
          contactQq: '1000元',
          crtTime: '2016-06-6',
          status: '11102',
          reserveOne: '0',
          remark: '这个是个穷小子',
          modiJobno: '罗晓彬'
        },
        {
          dkId: '4',
          userName: '张三3',
          telNum: '1222929929',
          currentAddress: '上海市',
          monthIncome: '1000元',
          contactQq: '1000元',
          crtTime: '2016-06-6',
          status: '11102',
          reserveOne: '0',
          remark: '这个是个穷小子',
          modiJobno: '罗晓彬'
        },
        {
          dkId: '5',
          userName: '张三3',
          telNum: '1222929929',
          currentAddress: '上海市',
          monthIncome: '1000元',
          contactQq: '1000元',
          crtTime: '2016-06-6',
          status: '11102',
          reserveOne: '0',
          remark: '这个是个穷小子',
          modiJobno: '罗晓彬'
        }
      ],
      isLoading: false,
      pageNum: 1,
      pageSize: 10,
      totalData: 100
    }
  },
  methods: {
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
