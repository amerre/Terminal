<template>
  <div>
    <p v-for="(lines, index) in getLogs" :key="`lines-${index}`">{{ lines }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    getLogs: {
      get() {
        return this.$store.state.logs;
      }
    }
  }
};
</script>