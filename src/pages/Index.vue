<template>
  <div class="v_index_container">
    <div class="head_box" :class="{hide_side_bar: !isShowSideBar}">
      <el-menu mode="horizontal">
        <div class="left_menu">
          <VHamburger class="hamburger-container" @click.native="toggleSideBar" :isActive="isShowSideBar"></VHamburger>
          <VBreadcrumb></VBreadcrumb>
        </div>
        <div class="right_menu">
          <el-badge :value="unreadCount" @click.native="goPage('unreadList')">
            <el-button type="text" size="small">未读</el-button>
          </el-badge>
          <el-dropdown class="avatar_container" trigger="click">
            <div class="avatar_wrapper">
              <img class="user_avatar" src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80">
              <i class="el-icon-caret-bottom"></i>
            </div>
            <el-dropdown-menu class="user-dropdown" slot="dropdown">
              <router-link class="inlineBlock" to="/">
                <el-dropdown-item>
                  Home
                </el-dropdown-item>
              </router-link>
              <el-dropdown-item divided>
                <span>LogOut</span>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-menu>
    </div>
    <aside class="aside_nav" :class="{hide_side_bar: !isShowSideBar}">
      <VScrollBar>
        <el-menu
          :collapse-transition="false"
          :default-active="activeIndex"
          mode="vertical"
          class="el-menu-demo"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          :collapse="!isShowSideBar">
          <el-menu-item index="1" @click="goPage('formList')">
            <i class="el-icon-menu"></i>
            <span slot="title">控制面板</span>
          </el-menu-item>
          <el-menu-item index="2" @click="goPage('formList')">
            <i class="el-icon-menu"></i>
            <span slot="title">权限管理</span>
          </el-menu-item>
          <el-menu-item index="3" @click="goPage('/customer')">
            <i class="el-icon-menu"></i>
            <span slot="title">客户中心</span>
          </el-menu-item>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">进度管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="4-1" @click="goPage('/process/waitVerify')">待审核</el-menu-item>
              <el-menu-item index="4-2" @click="goPage('/process/verify')">审核中</el-menu-item>
              <el-menu-item index="4-3" @click="goPage('/process/refuse')">拒绝受理</el-menu-item>
              <el-menu-item index="4-4" @click="goPage('/process/waitLoan')">待放款</el-menu-item>
              <el-menu-item index="4-5" @click="goPage('/process/loan')">已放款</el-menu-item>
              <el-menu-item index="4-6" @click="goPage('/process/overdue')">逾期</el-menu-item>
              <el-menu-item index="4-7" @click="goPage('/process/acquitt')">已结清</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </VScrollBar>
    </aside>
    <div class="content_box" :class="{hide_side_bar: !isShowSideBar}">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import VHamburger from '../components/base/hamburger'
import VBreadcrumb from '../components/base/breadcrumb'
import VScrollBar from '../components/base/scrollBar'

export default {
  name: 'VIndex',
  data() {
    return {
      isShowSideBar: true,
      activeIndex: '1',
      unreadCount: '0'
    }
  },
  components: {
    VHamburger, VBreadcrumb, VScrollBar
  },
  created() {
    this.getUnreadCount();
  },
  methods: {
    toggleSideBar() {
      this.isShowSideBar = !this.isShowSideBar;
    },
    getUnreadCount() {
      // this.httpService.get('apiConfig.server.unread', (res) => {
      //   if (res.data.code === 0) {
      //     this.unreadCount = res.data.count.toString();
      //   } else {
      //     this.$message({
      //       message: res.data.msg,
      //       duration: 1000,
      //       type: 'error'
      //     });
      //   }
      // });
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    goPage(page) {
      this.$router.push({path: page});
    }
  }
}
</script>

<style lang="scss">
@import '../assets/css/vars.scss';

.v_index_container {
  .head_box {
    position: fixed;
    width: calc(100% - 200px);
    height: 60px;
    top: 0;
    left: 200px;
    z-index: 22;
    transition: all 0.3s ease-in-out;
    &.hide_side_bar {
      width: calc(100% - 65px);
      left: 65px;
    }
    .el-menu {
      height: 100%;
      .left_menu {
        line-height: 50px;
        height: 50px;
        float: left;
        padding: 0 10px;
        display: flex;
        align-items: center;
        & > span {
          font-size: 20px;
          color: rgba(0, 0, 0, 0.4);
        }
      }
      .right_menu {
        float: right;
        right: 0;
        height: 100%;
        display: flex;
        align-items: flex-end;
        padding-right: $ent-gap-xxx-large;
        & > div {
          margin-left: $ent-gap-large;
        }
        .avatar_container {
          .avatar_wrapper {
            cursor: pointer;
            margin-top: 5px;
            position: relative;
            .user_avatar {
              width: 40px;
              height: 40px;
              border-radius: 10px;
            }
            .el-icon-caret-bottom {
              position: absolute;
              right: -20px;
              top: 25px;
              font-size: 12px;
            }
          }
        }
      }
    }
  }
  .aside_nav {
    position: fixed;
    width: 200px;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 111;
    text-align: left;
    transition: all 0.5s ease;
    &.hide_side_bar {
      width: 65px;
    }
    .el-menu {
      height: 100%;
      width: 100%;
      border: none;
    }
  }
  .content_box {
    padding: $ent-gap-small;
    text-align: left;
    position: absolute;
    top: 60px;
    left: 200px;
    right: 0;
    bottom: 0;
    width: auto;
    transition: all 0.3s ease-in-out;
    &.hide_side_bar {
      left: 65px;
    }
  }
}
</style>






