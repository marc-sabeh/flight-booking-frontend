<template>
  <section class="upcoming-section">
    <div class="container mt-3">
		<div>
			<div class="container">
				<div class="row justify-content-md-center">
					<div class="details col-md-6">
						<h3 class="product-title">{{flight.id}}</h3>
				
						<p >{{flight.description}}</p>
						<h4 class="price">current price: <span>${{flight.price}}</span></h4>
                        <p>{{flight.date}}</p>

						<div class="action">
							<button type="button" v-on:click="order">Order</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
  </section>
</template>


<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data(){
        return{
            dataForm:{
                flight:'',
                users_permissions_user: ''
            }
        }
    },
  computed: {
    ...mapGetters({
      flight: 'flights/flight',
      user: 'user',
    }),
  },

  methods: {
    ...mapActions({
      getFlight: 'flights/getFlight',
      orderFlight : 'flights/orderFlight'
    }),
    order(){
        this.dataForm.users_permissions_user = this.user.id
        this.dataForm.flight = this.flight.id
      this.orderFlight(this.dataForm)
      .then(() => {
            this.$router.replace({
          path: '/thankyou',
        })
      })
    }
  },

    created() {
        console.log(this)

    //   console.log(this.flight[0].value)
      this.getFlight([this.$route.params.id])
  },

}
</script>
