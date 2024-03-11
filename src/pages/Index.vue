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
                  <p class="logo">Etalon</p>
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
              <Button
                tag="router-link"
                :is-icon-only="true"
                icon="pack"
                :to="{ name: 'baskets' }"
                class="flex"
              />
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
              class="btn-main flex"
            >
              Open Collection
            </Button>
          </div>
        </div>

        <div class="md:pl-[100px] relative">
          <p class="font-lato font-500 text-[36px]
           text-white absolute top-[120px] left-[30px] smm:hidden md:flex"
          >
            $299
          </p>
          <!-- img - mobile -->
          <div class="main-right-mobile circle">
            <Img src="../public/1 1.png" alt="fasion" height="391" />
          </div>
          <!-- img - desktop -->
          <div class="main-right-desktop circle">
            <Img src="../public/1 1.png" alt="fasion" height="619" />
          </div>
          <div
            class="rounded-full bg-yellow w-[110px] h-[110px] p-[50px] flex
            justify-center items-center absolute
            top-[160px] left-[100px] z-[999] smm:hidden md:flex"
          >
            <span class="font-roboto font-700 text-[26px]"> 40% OFF </span>
          </div>
          <div class="flex flex-col gap-[10px] items-center absolute right-0 top-[230px] smm:hidden md:flex">
            <div class="w-[21px] h-[21px] bg-white rounded-full"></div>
            <div class="w-[16px] h-[16px] bg-opacity-20 rounded-full"></div>
            <div class="w-[16px] h-[16px] bg-opacity-20 rounded-full"></div>
          </div>
          <div class="btns flex gap-[15px] absolute left-0 bottom-[30px] smm:hidden md:flex">
            <Button  icon="left" class="bg-green border-none"/>
            <Button  icon="right" class="bg-green border-none"/>
          </div>
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
    <Container class="min-w-full">
      <div class="flex flex-col overflow-hidden">
        <h2 class="title-sellers smm:pl-[10px] md:pl-0">Best Sellers</h2>
        <div class="box-sellers">
          <Row class="w-full flex smm:flex-nowrap md:flex-wrap overflow-x-scroll gap-[15px] flex-wrap pl-[5px]">
            <Product
              v-for="(item, index) in visible"
              :product="item"
              :key="item.id"
            />
          </Row>
          <Button :is-icon-only="false" @click="loadMore" class="btn-more ">
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
// import { useData } from "@/composables/getData.js";

const url = "https://fakestoreapi.com/products";
const dataProducts = ref([]);

const getDatas = async (limit) => {
  const response = await fetch(`${url}?limit=${limit}`);
  dataProducts.value = await response.json();
};

const isToggle = ref(false);
const loadMore = () => {
  if (!isToggle.value) {
    isToggle.value = !isToggle.value;
    getDatas(20);
  } else {
    isToggle.value = !isToggle.value;
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

getDatas(4);

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
.circle::before {
  content: "";
  width: 192px;
  height: 192px;
  border-radius: 50%;
  background: rgba(27, 45, 34, 1);
  position: absolute;
  right: 55px;
  bottom: 90px;
  z-index: -1;
}

.circle::after {
  content: "";
  width: 192px;
  height: 192px;
  border-radius: 50%;
  background: rgba(27, 45, 34, 1);
  position: absolute;
  bottom: 150px;
  left: 75px;
  z-index: -1;
}

@media screen and (min-width: 768px) {
  .circle::before {
    content: "";
    width: 308px;
    height: 308px;
    border-radius: 50%;
    background: rgba(27, 45, 34, 1);
    position: absolute;
    top: 125px;
    z-index: -1;
    right: -80px;
  }

  .circle::after {
    content: "";
    width: 308px;
    height: 308px;
    border-radius: 50%;
    background: rgba(27, 45, 34, 1);
    position: absolute;
    bottom: 90px;
    left: -70px;
    z-index: -1;
  }
}

/* .main::before {
    @apply content-none w-[192px] h-[192px] 
    rounded-full bg-darkgreen absolute bottom-[90px] z-0
  } */

.active {
  color: #fff;
}
</style>
