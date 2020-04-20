<template>
  <div>
    <h1>歌曲管理</h1>
    <span
      v-for="(item, index) in permissions"
      :key="index"
      class="gutter"
    >
      <mu-button
        color="teal"
        v-if="item === 'music:add'"
      >添加歌曲</mu-button>
      <mu-button
        color="success"
        v-if="item === 'music:edit'"
      >编辑歌曲</mu-button>
      <mu-button
        color="error"
        v-if="item === 'music:delete'"
      >删除歌曲</mu-button>
    </span>
  </div>
</template>

<script>
export default {
  name: 'Music',
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
