<template>
    <q-page>
      <div v-for="item in items" :key="item.id">
        {{ item.name }}
      </div>
    </q-page>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import feathersClient from 'boot/feathers'
  
  // Define items ref before using it
  const items = ref([])  // This line was missing!
  
  onMounted(async () => {
    console.log('Component mounted')
    try {
      const result = await feathersClient.service('playing').find()
      console.log('Data:', result)
      items.value = result.data
    } catch (error) {
      console.error('Error:', error)
    }
  })
  </script>
  
  