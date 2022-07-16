<template>
  <div id="main">
    <p>ログイン済み</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Index extends Vue {
  created(): void {
    const user = window.sessionStorage.user;
    if (!user) {
      this.$router.push("/login");
    }
  }
}
</script>

<style lang="scss" scoped>
#main {
  font-size: 30px;
}
</style>
