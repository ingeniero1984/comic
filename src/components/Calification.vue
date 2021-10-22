<template>
  <br />
    <div class="container">
        <div class="card">
        <div class="card-body">
            <span class="fas fa-star fa-2x" @click="calificar()" style="cursor: pointer" id="1"></span>
            <span class="fas fa-star fa-2x" @click="calificar()" style="cursor: pointer" id="2"></span>
            <span class="fas fa-star fa-2x" @click="calificar()" style="cursor: pointer" id="3"></span>
            <span class="fas fa-star fa-2x" @click="calificar()" style="cursor: pointer" id="4"></span>
            <span class="fas fa-star fa-2x" @click="calificar()" style="cursor: pointer" id="5"></span>
            <br><br>
            <button class="btn btn-primary">Calificar</button>
        </div>
  </div>
    </div>
  <br />
</template> 

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Calification",
  setup () {
      const calificar = (e) => {
          console.log(e);
      }

      return { calificar }
  }
});
</script>
