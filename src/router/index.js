import Vue from "vue";
import VueRouter from "vue-router";
import Staff from "../views/Staff.vue";
import StaffDetails from "../components/StaffDetails.vue";
import StaffDetailsEdit from "../components/StaffDetailsEdit.vue";
import AddStaff from "../components/AddStaff.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/staff",
  },
  {
    path: "/staff",
    name: "Staff",
    component: Staff,
    children: [
      {
        path: ":id",
        component: StaffDetails,
      },
      {
        path: ":id/edit",
        component: StaffDetailsEdit,
      },
      {
        path: "new",
        props: { newStaff: true },
        component: AddStaff,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
