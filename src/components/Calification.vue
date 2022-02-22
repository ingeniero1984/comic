<template>
  <div class="container my-4">
    <div class="card border-0">
      <div class="card-body">
        <button
          v-for="star in stars" :key="star.id"
          type="button"
          class="btn btn-default btn-xs"
          :style="{ color: star.color }"
          @click="calificar(star.id)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
            />
          </svg>
        </button>
          <div class="my-2">
            <button class="btn btn-primary me-md-3" @click="message">Calificar</button>
            <button class="btn btn-success" @click="newComic">Más Comic</button>
          </div>
      </div>
    </div>
  </div>
</template> 

<script>
import { ref } from "vue";

/**Utils */
import { showSwalError, showSwalSuccess, showSwalLoading } from '@/utils/sweetalert2';

export default {
  name: "Calification",
  setup() {
    const stars = ref([
      {
        id: 1,
        color: 'black',
        checked: false
      },
      {
        id: 2,
        color: 'black',
        checked: false
      },
      {
        id: 3,
        color: 'black',
        checked: false
      },
      {
        id: 4,
        color: 'black',
        checked: false
      },
      {
        id: 5,
        color: 'black',
        checked: false
      }
    ])

    const calificar = (id) => {
      for (let star of stars.value) {
        if (star.id <= id) {
          star.color = "orange";
          star.checked = true;
        } else {
          star.color = "black";
          star.checked = false;
        }
      }
    };

    const message = () => {
      showSwalLoading();
      const counter = stars.value.filter((item) => item.checked).length
      if (counter != 0) {
        showSwalSuccess(`Gracias por su calificación de ${counter} estrellas.`);
        setTimeout(() => {
          document.location.reload();
        }, 2000);
        
      } else {
        showSwalError(`Por favor califique un Comic`);
      }       
    };

    const newComic = () => {
      document.location.reload();
    }

    return { calificar, message, newComic, stars };
  },
};
</script>
<style>
.btn-check:focus + .btn, .btn:focus {
  box-shadow: none;
}
</style>
