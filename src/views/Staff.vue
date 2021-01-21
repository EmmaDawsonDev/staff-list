<template>
  <div class="container">
    <section class="staff">
      <h2>Anställda</h2>
      <ul>
        <router-link
          v-for="staff in staffList"
          :key="staff.id"
          element="li"
          :to="`/staff/${staff.id}`"
          >{{ staff.name }}</router-link
        >
      </ul>
      <router-link to="/staff/new">Add New Staff</router-link>
    </section>
    <section class="details">
      <h2>Detaljer</h2>
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
export default {
  computed: {
    staffList() {
      return this.$root.staffMembers;
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 800px;
  display: flex;
}

section {
  width: 50%;
  text-align: center;
}

.staff {
  background-color: lightgrey;
}

.details {
  border: 2px solid black;
}

ul {
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: left;
}
</style>
