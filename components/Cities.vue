<template>
  <section class="upcoming-section">
    <div class="container">
      <h2><strong>Cities</strong></h2>
      <div class="mb-3">
        <input type="text" name="search" id="search" v-on:input="changeSearch" v-model="search" />
      </div>
      <div class="row mb-3">
        <div
          v-for="city in cities"
          :key="city.id"
          class="col-md-4 col-lg-3 upcoming-card position-relative"
        >

        <NuxtLink v-bind:to="'/city/' +city.id">
            <div class="card-footer d-flex">
              <div class="d-flex flex-column pl-2 align-self-center">
                <p>{{ city.city_name }}</p>
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
      cities: 'cities/cities',
    }),
  },

  methods: {
    ...mapActions({
      getCities: 'cities/getCities',
    }),

    changeSearch() {
      this.getCities([this.currentLimit, 0, this.search])
    },

    nextPage() {
      console.log(this.currentLimit)
      this.currentLimit += 2
      this.getCities([this.currentLimit, 0, this.search])
    },
    prevPage() {
      this.currentLimit = this.currentLimit - 2 || 2
      this.getCities([this.currentLimit, 0, this.search])
    },
  },

  created() {
    this.getCities([this.currentLimit, 0, this.search])
  },
}
</script>
