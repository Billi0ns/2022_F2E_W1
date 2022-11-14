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
  tl.from(
    '.popup-1',
    {
      duration: 0.8,
      ease: 'elastic.out(0.8, 0.2)',
      scale: 0,
      y: -30,
    },
    '<'
  );
  tl.from('.dialog-2', {
    duration: 0.8,
    ease: 'elastic.out(0.8, 0.2)',
    scale: 0,
    y: -50,
  });
  tl.from(
    '.popup-2',
    {
      duration: 0.8,
      ease: 'elastic.out(0.8, 0.2)',
      scale: 0,
      y: -30,
    },
    '<'
  );
  tl.from('.dialog-3', {
    duration: 0.8,
    ease: 'elastic.out(0.8, 0.2)',
    scale: 0,
    y: -50,
  });
  tl.from(
    '.popup-3',
    {
      duration: 0.8,
      ease: 'elastic.out(0.8, 0.2)',
      scale: 0,
      y: -30,
    },
    '<'
  );
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
  <div ref="observerEl" class="questions w-full flex justify-center">
    <div
      class="w-329px h-475px"
      position="relative"
      m="y-60px"
      sm="w-490px h-471px"
      x2l="w-[min(63.19vw,910px)] h-[min(59.51vw,857px)] my-120px"
    >
      <div
        class="dialog-1"
        position="absolute top-56px left-0"
        sm="top-68px left-7px"
        x2l="top-[min(8.68vw,125px)] left-[min(1.527vw,22px)]"
      >
        <IcDialog
          class="w-268px h-auto text-primary-1"
          sm="w-307px"
          x2l="w-[min(38.194vw,550px)]"
        ></IcDialog>
        <div
          class="dialog-text"
          position="absolute top-26px left-16.34px"
          transform="~ rotate-[-3.36deg]"
          sm="top-35px left-36px"
          x2l="top-[min(3.333vw,48px)] left-[min(3.055vw,44px)]"
        >
          羨慕別人的酷酷網頁動畫？
        </div>
      </div>

      <div
        class="dialog-2"
        position="absolute top-160px right-0"
        sm="top-148.72px"
        x2l="top-[min(20.138vw,290px)]"
      >
        <IcDialog
          class="w-225px h-auto text-green-1 transform scale-x-[-1] rotate-[-7.36deg]"
          sm="w-280px rotate-[-13.36deg]"
          x2l="w-[min(36.8vw,530px)]"
        ></IcDialog>
        <div
          class="dialog-text"
          position="absolute top-20px left-16.34px"
          transform="~ rotate-[-7.26deg]"
          sm="top-32px left-28px rotate-[-12.26deg]"
          x2l="top-[min(3.263vw,47px)] left-[min(4.583vw,66px)]"
        >
          滿足不了同事的許願？
        </div>
      </div>

      <div
        class="dialog-3"
        position="absolute top-335px left-0"
        sm="top-339px left-42px"
        x2l="top-[min(42.83vw,616.8px)] left-[min(6.57vw,94.62px)]"
      >
        <IcDialog
          class="w-274.36px h-auto text-primary-1 transform rotate-[-6.03deg]"
          sm="w-310px rotate-0"
          x2l="w-[min(37.57vw,541px)]"
        ></IcDialog>
        <div
          class="dialog-text"
          position="absolute top-30px left-16.34px"
          transform="~ rotate-[-9.36deg]"
          sm="top-35px left-30px rotate-[-3.36deg]"
          x2l="top-[min(3.125vw,45px)] left-[min(2.708vw,39px)]"
        >
          動畫技能樹太雜無從下手？
        </div>
      </div>

      <IcPopup1
        class="popup-1 absolute top-0 left-54px"
        sm="w-153px h-auto left-50px"
        x2l="w-[min(19.375vw,279px)] left-[min(5.555vw,80px)]"
      />
      <IcPopup2
        class="popup-1 absolute top-12px left-188px"
        sm="w-35px h-auto left-230px"
        x2l="w-[min(4.375vw,63px)] top-[min(2.152vw,31px)] left-[min(28.88vw,416px)]"
      />
      <IcPopup3
        class="popup-1 absolute top-0 left-233.4px"
        sm="w-96px h-auto top-40px left-unset right-60px"
        x2l="w-[min(12.08vw,174px)] top-[min(4.93vw,71px)] right-[min(7.5vw,108px)]"
      />

      <IcPopup4
        class="popup-2 absolute top-170px left-75px"
        sm="w-20px h-auto top-205px left-168px"
        x2l="w-[min(2.777vw,40px)] top-[min(26.46vw,381px)] left-[min(21.94vw,316px)]"
      />
      <IcPopup5
        class="popup-2 absolute top-220px left-0"
        sm="w-140px h-auto -left-10px"
        x2l="w-[min(17.77vw,256px)] top-[min(25.208vw,363px)] left-0 "
      />
      <IcPopup6
        class="popup-2 absolute top-250px right-36px"
        sm="w-74px h-auto top-262px right-26px"
        x2l="w-[min(7.638vw,110px)] top-[min(33.05vw,476px)] left-[min(48.61vw,700px)]"
      />

      <IcPopup7
        class="popup-3 absolute top-267px left-95px"
        sm="w-193px h-auto top-253px left-154px transform rotate-[4.57deg]"
        x2l="w-[min(24.3vw,350px)] top-[min(32.29vw,465px)] left-[min(20.83vw,300px)]"
      />
      <IcPopup8
        class="popup-3 absolute top-405px right-21px"
        sm="w-106px h-auto top-331px right-14px"
        x2l="w-[min(13.4vw,193px)] top-[min(41.8vw,602px)] right-0"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dialog-text {
  --at-apply: font-notosans text-neutral-5;
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;

  --at-apply: x2l:(text-size-[min(2.777vw,40px)] leading-60px);
}
</style>
