import { defineStore } from 'pinia';
import { Notify } from 'quasar';
import { Categorias } from 'src/Models/categorias';
import { api } from 'src/boot/axios';
import { ref } from 'vue';

export const useCategorias = defineStore('categorias-store', () => {
  const categorias = ref<Categorias[]>([]);

  function FindAll() {
    api
      .get('http://localhost:3000/categorias')
      .then(async (res) => {
        const data = await res.data;
        categorias.value = data;
        console.log(data);
        Notify.create({
          message: 'as categoria ta funfando meu nobre',
          color: 'green',
        });
      })
      .catch((err) => {
        Notify.create({
          message: 'erro ao buscar as categorias',
          color: 'red',
        });
        console.log(err);
      });
  }

  return {
    categorias,
    FindAll,
  };
});
