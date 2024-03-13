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
          <Button tag="router-link" :is-icon-only="true" icon="pack" :to="{name:'baskets'}"/>
        </Row>
      </Nav>
    </Header>
    <main
      class="w-full bg-light-gray pt-50px flex flex-row justify-center items-center"
    >
      <Container>
        <Row tag="ul" class="flex flex-wrap gap-15">
          <Products v-for="item in product" :product="item" />
        </Row>
      </Container>
    </main>
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
import { useData } from "@/composables/getData.js";
import Products from "@/components/main/Products.vue";
import Container from "@/components/base/Container.vue";
import NavMobile from "@/components/main/NavMobile.vue";

const limit = 25;
const { getDatas, datas } = useData({ limit });
const product = computed(() => {
  if (datas.value) {
    return datas.value;
  }
  return "No Data!";
});
getDatas();
</script>
