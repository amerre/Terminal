<template>
  <div>
    <Logs/>
    <span class="input">
      >
      <input type="text" v-model="getInput" @keydown.enter="submit" autofocus>
    </span>
  </div>
</template>

<script>
import Logs from "./Logs";

export default {
  components: {
    Logs
  },
  computed: {
    // Get what's typed
    getInput: {
      get() {
        return this.$store.state.input;
      },
      set(value) {
        this.$store.commit("INPUT_COMMIT", value);
      }
    },
    // Get what displayed on the logs
    getLogs: {
      get() {
        return this.$store.state.logs;
      },
      set(value) {
        this.$store.commit("LOGS_COMMIT", value);
      }
    }
  },
  methods: {
    // When the user is pressing enter to submit
    submit() {
      switch (this.getInput) {
        case "help":
          this.getLogs.push("Available commands: 'help', 'ls'.");
          break;
        case "ls":
          this.getLogs.push(Object.keys(this.$store.state.files));
          break;
        default:
          this.getLogs.push(this.getInput);
          break;
      }
      this.getInput = "";
    }
  }
};
</script>