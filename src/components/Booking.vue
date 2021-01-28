<template>
  <div>
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
            { section: "main hall", row: "1", seat: "4", rank: "1" },
            { section: "main hall", row: "1", seat: "2", rank: "1" },
            { section: "main hall", row: "2", seat: "2", rank: "1" },
            { section: "main hall", row: "2", seat: "4", rank: "1" },
          ],
        },
        {
          id: "+31622222222",
          seats: [
            { section: "main hall", row: "2", seat: "6", rank: "1" },
            { section: "main hall", row: "2", seat: "5", rank: "1" },
          ],
        },
        {
          id: "+31633333333",
          seats: [
            { section: "balcony", row: "7", seat: "4", rank: "4" },
            { section: "balcony", row: "7", seat: "5", rank: "4" },
          ],
        },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
