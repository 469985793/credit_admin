<template>
  <div class="v_index_container">
    <div class="head_box">
      <el-menu mode="horizontal">
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
    <aside class="aside_nav">
      <el-menu
        :default-active="activeIndex"
        mode="vertical"
        class="el-menu-demo"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
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
            <el-menu-item index="4-1" @click="goPage('formList')">待审核</el-menu-item>
            <el-menu-item index="4-2" @click="goPage('formList')">审核中</el-menu-item>
            <el-menu-item index="4-3" @click="goPage('formList')">拒绝受理</el-menu-item>
            <el-menu-item index="4-4" @click="goPage('formList')">已放款</el-menu-item>
            <el-menu-item index="4-5" @click="goPage('formList')">预期</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </aside>
    <div class="content_box">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: 'VIndex',
  data() {
    return {
      activeIndex: '1',
      unreadCount: '0'
    }
  },
  created() {
    this.getUnreadCount();
  },
  methods: {
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

    .el-menu {
      height: 100%;
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
    background: rgb(84, 92, 100);
    text-align: left;
    .el-menu {
      height: 100%;
      overflow: hidden;
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
  }
}
</style>






