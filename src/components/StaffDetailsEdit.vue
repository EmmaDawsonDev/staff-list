<template>
  <section>
    <input type="text" v-model="user.name" />
    <router-link :to="`/staff/${getUser.id}`" @click="save">Save</router-link>
    <input type="text" v-model="user.role" />
    <h5>Mobil</h5>
    <input type="text" v-model="user.mobile" />
    <h5>Epost</h5>
    <input type="text" v-model="user.email" />
  </section>
</template>

<script>
export default {
  computed: {
    getUser() {
      return this.$root.staffMembers.find(
        (staff) => staff.id == this.$route.params.id
      );
    },
  },
  data() {
    return {
      user: {},
    };
  },
  created() {
    this.user = this.getUser;
  },
  methods: {
    save() {
      this.$root.staffMembers.forEach((staff) => {
        if (staff.id === this.user.id) {
          staff = this.user;
        }
      });
      this.$emit("updateUser");
    },
  },
};
</script>

<style scoped></style>
