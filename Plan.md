Main hall:

row 1: [ ]2 [ ]4 [g1]3 [g1]1

row 2: [ ]2 [ ]4 [g2]6 [g2]5 [g1]3 [g1]1

row 3: [ ]2 [ ]4 [ ]6 [ ]5 [ ]3 [ ]1

LAYOUT:

- Create layout with grid [X]

SELECT SEATS:

- Add input field with: phone number, N, rank [X]
- User needs to select desired rank before selecting seats (groups are always within the same rank)
- Get number of seats for each rank [X]
- User can add group together or across 2 rows
- Group = id (phone number) / Num of seats
- When user selects seats, bind classes to html to change colour

- If seat is included in rank 1 -> red else grey

* Array called seats

Steps:

1. Identify every group with a colour
2. Identify every seat (go to each group, then each seat in that group and attach the colour to the seat) -> Map over each seat and attach it the group colour

groups.map(group => {
group.color = randomColor
group.seats.map(seat => seat.color = group.color)
})

3. Make an audience array

4. Add a sub array for every row

const audience = [[], [], [], [], [], [], [], []]
(each array is one row -> array -1)

array[1][0]

5. Sort the seats by row

groups.map(group => {
group.color = randomColor()
group.seats.map(reservation => {
reservation.color = group.color

    const { row, seat } = reservation
    const rowNumber = parseInt(row)
    const rowIndex = rowNumber - 1

    const seatNumber = parseInt(seat)
    const seatIndex = seatNumber - 1

    audience[rowIndex][seatIndex] = reservation

})
})

audience = [
[
{ row: 1, seat: 3, color: 'blue', section: 'who cares' },
{ row: 1, seat: 1, color: 'green', section: 'who cares' },
{ row: 1, seat: 2
, color: 'green', section: 'who cares' },
],
[
{ row: 2, seat: 1, color: 'blue', section : 'who cares' },
{ row: 2, seat: 3, color: 'red', section: 'who cares' }
]
]

PROBLEM: unreserved seats?

- Create a template-like audience array?

const audience = [[{}, {}, {}], [{}, {}, {}], [{}, {}, {}]]

groups.map(group => {
group.color = randomColor()
group.seats.map(reservation => {
reservation.color = group.color

    const { row, seat } = reservation
    const rowNumber = parseInt(row)
    const rowIndex = rowNumber - 1

    const seatNumber = parseInt(seat)
    const seatIndex = seatNumber - 1

    audience[rowIndex][seatIndex] = reservation

})
})

[
[ // row 1
{}, // seat 1 (row 1)
{}, // seat 2 (row 1)
{} // seat 3 (row 1
],
[ // row 2
{}, // seat 1 (row 2)
{}, // seat 2 (row 2)
{}
],
[ // row 3
{},
{},
{}
]
]

audience.map(row => {
row.map((seat, index) => {
if (!seat) {
seat.seat = index
}
})
})
