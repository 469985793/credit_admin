<template>
  <div class="v_dashboard_container">
    <el-row class="panel-group" :gutter="40">
      <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
        <div class='card-panel'>
          <div class="card-panel-icon-wrapper icon-people">
            <span class="el-icon-warning"></span>
          </div>
          <div class="card-panel-description">
            <div class="card-panel-text">放款金额</div>
            <div class="card-panel-num">1233</div>
          </div>
        </div>
      </el-col>
      <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
        <div class='card-panel'>
          <div class="card-panel-icon-wrapper icon-people">
            <span class="el-icon-warning"></span>
          </div>
          <div class="card-panel-description">
            <div class="card-panel-text">结清金额</div>
            <div class="card-panel-num">1233</div>
          </div>
        </div>
      </el-col>
      <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
        <div class='card-panel'>
          <div class="card-panel-icon-wrapper icon-people">
            <span class="el-icon-warning"></span>
          </div>
          <div class="card-panel-description">
            <div class="card-panel-text">逾期金额</div>
            <div class="card-panel-num">1233</div>
          </div>
        </div>
      </el-col>
      <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
        <div class='card-panel'>
          <div class="card-panel-icon-wrapper icon-people">
            <span class="el-icon-warning"></span>
          </div>
          <div class="card-panel-description">
            <div class="card-panel-text">逾期率</div>
            <div class="card-panel-num">1233</div>
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
      }
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
.panel-group {
  margin: 18px -12px 0 !important;
  .card-panel-col{
    margin-bottom: 32px;
  }
  .card-panel {
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
      .card-panel-icon-wrapper {
        color: #fff;
      }
      .icon-people {
         background: #40c9c6;
      }
      .icon-message {
        background: #36a3f7;
      }
      .icon-money {
        background: #f4516c;
      }
      .icon-shoppingCard {
        background: #34bfa3
      }
    }
    .icon-people {
      color: #40c9c6;
    }
    .icon-message {
      color: #36a3f7;
    }
    .icon-money {
      color: #f4516c;
    }
    .icon-shoppingCard {
      color: #34bfa3
    }
    .card-panel-icon-wrapper {
      float: left;
      margin: 14px 0 0 14px;
      padding: 16px;
      transition: all 0.38s ease-out;
      border-radius: 6px;
    }
    .card-panel-icon {
      float: left;
      font-size: 48px;
    }
    .card-panel-description {
      float: right;
      font-weight: bold;
      margin: 26px;
      margin-left: 0px;
      .card-panel-text {
        line-height: 18px;
        color: rgba(0, 0, 0, 0.45);
        font-size: 16px;
        margin-bottom: 12px;
      }
      .card-panel-num {
        font-size: 20px;
      }
    }
  }
}
</style>