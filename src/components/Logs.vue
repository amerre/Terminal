<template>
  <div>
    <p style="color:white; textAlign:center; margin:40px;">This site isn't finished!</p>
    <span style="color:purple; display:inline;">root - {"files":[
      <p
        style="color:purple; display:inline;"
        v-for="(file,index) in this.$store.state.files"
        v-bind:key="index"
      >"{{ file }}",</p>]
    </span>
    <p
      style="color:purple;"
      v-for="(dir,index) in this.$store.state.folders"
      v-bind:key="index"
    >{{ index }} - {{ dir }}</p>
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