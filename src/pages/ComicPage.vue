<template>
    <Comic />
</template>

<script>
import { defineComponent } from 'vue'

import Comic from '@/components/Comic'

export default defineComponent({
    name: 'ComicPage',
    components: {
        Comic
    }
})
</script>