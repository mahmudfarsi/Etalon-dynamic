<template>
  <Card class="product-card">
    <template #header>
        <div
          class="product-card--header"
        >
          <div class="box-fav">
            <label>
              <Button
                :icon="isFav ? 'fill-heart' : 'empty-heart'"
                @click.stop="toggle(product.id)"
                :is-like="true"
              />
              <input type="checkbox" class="hidden" />
            </label>
          </div>
          <router-link :to="`/product/${product.id}`">
            <Img :src="product.image" :alt="product.title" height="238" />
          </router-link>
        </div>
    </template>
    <template #body>
      <div class="product-card--body">
        <div class="product-card-title">
          <h4 class="card-title">
            {{ product.title }}
          </h4>
          <span class="card-price">
            {{ price }}
          </span>
        </div>
        <label class="right">
          <Button
            class="p-[5px] rounded-md border-none"
            :class="`btn--${isAdded ? 'select' : 'noSelect'}`"
            icon="pack"
            @click="select(product.id)"
          />
          <input type="checkbox" class="hidden" />
        </label>
      </div>
    </template>
  </Card>
</template>

<script setup>
import { computed, defineProps, ref } from "vue";
import { number, shape, string } from "vue-types";
import Row from "@/components/base/Row.vue";
import Img from "@/components/base/Img.vue";
import Button from "@/components/base/Button.vue";
import Card from "@/components/base/Card.vue";
import { useProducts } from "@/stores/products.js";
import { useBasket } from "@/stores/basket.js";

const props = defineProps({
  product: shape({
    id: number().isRequired,
    title: string().isRequired,
    price: number().isRequired,
    description: string().isRequired,
    category: string().isRequired,
    image: string().isRequired,
    rating: shape({
      rate: number().isRequired,
      count: number().isRequired,
    }),
  }),
});

const price = computed(() => {
  return `$${props.product.price}`;
});

const { toggle, isInFav } = useProducts();
const FavList = computed(() => useProducts().isFav);
const isFav = computed(() => isInFav(props.product.id));

const { select, isAdd } = useBasket();
const listBasket = computed(() => useBasket().basketList);
const isAdded = computed(() => isAdd(props.product.id));

</script>
