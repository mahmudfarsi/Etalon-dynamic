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
    <Container>

      <!--    baskets    -->
      <div class="flex flex-col gap-30 smm:pt-6 md:pt-14">
        <h1 class="capitalize font-roboto font-medium text-4xl">baskets</h1>
        <Row tag="ul" class="w-full pb-50px flex flex-wrap gap-15">
          <Product
            v-for="item in findBaskets"
            :product="item"
            class="shadow-md rounded-lg px-10px py-10px"
          />
        </Row>
      </div>


      <!--  favorites  -->
      <div class="flex flex-col gap-30 smm:pt-6 md:pt-14 mt-3">
        <h1 class="capitalize font-roboto font-medium text-4xl">favorites</h1>
        <Row tag="ul" class="w-full pb-50px flex flex-wrap gap-15">
          <Product
            v-for="item in findFav"
            :product="item"
            class="shadow-md rounded-lg px-10px py-10px"
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
