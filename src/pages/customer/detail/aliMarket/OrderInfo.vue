<template>
  <div class="v_alimarket_orderinfo">
    <el-tag class="title_box">总记录数: {{data.total_size}}</el-tag>
    <el-table
      class="table_box"
      stripe
      :highlight-current-row="true"
      :data="data.tradedetails">
      <el-table-column
        width="60"
        label="序号"
        type="index">
      </el-table-column>
      <el-table-column
        label="交易id"
        prop="trade_id">
      </el-table-column>
      <el-table-column
        label="交易状态"
        prop="trade_status">
      </el-table-column>
      <el-table-column
        label="交易时间"
        prop="trade_createtime">
      </el-table-column>
      <el-table-column
        label="订单金额"
        prop="actual_fee">
      </el-table-column>
      <el-table-column
        label="卖家id"
        prop="seller_id">
      </el-table-column>
      <el-table-column
        label="卖家昵称"
        prop="seller_nick">
      </el-table-column>
      <el-table-column
        label="店铺名称"
        prop="seller_shopname">
      </el-table-column>
      <el-table-column
        label="交易状态中文"
        prop="trade_text">
      </el-table-column>
      <el-table-column
        label="操作">
        <template slot-scope="scope">
          <el-button @click.stop="doShowOrderModal(scope.$index)" type="primary" size="small">查看详情</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="商品详情" :visible.sync="isShowDialog">
      <el-table
        class="table_box"
        stripe
        :highlight-current-row="true"
        :data="orderInfoList">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form class="form_list_box" label-position="left" inline>
              <el-form-item label="交易id">
                <span>{{ props.row.trade_id }}</span>
              </el-form-item>
              <el-form-item label="商品id">
                <span>{{ props.row.item_id }}</span>
              </el-form-item>
              <el-form-item label="商品链接">
                <span>{{ props.row.item_url }}</span>
              </el-form-item>
              <el-form-item label="商品图片">
                <img :src="props.row.item_pic"/>
              </el-form-item>
              <el-form-item label="商品名称">
                <span>{{ props.row.item_name }}</span>
              </el-form-item>
              <el-form-item label="商品数量">
                <span>{{ props.row.quantity }}</span>
              </el-form-item>
              <el-form-item label="商品原价">
                <span>{{ props.row.original }}</span>
              </el-form-item>
              <el-form-item label="商品真实交易价格">
                <span>{{ props.row.real_total }}</span>
              </el-form-item>
              <el-form-item label="一级目录的id">
                <span>{{ props.row.cid_level1 }}</span>
              </el-form-item>
              <el-form-item label="二级目录的id">
                <span>{{ props.row.cid_level2 }}</span>
              </el-form-item>
              <el-form-item label="一级目录的名称">
                <span>{{ props.row.cname_level1 }}</span>
              </el-form-item>
              <el-form-item label="二级目录的名称">
                <span>{{ props.row.cname_level2 }}</span>
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
          label="交易id"
          prop="trade_id">
        </el-table-column>
        <el-table-column
          label="商品id"
          prop="item_id">
        </el-table-column>
        <el-table-column
          label="商品名称"
          prop="item_name">
        </el-table-column>
        <el-table-column
          label="商品原价"
          prop="original">
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
      orderInfoList: [],
      isShowDialog: false
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
    doShowOrderModal(index) {
      this.orderInfoList = this.data.tradedetails[index].sub_orders;
      this.isShowDialog = true;
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
}
</style>
