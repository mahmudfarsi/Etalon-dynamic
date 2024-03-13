<template>
  <div>
    <Header class="bg-green py-[25px] px-[80px]">
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
          <Button tag="router-link" :is-icon-only="true" icon="pack" :to="{name:'baskets'}"/>
        </Row>
      </Nav>
    </Header>
    <main v-if="product" class="w-full h-screen">
      <Container>
        <div class="w-full h-screen flex pt-[150px] items-start justify-around">
          <div class="w-650 h-[500px] flex justify-center overflow-hidden">
            <Img
              :src="product.image"
              :alt="product.title "
              class="w-full h-full object-cover"
              height="450"
            />
          </div>
          <div class="w-480 h-auto flex flex-col gap-70">
            <h2 class="font-lato font-normal">
              {{ product.title }}
            </h2>
            <p class="mt-[20px] font-roboto font-light">
              {{ product.description }}
            </p>
            <div class="w-300 flex justify-between mt-[15px]">
              <span class="prcie font-lato font-normal"> price: {{ price }} </span>
              <span class="font-lato font-normal">
                Rate: {{ product.rating.rate }}
              </span>
            </div>
          </div>
        </div>
      </Container>
      <Container>
        <Row tag="ul" class="flex flex-wrap gap-22">
          <Products
            v-for="item in catProduct"
            :product="item"
            class=" p-[15px] "
          />
        </Row>
      </Container>
      
    </main>
    <div v-else class="font-lato font-black">is Loading.......!</div>
    <NavMobile class="fixed bottom-0"/>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import Img from "@/components/base/Img.vue";
import Header from "@/components/base/Header.vue";
import Nav from "@/components/base/Nav.vue";
import Row from "@/components/base/Row.vue";
import Button from "@/components/base/Button.vue";
import Container from "@/components/base/Container.vue";
import Products from "@/components/main/Products.vue";
import NavMobile from "@/components/main/NavMobile.vue";

const route = useRoute();
const product = ref(null);

const productId = computed(() => {
  return route.params.id;
});
const fetchProduct = new Promise(async (res) => {
  const respons = await fetch(
    `https://fakestoreapi.com/products/${productId.value}`
  );
  product.value = await respons.json();
  res(product.value);
  fetchProducts();
});
fetchProduct.then((res) => dataFunc(res));

const dataFunc = (pro) => {
  product.value = pro;
};

const price = computed(() => {
  return `$${product.value.price}`;
});

//for category  ---------------------------------------------------

const cat = computed(() => {
  return product.value.category;
});

const catProducts = ref([]);
const fetchProducts = async () => {
  const response = await fetch(
    `https://fakestoreapi.com/products/category/${cat.value}`
  );
  catProducts.value = await response.json();
};

// const filterCategory = computed(() => {
//   if(product.value){
//     return allProducts.value.filter(cat => cat.category === category.value)
//   }
//   return 'no data!'
// });

// console.log(filterCategory);

const catProduct = computed(() => {
  if (catProducts.value) {
    return catProducts.value;
  }
  return "No Data!";
});
fetchProducts();

// const fetchProduct = async () => {
//     const respons = await fetch(`https://fakestoreapi.com/products/${productId.value}`);
//     const result = await respons.json();
//     product.value = result;
// }

// const data = computed(() => {
//     if(product.value){
//         return product.value
//     }
//     return 'no data'
// })
</script>
