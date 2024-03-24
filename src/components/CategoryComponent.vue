<template lang="">
  <div>
    <q-virtual-scroll
      style="max-block-size: 200px"
      :items="store.categorias"
      separator
      virtual-scroll-horizontal
    >
      <template v-slot="{ item, index }">
        <q-item :key="index" dense class="text-center text-grey">
          <q-card bordered style="inline-size: 150px">
            <q-card-section class="q-gutter-md">
              <q-img
                :src="item.img"
                style="block-size: 100px; inline-size: 100px"
              />
              <div class="text-subtitle">
                {{ item.categoria }}
              </div>
            </q-card-section>
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
