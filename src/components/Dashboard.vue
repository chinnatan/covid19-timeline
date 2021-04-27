<template>
  <div class="dashboard">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-sm-12">
          <div class="row justify-content-center">
            <div class="col-md-4 col-sm-4">
              <div class="card text-white bg-success">
                <div class="card-header">{{ t('dashboard.today_is_cured') }}</div>
                <div class="card-body">
                  <p class="card-text">
                    {{ t('dashboard.today_is_cured') }}
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-4">
              <div class="card text-white bg-success">
                <div class="card-header">{{ t('dashboard.total_is_cured') }}</div>
                <div class="card-body">
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
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
import { useI18n } from 'vue-i18n'

export default {
  name: "Dashboard",
  setup() {
    const { t } = useI18n({
      inheritLocale: true,
      useScope: "local",
    });

    // Something todo ..

    return { t };
  },
  props: {
    msg: String,
  },
};
</script>
