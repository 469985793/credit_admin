<template>
  <div class="v_dashboard_container">
    <el-row class="row_wrapper" :gutter="40">
      <el-col class="card_box" :xs="12" :sm="12" :lg="6" v-for="(item, index) in cardList" :key="index">
        <div class='item'>
          <div class="icon_box">
            <span :class="item.icon"></span>
          </div>
          <div class="text_box">
            <div class="title">{{item.title}}</div>
            <div class="value">{{item.value}}</div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <VLineChart :chart-data="lineChartData"></VLineChart>
    </el-row>
  </div>
</template>

<script>
import VLineChart from '../../components/base/LineChart'

export default {
  name: 'VDashbord',
  data() {
    return {
      lineChartData: {
        loanData: [100, 120, 161, 134, 105, 160, 165],
        overdueData: [120, 82, 91, 154, 162, 140, 145]
      },
      cardList: [
        {
          icon: 'el-icon-message',
          title: '放款金额',
          value: '111'
        },
        {
          icon: 'el-icon-date',
          title: '结清金额',
          value: '111'
        },
        {
          icon: 'el-icon-printer',
          title: '逾期金额',
          value: '111'
        },
        {
          icon: 'el-icon-sold-out',
          title: '逾期率',
          value: '111'
        }
      ]
    }
  },
  components: { VLineChart },
  created() {
    this.httpService.get('/api/userinfo', (res) => {
    });
  }
}
</script>

<style lang="scss">
@import '../../assets/css/vars.scss';

.v_dashboard_container {
  .row_wrapper {
    margin: 25px -$ent-gap-x-small 0 !important;
    .card_box {
      margin-bottom: 32px;
    }
    .item {
      height: 108px;
      cursor: pointer;
      font-size: 12px;
      position: relative;
      overflow: hidden;
      color: #666;
      background: #fff;
      box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
      border-color: rgba(0, 0, 0, .05);
      &:hover {
        .icon_box {
          color: #fff;
          background: #40c9c6;
        }
      }

      .icon_box {
        color: #40c9c6;
        float: left;
        margin: $ent-gap-small 0 0 $ent-gap-small;
        padding: 16px;
        transition: all 0.5s ease-out;
        border-radius: 6px;
        font-size: 40px;
      }

      .text_box {
        float: right;
        font-weight: bold;
        margin: 26px;
        margin-left: 0px;
        .title {
          line-height: 18px;
          color: rgba(0, 0, 0, 0.45);
          font-size: 14px;
          margin-bottom: $ent-gap-small;
        }
        .value {
          font-size: 20px;
          color: $ent-color-danger;
        }
      }
    }
  }
}
</style>