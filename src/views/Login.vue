<template>
  <div class="bg">
    <div class="login-card">
      <h1>云音乐登录</h1>
      <el-input
        placeholder="请输入账号"
        class="login-input"
        v-model="mobileInput"
        style="margin-top:-1%"
        clearable
      ></el-input>
      <el-input
        placeholder="请输入密码"
        class="login-input"
        v-model="passwordInput"
        show-password
      ></el-input>
      <md-switch
        v-model="value1"
        class="cc-mtop"
        style="margin-left:-35%"
      >记住密码
      </md-switch>
      <md-switch
        v-model="value2"
        class="cc-mtop"
        style="margin-left:-35%"
      >自动登录
      </md-switch>
      <div class="cc-df cc-mtop">
        <md-button
          type="primary"
          plain
          class="btn-login"
          @click="submit()"
        >登录</md-button>
        <md-button
          type="primary"
          plain
          class="btn-login address"
          @click="clear"
        >重置</md-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      mobileInput: '',
      passwordInput: '',
      value1: true,
      value2: true
    }
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
    openSimpleDialog() {
      this.openSimple = true
    },
    closeSimpleDialog() {
      this.openSimple = false
    },
    submit() {
      //模拟后端接口数据
      let user = {
        userId: '15370000688',
        username: 'yjy',
        userRole: 'Admin',
        avatar:
          'https://public-cdn-oss.mosoteach.cn/avatar/2019/E1/3b812803773b185adc777d7f75b90dd8.png?v=1582291633&x-oss-process=style/s200x200'
      }
      this.menuList = [
        { title: 'Dashboard', icon: 'mdi-view-dashboard', url: '/dashboard', subMenus: [] },
        {
          title: '音乐管理',
          icon: 'mdi-music',
          url: '',
          subMenus: [
            {
              title: '歌单管理',
              icon: 'mdi-domain',
              url: '/music-list',
              permissions: []
            },
            {
              title: '歌曲管理',
              icon: 'mdi-text',
              url: '/music',
              permissions: ['music:add', 'music:edit', 'music:delete']
            }
          ]
        },
        { title: 'About', icon: 'mdi-help-box', url: '/about', subMenus: [] }
      ]
      localStorage.setItem('token', 'EcIHTAWoGrmMVvTu2LPvuL-siq6hAfieVeehl-HTe_M')
      localStorage.setItem('user', JSON.stringify(user))
      localStorage.setItem('menuList', JSON.stringify(this.menuList))
      this.$store.commit('setToken', 'EcIHTAWoGrmMVvTu2LPvuL-siq6hAfieVeehl-HTe_M')
      this.$store.commit('setUser', user)
      this.$store.commit('setMenuList', this.menuList)
      this.$router.push('/')
    },
    clear() {
      this.$refs.form.clear()
      this.validateForm = {
        username: '',
        password: '',
        isAgree: false
      }
    }
  },
  computed: {}
}
</script>

<style scoped lang="scss">
.bg {
  background-color: rgb(178, 224, 222);
  opacity: 0.8;
  height: 100vh;
  display: flex;
  justify-content: center;
}
.login-card {
  background-color: rgb(121, 201, 199);
  width: 30%;
  height: 60%;
  margin-top: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 15px;
}
.login-input {
  width: 70%;
  margin-top: 5.5%;
}
.btn-login {
  width: 100px;
  height: 40px;
}
.address {
  margin-left: 100px;
}
</style>
