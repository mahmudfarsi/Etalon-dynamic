<template>
    <div>
        <Header class="bg-green py-25px px-80px">
            <Nav class="nav">
              <Row
                :is-simple="true"
                class="nav-row"
              >
                <div class="logo">
                  <p>
                    <a
                      href=""
                      class="logo"
                    >
                      Etalon
                    </a>
                  </p>
                </div>
                <Row
                  tag="ul"
                  class="nav-list"
                >
                  <li>
                    <router-link 
                    :to="{name:'home'}"
                    active-class="active"
                    class="item-list">
                        Home
                    </router-link>
                  </li>
                  <li>
                    <router-link 
                    :to="{name:'store'}"
                    active-class="active"
                    class="item-list">
                        Store
                    </router-link>
                  </li>
                  <li>
                    <router-link 
                    :to="{name:'news'}"
                    active-class="active"
                    class="item-list">
                        new
                    </router-link>
                  </li>
                  <li>
                    <router-link 
                    :to="{name:'contact'}"
                    active-class="active"
                    class="item-list">
                        contact
                    </router-link>
                  </li>
                </Row>
                <Button tag="router-link" :is-icon-only="true" icon="pack" :to="{name:'baskets'}"/>
              </Row>
            </Nav>
        </Header>
        this is contact
    </div>
</template>


<script setup>
    import Header from '@/components/base/Header.vue';
    import Button from '@/components/base/Button.vue'
</script>


<style lang="postcss" scoped>
    .active{
        @apply text-white
    }
</style>