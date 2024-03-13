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
    baskets
    {{ basketList }}
    <Row tag="ul" class="flex flex-wrap">
      <Product v-for="item in findId" :product="item" />
    </Row>
    <NavMobile class="fixed bottom-0" />
  </div>
</template>

<script setup>
import { computed, ref,onMounted } from "vue";
import Header from "@/components/base/Header.vue";
import Button from "@/components/base/Button.vue";
import { useBasket } from "@/stores/basket.js";
import Product from "@/components/main/Products.vue";
import Row from "@/components/base/Row.vue";
import NavMobile from "@/components/main/NavMobile.vue";

const basketList = computed(() => useBasket().basketList);
const arr = Object.entries(basketList.value).map((item) => item[1]);
// console.log(arr);

const products = ref([]);
const getAllProducts = async () => {
  const response = await fetch(`https://fakestoreapi.com/products`);
  products.value = await response.json();
};
// console.log(products.value);
// console.log(typeof arr);
// console.log(products['_value']);
// console.log(products);

const items = ref([]);
const findId = computed(() => {
  if (products.value) {
    // console.log(products.value);
    // const find = products.value.filter((item) => arr.indexOf(item.id));
    // return items.value.push(find);
   items.value = products.value.filter(item => basketList.value.includes(item.id))
  //  return  products.value.filter(item => basketList.value.includes(item.id))
  }
  return "no data";
});
// console.log(findId);

// onMounted(() => {
//   // products.value.focus();
//   console.log(products.value);
// });

getAllProducts();
</script>
