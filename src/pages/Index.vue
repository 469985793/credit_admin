<template>
  <div class="v_index_container">
    <div class="head_box" :class="{hide_side_bar: !isShowSideBar}">
      <el-menu mode="horizontal">
        <div class="left_menu">
          <VHamburger class="hamburger-container" @click.native="toggleSideBar" :isActive="isShowSideBar"></VHamburger>
          <VBreadcrumb></VBreadcrumb>
        </div>
        <div class="right_menu">
          <el-dropdown class="avatar_container" trigger="click">
            <div class="avatar_wrapper">
              <img class="user_avatar" src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80">
              <i class="el-icon-caret-bottom"></i>
            </div>
            <el-dropdown-menu class="user-dropdown" slot="dropdown">
              <el-dropdown-item @click.native="doLogout">
                <span>退出</span>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-menu>
    </div>
    <aside class="aside_nav" :class="{hide_side_bar: !isShowSideBar}">
      <VSideBar :isCollapse="!isShowSideBar"></VSideBar>
    </aside>
    <div class="content_box" :class="{hide_side_bar: !isShowSideBar}">
      <VTagView></VTagView>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import VHamburger from '../components/base/hamburger'
import VBreadcrumb from '../components/base/breadcrumb'
import VSideBar from '../components/layout/sidebar/Index'
import VTagView from '../components/base/tagView/Index'

export default {
  name: 'VIndex',
  data() {
    return {
      isShowSideBar: true,
      unreadCount: '0'
    }
  },
  components: {
    VHamburger, VBreadcrumb, VSideBar, VTagView
  },
  methods: {
    toggleSideBar() {
      this.isShowSideBar = !this.isShowSideBar;
    },
    doLogout() {
      this.storage.cookie.delete('token');
      this.$router.push({path: '/login'});
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
      width: calc(100% - 36px);
      left: 36px;
    }
    .el-menu {
      height: 100%;
      .left_menu {
        height: 100%;
        float: left;
        padding: 0 10px;
        display: flex;
        align-items: center;
        outline: none;
      }
      .right_menu {
        float: right;
        right: 0;
        height: 100%;
        display: flex;
        align-items: center;
        padding-right: $ent-gap-xxx-large;
        outline: none;
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
    transition: all 0.28s ease-in-out;
    &.hide_side_bar {
      width: 36px;
      .el-tooltip {
        padding: 0 8px !important;
      }
      .el-submenu {
        &>.el-submenu__title {
          padding-left: 8px !important;
        }
      }
    }
    .el-menu {
      height: 100%;
      width: 100%;
      border: none;
    }
    .horizontal-collapse-transition {
      transition: 0s width ease-in-out, 0s padding-left ease-in-out, 0s padding-right ease-in-out;
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
      left: 36px;
    }
  }
}
</style>






