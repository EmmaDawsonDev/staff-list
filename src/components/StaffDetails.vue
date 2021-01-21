<template>
  <div>
    <staff-details-edit
      v-if="edit && !newStaff"
      @updateUser="toggleEdit"
    ></staff-details-edit>
    <add-staff v-else-if="!edit && newStaff"></add-staff>
    <section v-else>
      <h3>{{ getUser.name }}</h3>
      <router-link :to="`/staff/${getUser.id}/edit`" @click="toggleEdit"
        >edit</router-link
      >
      <p>{{ getUser.role }}</p>
      <h5>Mobil</h5>
      <p>{{ getUser.mobile }}</p>
      <h5>Epost</h5>
      <p>{{ getUser.email }}</p>
    </section>
  </div>
</template>

<script>
import StaffDetailsEdit from "./StaffDetailsEdit.vue";
import AddStaff from "./AddStaff.vue";
export default {
  components: { StaffDetailsEdit, AddStaff },
  props: {
    newStaff: {
      type: Boolean,
    },
  },
  data() {
    return {
      edit: false,
    };
  },
  computed: {
    getUser() {
      return this.$route.params.id != undefined
        ? this.$root.staffMembers.find(
            (staff) => staff.id == this.$route.params.id
          )
        : "";
    },
  },
  methods: {
    toggleEdit() {
      this.edit = !this.edit;
    },
  },
};
</script>

<style scoped></style>
