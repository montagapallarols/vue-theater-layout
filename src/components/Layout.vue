<template>
  <div class="layout">
    <h1>Stage</h1>

    <b-container class="section">
      <b-row class="seat-row" v-for="(row, index) in audience" :key="index">
        {{ `Row ${audience.indexOf(row) + 1}` }}

        <div v-for="(seat, index) in row" :key="index">
          <b-col
            v-if="seat.seat"
            class="seat-occupied"
            :style="{ backgroundColor: seat.seatColour }"
            >{{ seat.seat }}</b-col
          >

          <b-col v-else class="seat">
            {{ row.indexOf(seat) + 1 }}
          </b-col>
        </div>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  props: ["groups"],
  computed: {
    audience: function() {
      const result = [
        [{}, {}, {}, {}],
        [{}, {}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}, {}],
      ];
      const groupsWithColour = this.groups.map((g) => {
        // Assign each group a random colour
        return {
          ...g,
          colour:
            "#" +
            Math.random()
              .toString(16)
              .substr(-6),
        };
      });

      // Assign each seat reservation its group colour
      const groupSeatColour = groupsWithColour.map((g) => {
        const seatObject = g.seats.map((s) => {
          return {
            ...s,
            seatColour: g.colour,
          };
        });
        return { ...g, seats: [...seatObject] };
      });
      // Set up audience array with row, seat, colour

      groupSeatColour.forEach((g) => {
        g.seats.forEach((s) => {
          const { row, seat } = s;
          const rowNumber = parseInt(row);
          const rowIndex = rowNumber - 1;

          const seatNumber = parseInt(seat);
          const seatIndex = seatNumber - 1;
          // I need to add some logic here to fit the requested seat number layout

          result[rowIndex][seatIndex] = s;
        });
      });
      console.log("audience", result);
      return result;
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.showcase {
  display: flex;
  justify-content: center;
  list-style-type: none;
  padding: 20px 10px;
  border-radius: 5px;
  .showcase li {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 10px;
  }

  .showcase li small {
    margin-left: 2px;
  }
  .seat {
    background-color: lightgrey;
    height: 40px;
    width: 80px;
    margin: 3px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  .available {
    background-color: lightgreen;
  }
}
.section {
  display: grid;
  background-color: #a3d2ca;
  justify-content: center;
  padding: 20px 10px;
  border-radius: 5px;
  // .seat-row {
  //   background-color: #f7f7e8;
  // }
  .seat {
    background-color: lightgreen;
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
  .seat-occupied {
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
</style>
