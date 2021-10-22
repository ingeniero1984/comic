<template>
    <Navbar />
    <Comic :data="data" />
    <Calification />
</template>

<script>
import { defineComponent, ref } from "vue";

import Comic from "@/components/Comic";
import Calification from "@/components/Calification";
import Navbar from "@/components/Navbar";

import comicApi from "@/api/comicApi";

export default defineComponent({
  name: "ComicPage",
  components: {
    Comic,
    Calification,
    Navbar
  },
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
