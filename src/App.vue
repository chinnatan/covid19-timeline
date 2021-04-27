<template>
  <Menu></Menu>
  <router-view />
</template>

<script>
import { useI18n } from "vue-i18n";
import Menu from "./components/Menu";

export default {
  name: "App",
  components: {
    Menu: Menu,
  },
  setup() {
    const { t } = useI18n({
      inheritLocale: true,
      useScope: "local",
    });

    document.title = t("title");

    return { t };
  },
};
</script>

<style>
body {
  padding-top: 5rem;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
