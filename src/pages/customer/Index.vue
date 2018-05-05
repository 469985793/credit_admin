<template>
  <div class="v_customer_list_container">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'VCustomerList'
}
</script>

<style lang="scss">
.v_customer_list_container {
  height: calc(100% - 60px);
}
</style>






