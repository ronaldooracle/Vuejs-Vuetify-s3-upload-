<template>
 <v-form
    ref="form"
    lazy-validation
  >
   <v-file-input
    label="Foto"
    v-model="file"
    filled
    prepend-icon="mdi-camera"
  ></v-file-input>

    <v-btn
      color="blue"
      class="mr-4"
      @click="EnviarFoto"
    >
      Enviar Foto
    </v-btn>
 </v-form>
</template>

<script>
import { postupload } from '../../src/service/upload';

export default {
  data() {
    return {
      file: null,
    };
  },
  methods: {
    async EnviarFoto() {
      this.$notify('Upload Realizado com Sucesso');
      await postupload(this.file);
    },
  },
};
</script>

