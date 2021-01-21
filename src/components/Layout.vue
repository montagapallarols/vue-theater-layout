<template>
  <div class="layout">
    <div class="main-hall">
      <p>Main hall</p>
      <b-container class="rows">
        <b-row class="row-1 justify-content-md-center">
          <p>Rank 1</p>
          <b-col col md="2" class="seat">1</b-col>
          <b-col col md="2" class="seat">3</b-col>
          <b-col col md="2" class="seat">4</b-col>
          <b-col col md="2" class="seat">2</b-col>
        </b-row>
        <b-row class="row-2">
          <p>Rank 1</p>
          <b-col class="seat">1</b-col>
          <b-col class="seat">3</b-col>
          <b-col class="seat">5</b-col>
          <b-col class="seat">6</b-col>
          <b-col class="seat">4</b-col>
          <b-col class="seat">2</b-col>
        </b-row>
        <b-row class="row-3">
          <p>Rank 2</p>
          <b-col class="seat">1</b-col>
          <b-col class="seat">3</b-col>
          <b-col class="seat">5</b-col>
          <b-col class="seat">6</b-col>
          <b-col class="seat">4</b-col>
          <b-col class="seat">2</b-col>
        </b-row>
        <b-row class="row-4">
          <p>Rank 2</p>
          <b-col class="seat">1</b-col>
          <b-col class="seat">3</b-col>
          <b-col class="seat">5</b-col>
          <b-col class="seat">6</b-col>
          <b-col class="seat">4</b-col>
          <b-col class="seat">2</b-col>
        </b-row>
        <b-row class="row-5">
          <p>Rank 3</p>
          <b-col class="seat">1</b-col>
          <b-col class="seat">3</b-col>
          <b-col class="seat">5</b-col>
          <b-col class="seat">6</b-col>
          <b-col class="seat">4</b-col>
          <b-col class="seat">2</b-col>
        </b-row>
        <b-row class="row-6">
          <p>Rank 3</p>
          <b-col class="seat">1</b-col>
          <b-col class="seat">3</b-col>
          <b-col class="seat">5</b-col>
          <b-col class="seat">6</b-col>
          <b-col class="seat">4</b-col>
          <b-col class="seat">2</b-col>
        </b-row>
        <b-row class="row-7">
          <p>Rank 4</p>
          <b-col class="seat">1</b-col>
          <b-col class="seat">3</b-col>
          <b-col class="seat">5</b-col>
          <b-col class="seat">6</b-col>
          <b-col class="seat">4</b-col>
          <b-col class="seat">2</b-col>
        </b-row>
        <b-row class="row-8">
          <p>Rank 4</p>
          <b-col class="seat">1</b-col>
          <b-col class="seat">3</b-col>
          <b-col class="seat">5</b-col>
          <b-col class="seat">6</b-col>
          <b-col class="seat">4</b-col>
          <b-col class="seat">2</b-col>
        </b-row>
      </b-container>
    </div>
    <br />
    <div class="balcony-1">
      <p>Balcony</p>
      <b-container class="rows">
        <b-row class="row-1 justify-content-md-center">
          <p>Rank 5</p>
          <b-col class="seat">1</b-col>
          <b-col class="seat">3</b-col>
          <b-col class="seat">5</b-col>
          <b-col class="seat">4</b-col>
          <b-col class="seat">2</b-col>
        </b-row>
        <b-row class="row-2 justify-content-md-center">
          <p>Rank 5</p>
          <b-col class="seat">1</b-col>
          <b-col class="seat">3</b-col>
          <b-col class="seat">5</b-col>
          <b-col class="seat">4</b-col>
          <b-col class="seat">2</b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  data() {},
};
</script>

<style lang="scss" scoped>
.main-hall {
  .seat {
    background-color: lightgrey;
    height: 50px;
    width: 10px;
    margin: 3px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    cursor: pointer;

    &:hover {
      background-color: grey;
    }
  }
}

.balcony-1 {
  .seat {
    background-color: darkgrey;
    height: 50px;
    width: 10px;
    margin: 3px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    cursor: pointer;

    &:hover {
      background-color: grey;
    }
  }
}

.selected {
  background-color: #0081cb;
}

.occupied {
  background-color: #fff;
}
</style>
