import { defineStore } from 'pinia';
import { Notify } from 'quasar';
import { Categorias } from 'src/Models/categorias';
import { api } from 'src/boot/axios';
import { ref } from 'vue';

export const useCategorias = defineStore('categorias-store', () => {
  const categorias = ref<Categorias[]>([]);

  function FindAll() {
    api
      .get('http://localhost:3000/lojas')
      .then(async (res) => {
        const returnCategory: any[] = [];
        const data = await res.data;

        // loop no array que vamos receber do data
        data.map((element: any) => {
          returnCategory.push({
            id: element.id,
            categoria: element.categoria,
            img: element.img,
          });
        });
        categorias.value = returnCategory;
        console.log(categorias.value);
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
