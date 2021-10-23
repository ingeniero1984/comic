<template>
  <div
    class="spinner-border"
    style="width: 3rem; height: 3rem"
    role="status"
    v-if="loading"
  >
  </div>
  <div v-else>
    <h3>{{ dataComic.safe_title }}</h3>
    <br />
    <img :src="dataComic.img" alt="" />
  </div>
</template>

<script>

export default {
  name: "Comic",
  props: {
    dataComic: {
      type: Object,
      required: false
    },
    loading: {
      type: Boolean,
      required: false
    }
  }
};
</script>
