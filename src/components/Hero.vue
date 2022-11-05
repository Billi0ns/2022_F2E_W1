<script setup lang="ts">
import { gsap } from 'gsap';
onMounted(() => {
  const tl = gsap.timeline();
  tl.from('.hero-text', { y: 60, opacity: 0, duration: 2 });
  tl.from('.icon-code', { y: 80, opacity: 0, duration: 2 }, '<');
  tl.from('.icon-dashboard', { y: -80, opacity: 0, duration: 2.5 }, '<');

  tl.to('.icon-code', {
    y: 30,
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: 'power1.inOut',
  });
  tl.to(
    '.icon-dashboard',
    {
      y: -30,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
    },
    '<'
  );
  tl.fromTo(
    '.marquee',
    { x: -395 },
    {
      duration: 1.5,
      ease: 'none',
      x: '+=265',
      repeat: -1,
    },
    '<'
  );
});
</script>

<template>
  <div class="hero flex flex-col justify-center items-center">
    <div
      class="hero-container w-full max-w-375px h-510px flex flex-col items-center relative"
    >
      <div class="hero-text flex flex-col items-center">
        <div class="relative mt-80px mb-7.5px">
          <div class="hero-text-1 text-#9FA6FF absolute top-3px left-3px">
            4TH
          </div>
          <div class="hero-text-1 text-green-1 relative">4TH</div>
          <div class="hero-text-1 text-white absolute top-1.5px left-1.5px">
            4TH
          </div>
        </div>
        <div class="relative mb-17px">
          <div class="hero-text-2 text-#9FA6FF absolute top-5px left-5px">
            THE F2E
          </div>
          <div class="hero-text-2 text-green-1 relative">THE F2E</div>
          <div class="hero-text-2 text-white absolute top-2px left-2px">
            THE F2E
          </div>
        </div>
      </div>
      <div
        font="notosans 700 leading-20px tracking-0.8em"
        text="20px white"
        m="b-45px"
      >
        互動式網頁設計
      </div>

      <div
        font="notosans 700 leading-36px tracking-0.02em"
        text="center neutral-6"
        p="x-39px y-8px"
        rounded="30px"
        bg="yellow-1"
        cursor="pointer"
      >
        立即報名
      </div>

      <img
        class="icon-code"
        :src="getImageUrl('code.png')"
        alt="an icon of code"
        width="70"
        height="70"
        transform="~ rotate-[-19.31deg]"
        position="absolute top-2px left-25px"
      />

      <img
        class="icon-dashboard"
        :src="getImageUrl('dashboard.png')"
        alt="an icon of dashboard"
        width="105"
        height="105"
        position="absolute top-315px right-15px"
      />
    </div>
    <div class="container max-w-full overflow-hidden">
      <div class="marquee flex items-center">
        <template v-for="_ in 10" :key="_">
          <div class="marquee-text fill-white whitespace-nowrap">JOIN US</div>
          <IcStar class="min-w-30px mx-30px"></IcStar>
        </template>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero-text-1 {
  --at-apply: font-pilot;
  font-size: 27px;
  line-height: 29px;
  letter-spacing: 0.2em;
}

.hero-text-2 {
  --at-apply: font-monument;
  font-size: 42px;
  line-height: 50.4px;
  letter-spacing: 0.2em;
  white-space: nowrap;
}

.marquee-text {
  --at-apply: font-monument;
  background: -webkit-linear-gradient(90deg, #9fa6ff 0%, #55ffad 100%);
  -webkit-background-clip: text;
  -webkit-text-stroke: 4px transparent;
  font-weight: 400;
  font-size: 28px;
  line-height: 34px;
  letter-spacing: 0.08em;
}
</style>
