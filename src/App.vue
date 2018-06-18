<template>
  <div>
    <Sandra :store="store" />
    <button @click="increment">increment</button>
    <button @click="otherAction">other action</button>
  </div>
</template>

<script>
import store from './redux/store.js'
import Counter from './components/Counter.vue'
import connect from './connect.js'

const mapStateToProps = (state) => ({ number: state })
const connectedCounter = connect(mapStateToProps)(Counter)

export default {
  name: '',
  components: { 
    'Sandra': connectedCounter
  },
  data: function () { return {
    store: store,
    number: store.getState(),
  }},
  methods: {
    increment: function () {
      console.log("calling increment");
      store.dispatch({
        type: 'increment'
      })
    },
    otherAction: function () {
      store.dispatch({
        type: 'other'
      })
    }
  },
}
</script>

<style scoped>
</style>