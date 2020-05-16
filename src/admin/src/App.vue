<template lang="pug">
  .admin
    .header
      app-header
    .tabs
      tabs
    .content
      router-view
</template>

<script>
  import header from '../src/assets/components/header';
  import tabs from '../src/assets/components/tabs';
  import about from '../src/assets/components/about';

  export default {
    components: {
      appHeader: header,
      tabs, about
    }
}
</script>

<style lang="scss">
  .content {
    background: url('~img/bg_sky.jpg') center center / cover no-repeat;
  }
</style>
