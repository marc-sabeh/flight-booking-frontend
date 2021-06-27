<template>
     <section class="thank-you-section my-5 text-center">
            <h1><strong>Thank you for your Order!</strong></h1>
            <img class="thank-you-check mx-auto" src="images/content/confirmation.svg" alt="Thank you" title="Thank you">
            <div class="payment-info">
                <p class="info">Total Payment Amount</p>
                <p class="amount">{{order.flight.price}}&dollar;</p>

                <h4>Order Date: {{order.created_at}}</h4>
                <h4>Order By: {{order.users_permissions_user.username}}</h4>

            </div>
    
        </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
    computed: {
        ...mapGetters({
            order: 'flights/order',
        }),

    }
    
}
</script>