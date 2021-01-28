<template>
  <div class="layout">
    <h1>Theater layout</h1>
    <h5>Ranks</h5>
    <ul class="showcase">
      <li>
        <div class="rank1"></div>
        <small>1</small>
      </li>
      <li>
        <div class="seat rank2"></div>
        <small>2</small>
      </li>
      <li>
        <div class="seat rank3"></div>
        <small>3</small>
      </li>
      <li>
        <div class="seat rank4"></div>
        <small>4</small>
      </li>
    </ul>

    <b-container class="section" v-for="(row, index) in audience" :key="index">
      <b-row :class="getRank(index)">
        {{ `Row ${audience.indexOf(row) + 1}` }}

        <div v-for="(seat, index) in row" :key="index">
          <b-col
            v-if="seat.seat"
            class="seat-occupied"
            :style="{ backgroundColor: seat.seatColour }"
          ></b-col>

          <b-col v-else class="seat"> </b-col>
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
          // I was going to create a table that follows the spicific order, and then assign each number from the table accordingly

          result[rowIndex][seatIndex] = s;
        });
      });
      console.log("audience", result);
      return result;
    },
  },
  methods: {
    getRank(index) {
      let rankClass = "";
      if (index <= 1) {
        rankClass = "rank1";
      } else if (index <= 3) {
        rankClass = "rank2";
      } else if (index <= 5) {
        rankClass = "rank3";
      } else {
        rankClass = "rank4";
      }
      return rankClass;
    },
  },
};
</script>

<style lang="scss" scoped>
h1 {
  padding-bottom: 10px;
}
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
  }

  .showcase li small {
    margin-left: 2px;
  }
  .rank1 {
    background-color: #f7f7e8;
    height: 30px;
    width: 30px;
  }
  .rank2 {
    background-color: #ffdf91;
    height: 30px;
    width: 30px;
  }
  .rank3 {
    background-color: #e7d9ea;
    height: 30px;
    width: 30px;
  }
  .rank4 {
    background-color: #d0e8f2;
    height: 30px;
    width: 30px;
  }
}

.section {
  background-color: #a3d2ca;
  display: grid;
  justify-content: center;
  padding: 10px 0px;

  .rank1 {
    background-color: #f7f7e8;
  }
  .rank2 {
    background-color: #ffdf91;
  }
  .rank3 {
    background-color: #e7d9ea;
  }
  .rank4 {
    background-color: #d0e8f2;
  }
  .seat {
    background-color: #bbbbbb;
    height: 40px;
    width: 10px;
    margin: 3px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

    &:hover {
      background-color: grey;
    }
  }
  .seat-occupied {
    height: 40px;
    width: 10px;
    margin: 3px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

    &:hover {
      background-color: grey;
    }
  }
}
</style>
