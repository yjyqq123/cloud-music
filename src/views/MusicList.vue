<template>
  <div>
    <h1>歌单管理</h1>
  </div>
</template>

<script>
export default {
  name: 'MusicList',
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
