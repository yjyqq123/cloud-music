<template>
  <div>
    <h2>个人中心</h2>
    <span
      v-for="(item, index) in permissions"
      :key="index"
      class="gutter"
    >
      <mu-button
        color="teal"
        v-if="item === 'menu:add'"
      >添加菜单</mu-button>
      <mu-button
        color="success"
        v-if="item === 'menu:edit'"
      >编辑菜单</mu-button>
      <mu-button
        color="error"
        v-if="item === 'menu:delete'"
      >删除菜单</mu-button>
    </span>
    <mu-card style="width: 100%; max-width: 375px; margin: 0 auto;">
      <mu-card-header
        title="享受生活"
        sub-title="充满乐趣"
      >
        <mu-avatar slot="avatar">
          <img src="../assets/images/1.png">
        </mu-avatar>
      </mu-card-header>
      <mu-card-media
        title="小帆船"
        sub-title=""
      >
        <img src="../assets/images/1.png">
      </mu-card-media>
      <mu-card-title
        title="郁杰原"
        sub-title="乐趣无限"
      ></mu-card-title>
      <mu-card-text>
        快来云音乐来享受音乐带来的快乐吧！
      </mu-card-text>
    </mu-card>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      permissions: this.$store.state.menuList1[2].subMenus[1].permissions
    }
  },
  components: {},
  created() {},
  mounted() {},
  methods: {},
  computed: {}
}
</script>

<style scoped lang="scss">
</style>
