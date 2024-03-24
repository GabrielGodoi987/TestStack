<template>
  <q-layout view="hHr LpR lFf">
    <q-header bordered reveal>
      <q-toolbar>
        <q-tabs v-for="(i, index) in routes" :key="index">
          <q-route-tab :label="i.nome" :to="i.to" :class="i.color" />
        </q-tabs>
        <q-space />
        <q-btn flat rounded color="secondary" icon="qr_code_scanner" />
      </q-toolbar>
    </q-header>

    <!-- container principal com todos os componentes -->
    <q-page-container class="q-gutter-y-lg items-center q-pa-md q-mt-sm">
      <!-- exemplo da parte superior do menu -->
      <div>
        <div class="text-subtitle text-weight-bolder">
          Próxim de res. Franciscano...
        </div>
      </div>
      <div>
        <q-input
          standout="bg-accent"
          v-model="search"
          type="text"
          label="Busque por item ou loja"
        >
          <template #append>
            <q-icon name="search" />
          </template>
        </q-input>
      </div>
      <CategoryComponent />
    </q-page-container>

    <!-- rodapé com o menu de navegação do projeto -->
    <q-footer reveal bordered>
      <q-toolbar class="row justify-evenly bg-white text-black">
        <q-tabs v-for="(i, index) in pages" :key="index">
          <q-route-tab :label="i.name" :icon="i.icon" :to="i.to" size="50px" />
        </q-tabs>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>
<script setup lang="ts">
import { ref } from 'vue';

// import { Categorias } from '../Models/categorias';
import { Pages } from '../Models/Pages';
import { Routes } from '../Models/Routes';

import CategoryComponent from '../components/CategoryComponent.vue';

const search = ref('');

const pages: Pages[] = [
  {
    name: 'Inicío',
    icon: 'home',
    to: '/home',
  },
  {
    name: 'Busca',
    icon: 'search',
    to: '/search',
  },
  {
    name: 'Pedidos',
    icon: 'list',
    to: '/pedidos',
  },
  {
    name: 'Perfil',
    icon: 'person',
    to: '/profile',
  },
];

const routes: Routes[] = [
  {
    nome: 'Entrega',
    to: '/entregas',
    color: 'text-secondary',
  },
  {
    nome: 'Retirada',
    to: '/retirada',
    color: 'text-grey',
  },
];

// const carousel: Categorias[] = [
//   {
//     id: 1,
//     img: '',
//     title: 'Bebidas',
//   },
//   {
//     id: 2,
//     img: '',
//     title: 'Café & Padaria',
//   },
//   {
//     id: 3,
//     img: '',
//     title: 'Doces',
//   },
//   {
//     id: 4,
//     img: '',
//     title: 'Promoções',
//   },
// ];
</script>
