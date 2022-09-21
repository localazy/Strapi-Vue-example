<template>
  <div>
    <div class="header" :style="image">
      <div class="nav-bar">
        <select class="form-control" @change="onChange($event)">
          <option selected value="en">English (en)</option>
          <option value="es">Spanish (es)</option>
          <option value="cs">Czech (cs)</option>
          <option value="fr">French (fr)</option>
        </select>
      </div>
      <div class="hero" v-if="getBookingPlatform">
        <h3>{{ getBookingPlatform.hero_title }}</h3>
        <p>
          {{ getBookingPlatform.hero_text }}
        </p>
      </div>
    </div>
    <div v-if="getBookingPlatform.placeholders" class="form">
      <input
        type="text"
        :placeholder="getBookingPlatform.placeholders[0].name_of_passenger"
      />
      <input
        type="text"
        :placeholder="getBookingPlatform.placeholders[0].ticket_class"
      />
      <input
        type="number"
        :placeholder="getBookingPlatform.placeholders[0].number_of_travellers"
      />
      <input
        type="text"
        :placeholder="getBookingPlatform.placeholders[0].destination"
      />
      <input
        type="text"
        :placeholder="getBookingPlatform.placeholders[0].origin"
      />
      <input
        type="date"
        :placeholder="getBookingPlatform.placeholders[0].departure_date"
      />
      <button id="button">BOOK NOW</button>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "BookTicketView",
  data() {
    return {
      image: {
        backgroundImage:
          "url(https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20190711165133/iStock-498556541.jpg)",
      },
      bookingPlatform: [],
      locale: "en",
    };
  },
  computed: {
    ...mapGetters(["getBookingPlatform"]),
  },
  methods: {
    onChange(event) {
      this.locale = event.target.value;
      this.$store.dispatch("getBookingDetails", this.locale);
    },
  },
  mounted() {
    this.$store.dispatch("getBookingDetails", this.locale);
  },
};
</script>
<style scoped>
.header {
  background-size: cover;
  background-repeat: no-repeat;
  padding: 50px;
  height: 529px;
}
.hero {
  margin-top: 100px;
  width: 500px;
  font-size: 30px;
}
.container {
  margin: 50px auto;
  width: 768px;
}

.form {
  display: flex;
  padding: 40px;
  height: 100%;
  background: #007ac5;
  justify-content: space-evenly;
  align-items: center;
}
input {
  margin: 27px 3px;
  padding: 20px;
  border: none;
  border-radius: 3px;
}
.nav-bar {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
select {
  border: none;
  height: 27px;
  width: 94px;
  border-radius: 6px;
}
#button {
  height: 65px;
  width: 150px;
  background: #e1a584;
  color: #000000;
  border: none;
}
</style>
