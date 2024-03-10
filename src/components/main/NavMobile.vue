<template>
  <Nav class="w-full bg-yellow md:hidden z-[1000]">
    <Row  tag="ul" class="flex flex-nowrap justify-between">
      <li v-for="icon in dataIcons">
        <Button :is-icon-only="true" :icon="icon" tag="a" />
      </li>
    </Row>
  </Nav>
</template>

<script setup>
import Nav from "@/components/base/Nav.vue";
import Row from "@/components/base/Row.vue";
import Button from "@/components/base/Button.vue";

const dataIcons = ["phone", "badge", "home", "shop", "pack"];
</script>
