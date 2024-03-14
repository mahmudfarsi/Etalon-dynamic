<template>
  <div>
    <Header class="bg-green py-25px px-80px">
      <Nav class="nav">
        <Row :is-simple="true" class="nav-row">
          <div class="logo">
            <p>
              <a href="" class="logo"> Etalon </a>
            </p>
          </div>
          <Row tag="ul" class="nav-list">
            <li>
              <router-link
                :to="{ name: 'home' }"
                active-class="active"
                class="item-list"
              >
                Home
              </router-link>
            </li>
            <li>
              <router-link
                :to="{ name: 'store' }"
                active-class="active"
                class="item-list"
              >
                Store
              </router-link>
            </li>
            <li>
              <router-link
                :to="{ name: 'news' }"
                active-class="active"
                class="item-list"
              >
                new
              </router-link>
            </li>
            <li>
              <router-link
                :to="{ name: 'contact' }"
                active-class="active"
                class="item-list"
              >
                contact
              </router-link>
            </li>
          </Row>
          <Button
            tag="router-link"
            :is-icon-only="true"
            icon="pack"
            :to="{ name: 'baskets' }"
          />
        </Row>
      </Nav>
    </Header>

    <!--    main    -->
    <Container>
      <!--    baskets    -->
      <div class="basket-box">
        <h2 class="basket-box--title">baskets</h2>
        <Row tag="ul" class="basket-row">
          <Product
            v-for="item in findBaskets"
            :product="item"
            class="basket-row--card"
          />
        </Row>
      </div>

      <!--  favorites  -->
      <div class="baskett-box mt-3">
        <h2 class="basket-box--title">favorites</h2>
        <Row tag="ul" class="basket-row">
          <Product
            v-for="item in findFav"
            :product="item"
            class="basket-row--card"
          />
        </Row>
      </div>
    </Container>

    <NavMobile class="fixed bottom-0" />
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import Header from "@/components/base/Header.vue";
import Button from "@/components/base/Button.vue";
import { useBasket } from "@/stores/basket.js";
import {useProducts} from '@/stores/products.js'
import Product from "@/components/main/Products.vue";
import Row from "@/components/base/Row.vue";
import NavMobile from "@/components/main/NavMobile.vue";
import Container from "@/components/base/Container.vue";

const basketList = computed(() => useBasket().basketList);
const isFav = computed(() => useProducts().isFav);


const products = ref([]);
const getAllProducts = async () => {
  const response = await fetch(`https://fakestoreapi.com/products`);
  products.value = await response.json();
};

const findBaskets = computed(() => {
  if (products.value) {
    return products.value.filter((item) => basketList.value.includes(item.id));
  }
  return "no data";
});


const findFav = computed(() => {
  if(products.value){
    return products.value.filter((item) => isFav.value.includes(item.id))
  }
  return 'no data!'
})

getAllProducts();
</script>
