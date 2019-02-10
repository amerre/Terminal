<template>
  <div>
    <p v-for="lines in display" v-bind:key="lines">{{ lines }}</p>
    <span class="input">
      <span id="inputSign">></span>
      <input type="text" v-model="getInput" @keydown.enter="submit" autofocus>
    </span>
  </div>
</template>

<script>
export default {
  computed: {
    getInput: {
      get() {
        return this.$store.state.input;
      },
      set(value) {
        this.$store.commit("INPUT_COMMIT", value);
      }
    }
  },
  data() {
    return {
      display: [""]
    };
  },
  methods: {
    submit() {
      this.display.push(this.getInput);
      this.getInput = "";
    }
  }
};
</script>