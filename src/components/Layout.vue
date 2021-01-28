<template>
  <div class="layout">
    <ul class="showcase">
      <li>
        <div class="seat available"></div>
        <small>Available</small>
      </li>
      <li>
        <div class="seat occupied"></div>
        <small>Occupied</small>
      </li>
    </ul>

    <div class="main-hall">
      <b-container class="rows" v-for="(row, index) in audience" :key="index">
        <p>{{ `Row ${audience.indexOf(row) + 1}` }}</p>

        <b-row class="row-1" v-for="(seat, index) in row" :key="index">
          <b-col
            v-if="seat.seat"
            class="seat-occupied important"
            :style="{ backgroundColor: seat.seatColour }"
            >{{ seat.seat }} occupied {{ seat.seatColour }}</b-col
          >

          <b-col v-else class="seat"> {{ row.indexOf(seat) + 1 }} free </b-col>
        </b-row>
      </b-container>
    </div>
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
  .selected {
    background-color: #0081cb;
  }
  .occupied {
    background-color: red;
  }
}
.main-hall {
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
    background-color: red;
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
  .row-1,
  .row-2 {
    background-color: #51c2d5;
  }
  .row-3,
  .row-4 {
    background-color: #c1a1d3;
  }
  .row-5,
  .row-6 {
    background-color: #f6c065;
  }
}

.balcony-1 {
  .row-7,
  .row-8 {
    background-color: #e5707e;
  }
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
  background-color: green;
}
</style>
