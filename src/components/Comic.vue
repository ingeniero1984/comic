<template>
  <div
    class="spinner-border"
    style="width: 3rem; height: 3rem"
    role="status"
    v-if="loading"
  >
    <span class="visually-hidden">Cargando...</span>
  </div>
  <div v-else>
    <h3>{{ data.safe_title }}</h3>
    <br />
    <img :src="data.img" alt="" />
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

import comicApi from "@/api/comicApi";

export default defineComponent({
  name: "Comic",
  setup() {
    const data = ref({});
    const loading = ref(false);
    const getData = () => {
      loading.value = true;
      comicApi
        .get()
        .then((res) => (data.value = res.data))
        .finally(() => (loading.value = false));
    };
    getData();
    return { data, loading };
  },
});
</script>
