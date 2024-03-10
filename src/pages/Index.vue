--------- template

<template>
  <!-- section -    1  -->
  <Section class="sec-1">
    <Container class="container">
      <!--   header   -->
      <div class="pt-[25px]">
        <Header>
          <Nav class="nav">
            <Row :is-simple="true" class="nav-row">
              <div class="logo">
                  <router-link to="/">
                  <p class="logo">
                    Etalon
                  </p>
                  </router-link>
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
      </div>
      <!--        main         -->
      <div class="main">
        <div class="main-left">
          <div class="box-left">
            <p class="year">2022</p>
            <h1 class="main-title">Autumn Jackets</h1>
            <p class="sub-title">Autumn Sale / Up to 50% OFF</p>
            <Button
              :is-icon-only="false"
              tag="router-link"
              to="/collection"
              class="btn-main"
            >
              Open Collection
            </Button>
          </div>
        </div>

        <!-- img - mobile -->
        <div class="main-right-mobile" v-for="img in imgMain">
          <Img :src="img" alt="fasion" height="391" />
        </div>
        <!-- img - desktop -->
        <div class="main-right-desktop" v-for="img in imgMain">
          <Img :src="img" alt="fasion" height="619" />
        </div>
      </div>
    </Container>
    <Brands class="md:mt-[-1px]" />
  </Section>

  <!-- section -    2  -->
  <Section class="sec-2">
    <Container class="container con-2">
      <div class="box-collection">
        <h2 class="title-collection">New Collection</h2>
        <div class="row-boxs">
          <!--    card    -     1   -->
          <Card class="card-left">
            <template #header>
              <h3 class="card-left-title">Men’s Jacket Collection</h3>
            </template>
            <template #body>
              <Img
                src="../public/2 23.png"
                alt="mode"
                height="339"
                class="card-img-mobile"
              />
              <Img
                src="../public/2 23.png"
                alt="mode"
                height="478"
                class="card-img-desktop"
              />
            </template>
            <template #footer>
              <Button
                :is-icon-only="false"
                tag="router-link"
                to="/"
                class="btn-collection-left"
              >
                Discover Now
              </Button>
            </template>
          </Card>
          <!--      card   -   2     -->
          <Card class="card-right">
            <template #header>
              <h3 class="card-right-title">Men’s Sunglasses Collection</h3>
            </template>
            <template #body>
              <div class="flex items-center mt-[27px]">
                <Img src="../public/3 1.png" class="md:hidden" height="216" />
                <Img
                  src="../public/3 1.png"
                  class="smm:hidden md:flex mt-[69px]"
                  height="455"
                />
                <h4 class="title-off">40% OFF</h4>
              </div>
            </template>
            <template #footer>
              <Button
                :is-icon-only="false"
                tag="router-link"
                to="/"
                class="btn-collection-right"
              >
                Discover Now
              </Button>
            </template>
          </Card>
        </div>
      </div>
    </Container>
  </Section>

  <!-- section      -      3     -->
  <Section class="sec-3">
    <Container>
      <div class="flex flex-col">
        <h2 class="title-sellers">Best Sellers</h2>
        <div class="box-sellers">
          <Row class="flex gap-[15px] flex-wrap">
            <Product
              v-for="(item, index) in visible"
              :product="item"
              :key="item.id"
            />
          </Row>
          <Button :is-icon-only="false" @click="loadMore" class="btn-more">
            {{ titleBtn }}
          </Button>
        </div>
      </div>
    </Container>
  </Section>

  <NavMobile class="fixed bottom-0" />
</template>

--------- script

<script setup>
import { computed, ref } from "vue";


import Section from "@/components/base/Section.vue";
import Container from "@/components/base/Container.vue";
import Header from "@/components/base/Header.vue";
import Nav from "@/components/base/Nav.vue";
import Row from "@/components/base/Row.vue";
import Button from "@/components/base/Button.vue";
import Img from "@/components/base/Img.vue";
import NavMobile from "@/components/main/NavMobile.vue";
import Brands from "@/components/main/Brands.vue";
import Card from "@/components/base/Card.vue";
import Product from "@/components/main/Products.vue";
import { useData } from "@/composables/getData.js";

const url = 'https://fakestoreapi.com/products'
const dataProducts = ref([]);
let limit = 4;
const getDatas = async (limit) => {
  const response = await fetch(`${url}?limit=${limit}`);
  dataProducts.value = await response.json()
}


const imgMain = ["../public/1 1.png"];

const isToggle = ref(false);
const loadMore = () => {
  if(getDatas(4)) {
    isToggle.value = !isToggle.value
    getDatas(16);
  } else {
    isToggle.value = !isToggle.value
    getDatas(4);
  }
};

const titleBtn = computed(() => {
  if (isToggle.value) {
    return "Less Products";
  }
  return "Load More Products";
});

// const { getDatas, datas } = useData({ limit });
const visible = computed(() => {
  if (dataProducts.value) {
    return dataProducts.value;
  }
  return "No Data!";
});



getDatas(limit);



// const router = useRouter();
// const goHome = () => {
//   router.push({
//     name:'home',
//     path:'/'
//   })
// }


// const visibleData = computed(() => {
//   if(visible.value.length && !isToggle.value){
//     return visible.value.slice(0,3)
//   }
//   return visible.value
// })
</script>

<style scoped>
.main::before {
  content: "";
  width: 192px;
  height: 192px;
  border-radius: 50%;
  background: rgba(42, 64, 50, 1);
  position: absolute;
  bottom: 90px;
  z-index: 0;
}

.main::after {
  content: "";
  width: 192px;
  height: 192px;
  border-radius: 50%;
  background: rgba(42, 64, 50, 1);
  position: absolute;
  bottom: 160px;
  left: 120px;
}

@media screen and (min-width: 768px) {
  .main::before {
    content: "";
    width: 308px;
    height: 308px;
    border-radius: 50%;
    background: rgba(42, 64, 50, 1);
    position: absolute;
    bottom: 190px;
    z-index: 0;
    left: 850px;
  }

  .main::after {
    content: "";
    width: 308px;
    height: 308px;
    border-radius: 50%;
    background: rgba(42, 64, 50, 1);
    position: absolute;
    bottom: 60px;
    left: 690px;
  }
}

/* .main::before {
    @apply content-none w-[192px] h-[192px] 
    rounded-full bg-darkgreen absolute bottom-[90px] z-0
  } */

.active {
  color:#fff
}
</style>
