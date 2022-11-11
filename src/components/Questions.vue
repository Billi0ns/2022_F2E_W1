<script setup lang="ts">
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const { observerEl, createObserver } = useCustomObserver();
const isAnimationPlayed = ref(false);

const playAnimation = () => {
  if (isAnimationPlayed.value) return;
  isAnimationPlayed.value = true;

  let tl;
  if (mqX2l.value) {
    tl = gsap.timeline();
    tl.set('.questions', { visibility: 'visible' });
  } else {
    tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.dialog-1',
        start: 'top 70%',
        end: 'top 1%',
        // markers: true,
      },
    });
  }

  tl.from('.dialog-1', {
    duration: 0.8,
    ease: 'elastic.out(0.8, 0.2)',
    scale: 0,
    y: -50,
  });
  tl.from('.dialog-2', {
    duration: 0.8,
    ease: 'elastic.out(0.8, 0.2)',
    scale: 0,
    y: -50,
  });
  tl.from('.dialog-3', {
    duration: 0.8,
    ease: 'elastic.out(0.8, 0.2)',
    scale: 0,
    y: -50,
  });
};

onMounted(() => {
  if (mqX2l.value) {
    const targetEl = document.querySelector('.questions');
    targetEl?.setAttribute('style', 'visibility: hidden');
    createObserver(playAnimation);
    return;
  }
  playAnimation();
});
</script>

<template>
  <div
    ref="observerEl"
    class="questions w-full h-510px flex justify-center"
    md="h-650px"
    x2l="h-[min(76.25vw,1098px)]"
  >
    <div
      class="container w-329px"
      position="relative"
      md="w-532.78px"
      x2l="w-[min(67.838vw,970.32px)]"
    >
      <div
        class="dialog-1"
        position="absolute top-82.78px left-0"
        md="top-127.75px left-28px"
        x2l="top-[min(16.9vw,243.38px)] left-[min(3.542vw,51.01px)]"
      >
        <IcDialog
          class="w-274.36px h-117.27px text-primary-1"
          md="w-307px h-128px"
          x2l="w-[min(39.236vw,560px)] h-[min(14vw,217px)]"
        ></IcDialog>
        <div
          class="dialog-text"
          position="absolute top-30px left-16.34px"
          transform="~ rotate-[-3.36deg]"
          md="top-35px left-36px"
          x2l="top-[min(3.263vw,47px)] left-[min(3.958vw,57px)]"
        >
          羨慕別人的酷酷網頁動畫？
        </div>
      </div>

      <div
        class="dialog-2"
        position="absolute top-194.03px right-0"
        md="top-198.72px"
        x2l="top-[min(25.87vw,372.64px)]"
      >
        <IcDialog
          class="w-240px h-95px text-green-1 transform scale-x-[-1] rotate-[-7.36deg]"
          md="w-280px h-120px rotate-[-13.36deg]"
          x2l="w-[min(36.8vw,530px)] h-[min(12.29vw,183px)]"
        ></IcDialog>
        <div
          class="dialog-text"
          position="absolute top-20px left-16.34px"
          transform="~ rotate-[-7.26deg]"
          md="top-32px left-28px rotate-[-12.26deg]"
          x2l="top-[min(2.361vw,34px)] left-[min(4.583vw,66px)]"
        >
          滿足不了同事的許願？
        </div>
      </div>

      <div
        class="dialog-3"
        position="absolute top-360.66px left-0"
        md="top-398.69px left-67.85px"
        x2l="top-[min(51.168vw,736.83px)] left-[min(8.581vw,123.57px)]"
      >
        <IcDialog
          class="w-274.36px h-117.27px text-primary-1 transform rotate-[-6.03deg]"
          md="w-310px h-127px"
          x2l="w-[min(39.236vw,560px)] h-[min(14vw,217px)]"
        ></IcDialog>
        <div
          class="dialog-text"
          position="absolute top-30px left-16.34px"
          transform="~ rotate-[-9.36deg]"
          md="top-35px left-30px"
          x2l="top-[min(3.125vw,45px)] left-[min(3.958vw,57px)]"
        >
          動畫技能樹太雜無從下手？
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dialog-text {
  --at-apply: font-notosans text-neutral-5;
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;

  --at-apply: x2l:(text-size-[min(2.7vw,38px)] leading-60px);
}
</style>
