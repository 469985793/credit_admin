<template>
  <div class="v_dashboard_container">
    控制面板
  </div>
</template>

<script>
export default {
  name: 'VDashbord',
  created() {
    this.httpService.get('/api/userinfo', (res) => {
    });
  }
}
</script>

<style lang="scss">

</style>