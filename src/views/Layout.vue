<template>
  <div>
    <div class="index-header cc-shadow">
      <div class="cc-df-between">
        <div class="left"></div>
        <div class="right">

          <i
            class="el-icon-switch-button"
            @click="logout()"
          ></i>
        </div>
      </div>
      <div
        class="address"
        style="margin-top:-10px;"
      >
        <h1>控制面板</h1>
      </div>
    </div>
    <!-- <router-link :to="menu.url"> -->
    <div class="cc-df">
      <div class="person-card">
        <div class="person-card-header cc-df">
          <img
            :src="user.avatar"
            alt="头像"
          >
          <div class="cc-col cc-mleft">
            <p>昵称：{{user.username}}</p>
            <p class="cc-mtop">职位：{{user.userRole}}</p>
          </div>
        </div>
        <div class="person-card-body cc-col">
          <div
            v-for="(item,index) in items"
            :key="index"
          >
            <div
              @click="show(item.isshow,index)"
              class="cc-btn"
            >
              <MenuCard :item="item"></MenuCard>
            </div>
            <div
              v-for="(item1,index1) in item.subMenus"
              :key="index1"
              v-if="item.isshow"
            >
              <SubMenuCard :item1="item1"></SubMenuCard>
            </div>
          </div>
        </div>
      </div>
      <div>
        <router-view />
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Layout',
  data() {
    return {
      user: this.$store.state.user,
      items: this.$store.state.menuList1,
      icon: 'el-icon-delete'
    }
  },
  components: {
    MenuCard: require('../components/MenuCard.vue').default,
    SubMenuCard: require('../components/SubMenuCard').default
  },
  created() {},
  mounted() {},
  methods: {
    logout() {
      alert('logout')
      localStorage.removeItem('token')
      this.$store.commit('setUser', null)
      this.$router.push('/login')
    },
    show(isshow1, index) {
      this.items[index].isshow = !isshow1
    }
  },
  computed: {}
}
</script>

<style scoped lang="scss">
.index-header {
  background-color: rgb(178, 224, 222);
  opacity: 0.8;
  height: 15vh;
  padding-top: 10px;
}
.left i {
  font-size: 25px;
  margin-left: 15px;
}
.right i {
  font-size: 25px;
  margin-right: 15px;
}
.address {
  margin-left: 50px;
  margin-top: 60px;
}
.person-card {
  width: 400px;
  height: 600px;
  border-radius: 10px;
  background-image: url('https://blog-student.oss-cn-beijing.aliyuncs.com/Snipaste_2020-04-20_20-50-21.png');
  margin-left: 100px;
  margin-top: 30px;
}
.person-card-header {
  margin-left: 15px;
  margin-top: 25px;
}
.person-card-header img {
  border-radius: 50%;
  width: 70px;
  height: 70px;
  margin-top: -5px;
}
</style>
