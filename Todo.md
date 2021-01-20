A seating layout consists of a number of sections (e.g. main hall, 1st balcony, loge, etc), a number of ranks (with different pricing), rows and seats.

The layout is defined in a simple data structure such as:

layout = {

ranks: [ 'rank1', 'rank2', 'rank3' ],

sections: [

    { mame: 'main hall',

      rows: [

        { row: '1', seats: [

          { seat: '1', rank: 'rank1' },

          { seat: '3', rank: 'rank1' },

          { seat: '4', rank: 'rank1' },

          { seat: '2', rank: 'rank1' }

          ]

        },

        { row: '2', seats: [

          { seat: '1', rank: 'rank1' },

          { seat: '3', rank: 'rank1' },

          { seat: '5', rank: 'rank1' },

          { seat: '6', rank: 'rank1' },

          { seat: '4', rank: 'rank1' },

          { seat: '2', rank: 'rank1' }

          ]

        },

        { row: '3', seats: [

          { seat: '1', rank: 'rank2' },

          { seat: '3', rank: 'rank2' },

          { seat: '5', rank: 'rank2' },

          { seat: '6', rank: 'rank2' },

          { seat: '4', rank: 'rank2' },

          { seat: '2', rank: 'rank2' }

          ]

        },

        ..

      ]

    },

    { name: '1st balcony',

      rows: [ ... ]

    }

]

}

These seats are assigned to groups of people. These are specified independently. These groups are identified by a phone number and are assigned N seats, where N is the size of the group. A group is usually placed close together but may be placed across two rows. A group will always be within the same rank.

Sample data structure:

groups = [

{ id: '+31611111111', seats: [

      { section: 'main hall', row: '1', seat: '4' },

      { section: 'main hall', row: '1', seat: '2' },

      { section: 'main hall', row: '2', seat: '2' },

      { section: 'main hall', row: '2', seat: '4' },

    ]

},

{ id: '+31622222222', seats: [

      { section: 'main hall', row: '2', seat: '6' },

      { section: 'main hall', row: '2', seat: '5' },

    ]

},

]

The sample data above results in a layout/assignment roughly as follows:

Main hall:

row 1: [ ][ ] [g1][g1]

row 2: [ ][ ] [g2][g2] [g1][g1]

row 3: [ ][ ] [ ][ ] [ ][ ]

where g1 is +31611111111 which is wrapped across row 1 / row 2, and g2 is +31622222222 which is placed on row 2.

Create a simple but complete (runnable) Vue app that gets sample data passed in and displays it. The layout should have different background colors for different ranks and show which group is placed somewhere. Give each group a distinctive color.

Extra notes:

Keep in mind layouts are usually way bigger than the sample. The code should take performance into account so big floorplans can still be easily rendered.

We believe a feature is not complete if it’s not properly tested. That’s why we would love to see some unit tests that make sure you code does what it’s supposed to do!
