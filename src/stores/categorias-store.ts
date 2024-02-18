import { defineStore } from 'pinia';
import { Notify } from 'quasar';
import { Categorias } from 'src/Models/categorias';
import { api } from 'src/boot/axios';

export const useCategorias = defineStore('categorias-store', () => {
  const categorias: Categorias[] = [];

  function FindAll() {
    api
      .get('http://localhost:3000/categorias')
      .then((res) => {
        const data = res.data;
        categorias.push(data);
        console.log(data);
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
