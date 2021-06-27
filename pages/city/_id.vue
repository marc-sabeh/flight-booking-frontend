<template>
  <section class="upcoming-section">
    <div class="container">
      <h2><strong>Flights</strong></h2>
      <div class="mb-3">
        <input type="text" name="search" id="search" v-on:input="changeSearch" v-model="search" />
      </div>
      <div class="row mb-3">
        <div
          v-for="flight in flights_city"
          :key="flight.id"
          class="col-md-4 col-lg-3 upcoming-card position-relative"
        >

        <NuxtLink :to="'/flight/' +flight.id">
            <div class="card-footer d-flex">
              <div class="d-flex flex-column pl-2 align-self-center">
                <h5>{{ flight.id }}</h5>
                <p>{{ flight.description }}</p>
              </div>
            </div>
        </NuxtLink>
        </div>
      </div>

      <div>
        <button v-on:click="prevPage">Show Less</button>
        <button v-on:click="nextPage">Show More</button>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {

  data() {
    return {
      currentLimit: 2,
      search: '',
    }
  },
  computed: {
    ...mapGetters({
      flights_city: 'flights/flights_city',
    }),
  },

  methods: {
    ...mapActions({
      getFlightsCities: 'flights/getFlightsCities',
    }),

    changeSearch() {
      this.getFlightsCities([this.currentLimit, 0, this.search,this.$route.params.id])
    },

    nextPage() {
      console.log(this.currentLimit)
      this.currentLimit += 2
      this.getFlightsCities([this.currentLimit, 0, this.search,this.$route.params.id])
    },
    prevPage() {
      this.currentLimit = this.currentLimit - 2 || 2
      this.getFlightsCities([this.currentLimit, 0, this.search,this.$route.params.id])
    },
  },

  created() {
      this.getFlightsCities([this.currentLimit, 0, this.search,this.$route.params.id])
  },
}
</script>
