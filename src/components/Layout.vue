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
      <p>Main hall</p>
      <b-container class="rows">
        <b-row class="row-1 justify-content-md-center">
          <p>Rank 1</p>
          <b-col col md="2" class="seat">1</b-col>
          <b-col col md="2" class="seat">3</b-col>
          <b-col col md="2" class="seat">4</b-col>
          <b-col col md="2" class="seat">2</b-col>
          <p>Row 1</p>
        </b-row>
        <b-row class="row-2">
          <p>Rank 1</p>
          <b-col class="seat">1</b-col>
          <b-col class="seat">3</b-col>
          <b-col class="seat">5</b-col>
          <b-col class="seat">6</b-col>
          <b-col class="seat">4</b-col>
          <b-col class="seat">2</b-col>
          <p>Row 2</p>
        </b-row>
        <b-row class="row-3">
          <p>Rank 2</p>
          <b-col class="seat">1</b-col>
          <b-col class="seat">3</b-col>
          <b-col class="seat">5</b-col>
          <b-col class="seat">6</b-col>
          <b-col class="seat">4</b-col>
          <b-col class="seat">2</b-col>
          <p>Row 3</p>
        </b-row>
        <b-row class="row-4">
          <p>Rank 2</p>
          <b-col class="seat">1</b-col>
          <b-col class="seat">3</b-col>
          <b-col class="seat">5</b-col>
          <b-col class="seat">6</b-col>
          <b-col class="seat">4</b-col>
          <b-col class="seat">2</b-col>
          <p>Row 4</p>
        </b-row>
        <b-row class="row-5">
          <p>Rank 3</p>
          <b-col class="seat">1</b-col>
          <b-col class="seat">3</b-col>
          <b-col class="seat">5</b-col>
          <b-col class="seat">6</b-col>
          <b-col class="seat">4</b-col>
          <b-col class="seat">2</b-col>
          <p>Row 5</p>
        </b-row>
        <b-row class="row-6">
          <p>Rank 3</p>
          <b-col class="seat">1</b-col>
          <b-col class="seat">3</b-col>
          <b-col class="seat">5</b-col>
          <b-col class="seat">6</b-col>
          <b-col class="seat">4</b-col>
          <b-col class="seat">2</b-col>
          <p>Row 6</p>
        </b-row>
      </b-container>
    </div>
    <br />
    <div class="balcony-1">
      <p>Balcony</p>
      <b-container class="rows">
        <b-row class="row-7 justify-content-md-center">
          <p>Rank 4</p>
          <b-col class="seat">1</b-col>
          <b-col class="seat">3</b-col>
          <b-col class="seat">5</b-col>
          <b-col class="seat">4</b-col>
          <b-col class="seat">2</b-col>
          <p>Row 7</p>
        </b-row>
        <b-row class="row-8 justify-content-md-center">
          <p>Rank 4</p>
          <b-col class="seat">1</b-col>
          <b-col class="seat">3</b-col>
          <b-col class="seat">5</b-col>
          <b-col class="seat">4</b-col>
          <b-col class="seat">2</b-col>
          <p>Row 8</p>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  props: ["groups"],
  data() {
    return {
      groupsColour: [],
      // audience: [],
      audience: [
        [{}, {}, {}, {}],
        [{}, {}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}, {}],
      ],
    };
  },
  methods: {
    addColourToGroup() {
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
      console.log(groupSeatColour);
      // Set up audience array with row, seat, colour
      groupSeatColour.map((g) => {
        g.seats.map((s) => {
          const { row, seat } = s;
          const rowNumber = parseInt(row);
          const rowIndex = rowNumber - 1;

          const seatNumber = parseInt(seat);
          const seatIndex = seatNumber - 1;
          // I need to add some logic here to fit the requested seat number layout

          this.audience[rowIndex][seatIndex] = s;
        });
      });
      console.log("audience", this.audience);
    },
  },
  mounted() {
    this.addColourToGroup();
  },
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
  background-color: #fff;
}

// getRank() {
//       const rank1 = this.groups.filter((g) => {
//         return (
//           g.seats
//             .map((s) => {
//               return s.row;
//             })
//             .includes("1") ||
//           g.seats
//             .map((s) => {
//               return s.row;
//             })
//             .includes("2")
//         );
//       });
//       const rank1Colours = rank1.map((r) => {
//         return {
//           ...r,
//           seatColour:
//             "#" +
//             Math.random()
//               .toString(16)
//               .substr(-6),
//         };
//       });

//       this.rank1 = rank1Colours;
</style>
