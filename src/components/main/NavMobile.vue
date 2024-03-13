<template>
  <Nav class="w-full bg-yellow md:hidden z-1000">
    <Row  tag="ul" class="flex flex-nowrap justify-between">
      <li>
        <Button :is-icon-only="true" icon="phone" tag="router-link" :to="{name:'phone'}"/>
      </li>
      <li>
        <Button :is-icon-only="true" icon="badge" tag="router-link" :to="{name:'badges'}" />
      </li>
      <li>
        <Button :is-icon-only="true" icon="home" tag="router-link" :to="{name:'home'}" />
      </li>
      <li>
        <Button :is-icon-only="true" icon="shop" tag="router-link" :to="{name:'shop'}" />
      </li>
      <li>
        <Button :is-icon-only="true" icon="pack" tag="router-link" :to="{name:'baskets'}" />
      </li>
    </Row>
  </Nav>
</template>

<script setup>
import Nav from "@/components/base/Nav.vue";
import Row from "@/components/base/Row.vue";
import Button from "@/components/base/Button.vue";

// const dataIcons = ["phone", "badge", "home", "shop", "pack"];
</script>
