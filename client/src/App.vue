<template>
  <div id="app">
    <h1>Hotel booking</h1>
    <bookings-form/>
    <bookings-grid :bookings = "bookings" />
  </div>
</template>

<script>
import bookingsForm from './components/bookingsForm';
import bookingsGrid from './components/bookingsGrid';
import {eventBus} from './main';

export default {
  name: 'app',
  data () {
    return {
      bookings: []
    }
  },
  components:{
    bookingsForm,
    bookingsGrid
  },
  mounted(){
    this.fetchData();
    eventBus.$on('booking-added', booking =>
    this.booking.push(booking))
  },
  methods:{
    fetchData(){
      fetch("http://localhost:3000/api/bookings")
      .then(res => res.json())
      .then(bookings => this.bookings = bookings);
    }
  }



}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
body{
  background: url('./assets/hotel.png') no-repeat;
}

h1, h2 {
  font-weight: normal;
  color:  #dded34;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
