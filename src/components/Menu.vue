<template>
  <div id="nav">
    <nav
      class="navbar fixed-top navbar-expand-lg navbar-dark bg-primary shadow"
    >
      <a class="navbar-brand" href="#">{{ t("title") }}</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link" replace>{{
              t("menu.home")
            }}</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link" replace>{{
              t("menu.about")
            }}</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import { useI18n } from "vue-i18n";

export default {
  name: "Menu",
  setup() {
    const { t } = useI18n({
      inheritLocale: true,
      useScope: "local",
    });

    return { t };
  },
};
</script>
