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
      let path = this.getCurrentPath;
      // --------------
      if (path === "/") {
        switch (this.getInput) {
          case "ls":
            this.getLogs.push(Object.keys(this.$store.state.files));
            break;
          case "cd dir1":
            this.getCurrentPath = "/dir1";
            break;
          case "cd dir2":
            this.getCurrentPath = "/dir2";
            break;
        }
        // --------------
      } else if (path === "/dir1") {
        switch (this.getInput) {
          case "ls":
            this.getLogs.push(this.$store.state.files.dir1);
            break;
          case "cd /":
          case "cd ..":
          case "cd":
            this.getCurrentPath = "/";
            break;
          case "cd dir2":
            this.getCurrentPath = "/dir2";
            break;
        }
        // --------------
      } else if (path === "/dir2") {
        switch (this.getInput) {
          case "ls":
            this.getLogs.push(this.$store.state.files.dir2);
            break;
          case "cd /":
          case "cd ..":
          case "cd":
            this.getCurrentPath = "/";
            break;
          case "cd dir1":
            this.getCurrentPath = "/dir1";
            break;
        }
      }
      this.getInput = "";
    }
  }
};
</script>