<template>
  <div class="dashboard">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-sm-12">
          <div class="card p-4 shadow-sm">
            <div class="row">
              <div class="col-md-12 col-sm-12">
                <div class="alert alert-primary" role="alert">
                  {{ t("dashboard.info_as_of") }} {{ info_as_of }}
                </div>
              </div>
            </div>
            <div class="row justify-content-center">
              <div class="col-md-4 col-sm-8">
                <div class="card text-white bg-success">
                  <div class="card-header">
                    {{ t("dashboard.today_is_cured") }}
                  </div>
                  <div class="card-body">
                    <p class="card-text">
                      {{ today_is_cured }} {{ t("common.unit.person") }}
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-4 col-sm-8">
                <div class="card text-white bg-success">
                  <div class="card-header">
                    {{ t("dashboard.total_is_cured") }}
                  </div>
                  <div class="card-body">
                    <p class="card-text">
                      {{ total_is_cured }} {{ t("common.unit.person") }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="row justify-content-center mt-2">
              <div class="col-md-3 col-sm-3">
                <div class="card text-white bg-warning">
                  <div class="card-header">
                    {{ t("dashboard.new_people_covid19_today") }}
                  </div>
                  <div class="card-body">
                    <p class="card-text">
                      {{ new_people_covid19_today }}
                      {{ t("common.unit.person") }}
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-3 col-sm-3">
                <div class="card text-white bg-info">
                  <div class="card-header">
                    {{ t("dashboard.total_new_people_covid19") }}
                  </div>
                  <div class="card-body">
                    <p class="card-text">
                      {{ total_new_people_covid19 }}
                      {{ t("common.unit.person") }}
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-3 col-sm-3">
                <div class="card text-white bg-danger">
                  <div class="card-header">
                    {{ t("dashboard.still_preserved") }}
                  </div>
                  <div class="card-body">
                    <p class="card-text">
                      {{ still_preserved }} {{ t("common.unit.person") }}
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-3 col-sm-3">
                <div class="card bg-light">
                  <div class="card-header">
                    {{ t("dashboard.dead") }}
                  </div>
                  <div class="card-body">
                    <p class="card-text">
                      {{ dead }} {{ t("common.unit.person") }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useI18n } from "vue-i18n";
import info_dashboard from "../information/dashboard";

export default {
  name: "Dashboard",
  setup() {
    const { t } = useI18n({
      inheritLocale: true,
      useScope: "local",
    });

    return { t };
  },
  data() {
    return {
      info_as_of: info_dashboard.info_as_of,
      today_is_cured: info_dashboard.today_is_cured,
      total_is_cured: info_dashboard.total_is_cured,
      new_people_covid19_today: info_dashboard.new_people_covid19_today,
      total_new_people_covid19: info_dashboard.total_new_people_covid19,
      still_preserved: info_dashboard.still_preserved,
      dead: info_dashboard.dead,
    };
  },
  props: {
    msg: String,
  },
};
</script>
