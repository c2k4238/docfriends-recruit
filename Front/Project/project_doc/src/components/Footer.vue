<template>
  <div>
  <v-footer
    dark
    padless
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Park Chan Ik</strong>
      </v-card-text>
    </v-card>
  </v-footer>
  </div>
</template>
<script>
export default {
  name: 'footer',
  data() {
    return {
    }
  }
};
</script>