<template lang="">
    <div>
        <p v-if="show">{{message}}</p>
        <button class="btn btn-info" v-on:click="toggleInfo" v-html="show ? 'Hide' : ' Show'">
    </button>
    </div>
</template>
<script>
export default {
    data() {
    return {
      show: false,
      message: "Hé Lu"
    }
  },
  methods: {
    toggleInfo() {
      this.show = !this.show
    }
  }
    }

</script>
<style lang="">
    
</style>