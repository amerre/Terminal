<template>
  <div>
    <p>{{ this.$store.state.files }}</p>
    <Logs/>
    <span class="input">>
      <p>{{ getCurrentPath }}</p>
      <input type="text" v-model="getInput" @keydown.enter="submit" autofocus>
    </span>
  </div>
</template>

<script>
import Logs from "./Logs";
import { getCurves } from "crypto";

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

      // Navigation
      Object.keys(directories).forEach(function(element) {
        switch (vm.getInput) {
          case "cd /":
            vm.getCurrentPath = "/";
            break;
          case "cd ..":
          case "cd":
            vm.getCurrentPath = "/";
            break;
          case "cd " + element:
            vm.getCurrentPath = `${element}`;
            break;
        }
      });

      // Creation
      if (vm.getInput.startsWith("mkdir ")) {
        let toCreate = vm.getInput.replace("mkdir ", "");
        directories[toCreate] = [];
      } else if (vm.getInput.startsWith("touch ")) {
        let toCreate = vm.getInput.replace("touch ", "");
        directories[vm.getCurrentPath.replace("/", "")].push(toCreate);
      }

      this.getInput = "";
    }
  }
};
</script>