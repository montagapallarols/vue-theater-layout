<template>
  <div>
    <!-- <div class="form">
      <b-form @submit="onSubmit" @reset="onReset" v-if="show" inline>
        <b-form-group
          id="input-group-1"
          label="Phone number:"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="groups.phoneNumber"
            type="text"
            placeholder="Enter phone number"
            required
          >
          </b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Rank:" label-for="input-2">
          <b-form-select
            id="input-2"
            v-model="groups.rank"
            @change="onChange"
            :options="ranks"
            required
          ></b-form-select>
        </b-form-group>

        <b-form-group
          id="input-group-3"
          label="Group size:"
          label-for="input-3"
        >
          <b-form-input
            id="input-3"
            v-model="groups.groupSize"
            type="number"
            :max="rankSeats"
            placeholder="Enter group size"
            required
          >
          </b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
    </div>
    <h4 v-if="rank">{{ rankSeats }} available seats for rank {{ rank }}</h4>
    <h4 v-else>Select a rank</h4> -->
    <Layout :groups="groups" />
  </div>
</template>

<script>
import Layout from "./Layout";

export default {
  components: { Layout },

  data() {
    return {
      groups: [
        {
          id: "+31611111111",
          seats: [
            { section: "main hall", row: "1", seat: "4" },
            { section: "main hall", row: "1", seat: "2" },
            { section: "main hall", row: "2", seat: "2" },
            { section: "main hall", row: "2", seat: "4" },
          ],
        },
        {
          id: "+31622222222",
          seats: [
            { section: "main hall", row: "2", seat: "6" },
            { section: "main hall", row: "2", seat: "5" },
          ],
        },
        {
          id: "+31633333333",
          seats: [
            { section: "balcony", row: "7", seat: "4" },
            { section: "balcony", row: "7", seat: "5" },
          ],
        },
      ],
      //   groups: [{
      //     phoneNumber: "",
      //     rank: null,
      //     groupSize: null,
      //   }],

      //   ranks: [{ text: "Select One", value: null }, 1, 2, 3, 4],
      //   show: true,
      //   rankSeats: 0,
    };
  },
  methods: {
    onChange(event) {
      if (event === 1 || event === 5) {
        this.rankSeats = 10;
      } else if (event === 2 || event === 3 || event === 4) {
        this.rankSeats = 12;
      }
    },
    onSubmit(event) {
      event.preventDefault();
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.phoneNumber = "";
      this.rank = "";
      this.groupSize = null;
      //   this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    selectRank(rank) {
      if (rank === 1 || rank === 5) {
        this.rankSeats === 10;
      } else if (rank === 2 || rank === 3 || rank === 4) {
        this.rankSeats === 12;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 50px;

  #input-1,
  #input-2,
  #input-3 {
    margin-left: 10px;
    margin-right: 20px;
  }
  .btn {
    margin: 5px;
  }
}
</style>
