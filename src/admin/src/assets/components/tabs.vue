<template lang="pug">
  .tabs
    ul.list
      li.item(v-for="tab in tabs")
        router-link(
          :to="tab.href"
        ).link {{tab.name}}
</template>

<script>
export default {
  data() {
    return {
      tabs: [
        {
          name: "Таб 1",
          href: "/"
        },
        {
          name: "Таб 2",
          href: "/pages/20"
        }
      ]
    }
  }
}
</script>

<style lang="scss" src="../../styles/components/tabs.scss" scoped></style>