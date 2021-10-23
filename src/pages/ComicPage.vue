<template>
    <Navbar />
    <Comic :dataComic="data" :loading="loading" class="mt-4"/>
    <Calification />
</template>

<script>
import { ref } from "vue";

import Comic from "@/components/Comic";
import Calification from "@/components/Calification";
import Navbar from "@/components/Navbar";

import comicApi from "@/api/comicApi";

export default{
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
};
</script>
