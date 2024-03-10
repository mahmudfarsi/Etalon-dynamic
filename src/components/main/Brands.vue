

----------- template

<template>
    <Row tag="ul" class="flex flex-row  nowrap w-full smm:py-[10px] mx-auto mt-[-10px] bg-black px-[12px] gap-[10px] justify-between items-center md:px-[80px] md:py-[30px]">
        <Img v-for="img in dataImg" :src="img" alt="brand" :key="img" height="10"  class="md:hidden"/>
        <Img v-for="img in dataImgDesktop" :src="img" alt="brand" :key="img" height="40" class="smm:hidden md:flex"/>
    </Row>
</template>



<script setup>
    import Row from '@/components/base/Row.vue'
    import Img from '@/components/base/Img.vue'



    const dataImg = [
        '../../../public/Adidas-group-logo-fr.png',
        '../../../public/Prada-Logo.png',
        '../../../public/Logo_NIKE.png',
        '../../../public/H&M-Logo.png',
        '../../../public/Gucci_Logo.png',
        '../../../public/Blk_sports_logo.png'
    ];


    
    const dataImgDesktop = [
        '../../../public/desktop/Adidas-group-logo-fr.png',
        '../../../public/desktop/Prada-Logo.png',
        '../../../public/desktop/Logo_NIKE.png',
        '../../../public/desktop/H&M-Logo.png',
        '../../../public/desktop/Gucci_Logo.png',
        '../../../public/desktop/Blk_sports_logo.png'
    ]
</script>