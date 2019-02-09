<template>
  <div>
    <p v-for="lines in display" v-bind:key="lines">{{ lines }}</p>
    <span class="input">
      <span id="inputSign">></span>
      <input type="text" v-model="input" @keydown.enter="submit" autofocus>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      display: ["Hello Worlde"]
    };
  },
  methods: {
    submit() {
      this.display.push(this.input);
      this.input = "";
    }
  }
};
</script>