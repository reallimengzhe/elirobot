<template>
  <div class="navbar">
    <hamburger :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" />

    <breadcrumb class="breadcrumb-container" />

    <div class="right-menu">
      <el-dropdown class="avatar-container" trigger="click">
        <div class="el-dropdown-link">
          <img src="../../assets/avatar.png" class="avatar__img">
          <span class="font-size--min font-color--main"> {{ name }}</span>
        </div>
        <!-- <div @click="logout">退出登录</div> -->
        <el-dropdown-menu slot="dropdown" class="user-dropdown">
          <el-dropdown-item divided>
            <span style="display:block;width: 54px;" @click="editPassword">修改密码</span>
          </el-dropdown-item>
          <el-dropdown-item divided>
            <span style="display:block;width: 54px;" @click="logout">退出登录</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>

    <edit-password-cm ref="EditPassword" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'
import EditPasswordCm from './EditPassword/index.vue'
export default {
  components: {
    Breadcrumb,
    Hamburger,
    EditPasswordCm
  },
  data() {
    return {
      name: this.$store.getters.name
    }
  },
  computed: {
    ...mapGetters(['sidebar'])
  },
  created() {},
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    editPassword() {
      this.$refs.EditPassword.show()
    },
    logout() {
      this.$confirm('确认退出吗, 是否继续?', '提示', {
        confirmButtonText: '退出',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$store.dispatch('user/logout', 1).then((res) => {
          // this.$router.push(`/login?redirect=${this.$route.fullPath}`)
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 48px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }

  .breadcrumb-container {
    float: left;
  }
  .el-dropdown-menu.el-popper.user-dropdown {
    width: 104px;
  }
  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;
    margin-right: 10px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
  .el-dropdown-link {
    display: flex;
    align-items: center;
    cursor: pointer;
    .avatar__img {
      width: 28px;
      height: 28px;
      border-radius: 50%;
      margin-right: 8px;
    }
  }
}
</style>
