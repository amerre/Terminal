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
      display: ["Type 'help' if you're lost, and 'demo' to see something cool!"]
    };
  },
  methods: {
    submit() {
      switch (this.getInput) {
        case "help":
          this.display.push("What can I do for you?");
          break;
        case "demo":
          this.display.push("Hey, this is a demo!");
          break;
        default:
          this.display.push(this.getInput);
          break;
      }
      this.getInput = "";
    }
  }
};
</script>