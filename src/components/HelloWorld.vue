<template>
  <div class="hello">
    <ul>
      <li v-for="(show, idx) in shows" v-bind:key="idx">{{ show.title + " - " + show.network + " - " + show.numberOfSeasons + " - " + show.genres}}</li>
    </ul>
  </div>
</template>

<script>
import { db } from '../firebase';

export default {
  name: 'HelloWorld',
  data() {
    return {
      shows: []        // to start, the list is empty
    }
  },
  firestore() {           // adding this key/function
    return {
      shows: db.collection('shows')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

</style>
