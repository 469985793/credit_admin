<template>
  <div class="v_alimarket_baseinfo">
    <el-tag class="title_box">基本信息</el-tag>
    <el-form class="form_list_box" label-position="left" inline>
      <el-form-item label="映射ID">
        <span>张三</span>
      </el-form-item>
      <el-form-item label="淘宝昵称">
        <span>133344232332</span>
      </el-form-item>
      <el-form-item label="真实姓名">
        <span>33</span>
      </el-form-item>
      <el-form-item label="电话号码">
        <span>2019-3-5</span>
      </el-form-item>
      <el-form-item label="姓名">
        <span>100</span>
      </el-form-item>
      <el-form-item label="绑定的邮箱">
        <span>100</span>
      </el-form-item>
      <el-form-item label="vip等级">
        <span>100</span>
      </el-form-item>
      <el-form-item label="成长值">
        <span>100</span>
      </el-form-item>
      <el-form-item label="绑定的微博账号">
        <span>100</span>
      </el-form-item>
      <el-form-item label="绑定的微博昵称">
        <span>100</span>
      </el-form-item>
      <el-form-item label="淘宝头像图片">
        <span>33</span>
      </el-form-item>
      <el-form-item label="绑定的支付宝账号">
        <span>2019-3-5</span>
      </el-form-item>
      <el-form-item label="天猫等级">
        <span>100</span>
      </el-form-item>
      <el-form-item label="天猫vip值">
        <span>100</span>
      </el-form-item>
      <el-form-item label="天猫信誉">
        <span>100</span>
      </el-form-item>
      <el-form-item label="最早一笔订单交易时间">
        <span>100</span>
      </el-form-item>
      <el-form-item label="用户在淘宝中的用户ID">
        <span>100</span>
      </el-form-item>
      <el-form-item label="淘气值">
        <span>100</span>
      </el-form-item>
      <el-form-item label="注册时间">
        <span>100</span>
      </el-form-item>
      <el-form-item label="是否实名认证">
        <span>100</span>
      </el-form-item>
    </el-form>
    <el-tag class="title_box">用户的淘宝对应支付宝资产</el-tag>
    <el-form class="form_list_box" label-position="left" inline>
      <el-form-item label="映射ID">
        <span>张三</span>
      </el-form-item>
      <el-form-item label="账户余额">
        <span>133344232332</span>
      </el-form-item>
      <el-form-item label="余额宝历史累计收益">
        <span>33</span>
      </el-form-item>
      <el-form-item label="余额宝金额">
        <span>2019-3-5</span>
      </el-form-item>
      <el-form-item label="花呗当前可用额度">
        <span>100</span>
      </el-form-item>
      <el-form-item label="花呗授信额度">
        <span>100</span>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// import { apiConfig } from '../../configs/api/apiConfig'

export default {
  name: 'VAliMarketBaseInfo',
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
.v_alimarket_baseinfo {
  .highlight {
    color: $ent-color-danger;
  }
  .form_list_box {
    font-size: 0;
    margin: 0 $ent-gap-base;
    width: calc(100% - 24px);
    label {
      font-size: $ent-font-size-small;
      width: 150px;
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
