<template>
  <v-footer class="footers" padless>
    <v-col
      class="text-center"
      cols="12"
    >
      {{ new Date().getFullYear() }} — <strong>Park Chan Ik</strong>
    </v-col>
  </v-footer>
</template>

<script>
export default {
  name: 'Footers',
  data() {
    return {
    }
  },
};
</script>
<style scoped>
.footers{
  background-color: rgb(42, 187, 182)
}
</style>