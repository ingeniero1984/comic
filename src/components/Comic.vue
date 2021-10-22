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
import { defineComponent } from "vue";

export default defineComponent({
  name: "Comic",
  props: {
    data: {
      type: Object,
      required: false
    }
  }
});
</script>
