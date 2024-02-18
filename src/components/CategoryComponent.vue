<template lang="">
  <q-virtual-scroll
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
  </q-virtual-scroll>
</template>
<script setup lang="ts"></script>
