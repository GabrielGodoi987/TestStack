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

      <!-- <q-virtual-scroll
        style="max-block-size: 170px"
        :items="carousel"
        separator
        virtual-scroll-horizontal
      >
        <template v-slot="{ item, index }">
          <q-item :key="index" dense>
            <q-card bordered style="inline-size: 150px">
              <q-card-section>
                <q-img :src="item.img" />
              </q-card-section>
              <q-card-section> {{ item.title }} </q-card-section>
            </q-card>
          </q-item>
        </template>
      </q-virtual-scroll> -->

      <category-component></category-component>
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

// import { Carousel } from '../Models/Carousel';
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

// const carousel: Carousel[] = [
//   {
//     id: 1,
//     img: 'data:image/jpeg;base64,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',
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
