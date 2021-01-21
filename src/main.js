import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

new Vue({
  router,
  data() {
    return {
      staffMembers: [
        {
          id: 1,
          name: "Kalle Svensson",
          role: "Sekreterare",
          mobile: "0987654321",
          email: "test1@test.com",
        },
        {
          id: 2,
          name: "Johanna Olofsson",
          role: "Chef",
          mobile: "098765666",
          email: "test2@test.com",
        },
        {
          id: 3,
          name: "Elias Aronsson",
          role: "Utvecklare",
          mobile: "09876543333",
          email: "test3@test.com",
        },
      ],
    };
  },
  render: (h) => h(App),
}).$mount("#app");
