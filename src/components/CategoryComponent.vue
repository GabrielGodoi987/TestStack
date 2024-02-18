<template lang="">
  <div>
    <q-virtual-scroll
      style="max-block-size: 170px"
      :items="store.categorias"
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
    </q-virtual-scroll>
  </div>
</template>
<script setup lang="ts">
import { useCategorias } from 'src/stores/categorias-store';
import { onMounted } from 'vue';

const store = useCategorias();

onMounted(() => {
  store.FindAll();
});
</script>
