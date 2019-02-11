<template>
  <div>
    <Logs/>
    <span class="input">>
      <p>{{ getCurrentPath }}</p>
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
    },
    // Get what displayed on the logs
    getCurrentPath: {
      get() {
        return this.$store.state.currentPath;
      },
      set(value) {
        this.$store.commit("CURRENTPATH_COMMIT", value);
      }
    }
  },
  methods: {
    // When the user is pressing enter to submit
    submit() {
      let vm = this;
      let directories = this.$store.state.files;

      Object.keys(directories).forEach(function(element) {
        if (vm.getInput === "cd " + element) {
          console.log(`You typed cd ${element}`);
        } else if (vm.getInput === "cd /") {
          console.log(`You typed cd /`);
        }
      });

      this.getInput = "";
    }
  }
};
</script>