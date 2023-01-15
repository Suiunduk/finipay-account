<template>
  <div class="container">
    <header class="mt-5">
        <h3>Дашборд</h3>
    </header>
    <div class="mb-3">
      <EasyDataTable
          :headers="headers"
          :items="items"
          :empty-message="'Данные отсутствуют'"
          :rows-of-page-separator-message="'из'"
          :rows-per-page-message="'Показывать по'"
          alternating
          show-index
      ></EasyDataTable>
    </div>
  </div>
</template>

<script setup>
/* eslint-disable*/
import { ref } from "vue";
import 'vue3-easy-data-table/dist/style.css'

const headers = ref([
  { text: "ID", value: "id" },
  { text: "dateCreated", value: "dateCreated", sortable: true},
  { text: "currency", value: "currency", sortable: true},
  { text: "amount", value: "amount", sortable: true},
  { text: "description", value: "description", sortable: true},
  { text: "fullname", value: "fullname", sortable: true},
  { text: "number", value: "number", sortable: true},
  { text: "Статус", value: "status", sortable: true},
  { text: "language", value: "language", sortable: true},
]);

const items = ref([
  { id: '9146236', dateCreated: '13 Dec 2022 00:00:00', currency: 'USD', amount: '100', description: 'test payment', fullname: 'Linar Mikhailov', number: '050', status: '50', language: 'EN'},
  { id: '9146237', dateCreated: '14 Dec 2022 00:00:00', currency: 'EUR', amount: '70', description: 'test payment', fullname: 'Linar Mikhailov', number: '051', status: '50', language: 'EN'},
  { id: '9146348', dateCreated: '16 Dec 2022 00:00:00', currency: 'EUR', amount: '50', description: 'test payment', fullname: 'Linar Mikhailov', number: '057', status: '50', language: 'EN'},
]);

</script>
