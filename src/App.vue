<template>
  <div id="app">
    <BookingForm />
  </div>
</template>

<script>
import BookingForm from "./components/BookingForm";

export default {
  name: "App",
  components: {
    BookingForm,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  box-sizing: border-box;
  /* display: flex;
  align-items: center;
  justify-content: center; */
}
</style>
