<template>
  <q-icon-picker
    v-model="value"
    icon-set="material-icons"
    :pagination.sync="pagination"
    style="height: 400px;"
  >
    <template #icon="name">
      <q-btn
        :label="name"
        :icon="name"
        no-caps
        align="left"
        class="q-ma-xs full-width"
      />
    </template>
  </q-icon-picker>
</template>

<script>
export default {
  data () {
    return {
      value: '',
      pagination: {
        itemsPerPage: 8,
        page: 0
      }
    }
  }
}
</script>
