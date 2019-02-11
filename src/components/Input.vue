<template>
  <div>
    <p
      style="color:purple; lineHeight:28px;"
      v-for="(dir,index) in this.$store.state"
      v-bind:key="index"
    >
      {{ index }} - {{ dir }}
      <br>
      <br>
    </p>
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
    submit() {
      let vm = this;
      let directories = this.$store.state.folders;

      // Navigation
      Object.keys(directories).forEach(function(element) {
        switch (vm.getInput) {
          case "cd /":
            vm.getCurrentPath = "";
            break;
          case "cd ..":
          case "cd":
            vm.getCurrentPath = "";
            break;
          case "cd " + element:
            vm.getCurrentPath = `${element}`;
            break;
        }
      });

      // Creation d'un dossier
      if (vm.getInput.startsWith("mkdir ")) {
        let toCreate = vm.getInput.replace("mkdir ", "");
        if (vm.getCurrentPath != "") {
          directories[vm.getCurrentPath].folders.push(toCreate);
        } else {
          directories[toCreate] = {
            files: [],
            folders: []
          };
        }
      }

      // Creation d'un fichier
      if (vm.getInput.startsWith("touch ")) {
        let toCreate = vm.getInput.replace("touch ", "");
        if (vm.getCurrentPath != "") {
          directories[vm.getCurrentPath].files.push(toCreate);
        } else {
          this.$store.state.files.push(toCreate);
        }
      }
      this.getInput = "";
    }
  }
};
</script>