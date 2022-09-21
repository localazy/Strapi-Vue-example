import { createStore } from "vuex";
import axios from "axios";
export default createStore({
  state: {
    bookingPlatform: [],
  },
  getters: {
    getBookingPlatform: (state) => state.bookingPlatform,
  },
  mutations: {
    setBookingPlatform: (state, payload) => (state.bookingPlatform = payload),
  },
  actions: {
    getBookingDetails: ({ commit }, locale) => {
      try {
        axios
          .get(
            `http://localhost:1337/api/ticket-booking-platforms?populate=*&locale=${locale}`
          )
          .then((res) => {
            commit("setBookingPlatform", res.data.data[0].attributes);
          });
      } catch (e) {
        console.log("error", e);
      }
    },
  },
  modules: {},
});
