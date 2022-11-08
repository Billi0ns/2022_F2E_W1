<script setup lang="ts">
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const showMobileAnimation = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.tape-1',
      start: 'top 70%',
      end: 'top 1%',
    },
  });
  tl.to('.tape-1', {
    xPercent: -20,
    ease: 'power1.inOut',
    duration: 2.5,
  });
  tl.to('.tape-2', { xPercent: 20, ease: 'power1.inOut', duration: 2.5 }, '<');

  tl.from(
    ['.poster-title', '.poster-text'],
    {
      scale: 0,
      opacity: 0,
      duration: 2,
      delay: 0.5,
    },
    '<'
  );
  tl.from(
    '.hand-1',
    {
      yPercent: 150,
      opacity: 0,
      duration: 2,
    },
    '<'
  );
  tl.from(
    '.hand-2',
    {
      yPercent: -150,
      opacity: 0,
      duration: 2,
    },
    '<'
  );
  tl.from(
    '.poster-badge-1',
    {
      xPercent: -30,
      yPercent: 20,
      opacity: 0,
      rotate: 45,
      duration: 2,
    },
    '<'
  );
  tl.from(
    '.poster-badge-2',
    {
      xPercent: 40,
      yPercent: -50,
      opacity: 0,
      rotate: 45,
      duration: 2,
    },
    '<'
  );
};

const showDesktopAnimation = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.tape-1',
      start: 'top 40%',
      end: 'top 1%',
    },
  });
  tl.to('.tape-1', { xPercent: -20, ease: 'power1.inOut', duration: 2.5 });
  tl.to('.tape-2', { xPercent: 20, ease: 'power1.inOut', duration: 2.5 }, '<');

  tl.from(
    ['.poster-title', '.poster-text'],
    {
      scale: 0,
      opacity: 0,
      duration: 2,
    },
    '<'
  );
  tl.from(
    '.hand-1',
    {
      xPercent: 150,
      opacity: 0,
      duration: 2,
    },
    '<'
  );
  tl.from(
    '.hand-2',
    {
      xPercent: -150,
      opacity: 0,
      duration: 2,
    },
    '<'
  );
  tl.from(
    '.poster-badge-1',
    {
      xPercent: -30,
      yPercent: 20,
      opacity: 0,
      rotate: 45,
      duration: 2,
    },
    '<'
  );
  tl.from(
    '.poster-badge-2',
    {
      xPercent: 40,
      yPercent: -50,
      opacity: 0,
      rotate: 45,
      duration: 2,
    },
    '<'
  );
};

onMounted(() => {
  if (!mqSm.value) {
    showMobileAnimation();
  } else {
    showDesktopAnimation();
  }
});
</script>

<template>
  <div
    class="w-full h-175.06vw flex flex-col justify-between relative overflow-hidden"
    sm="h-48.52vw"
  >
    <div class="grid-bg w-full h-full absolute inset-0"></div>
    <img
      :src="getImageUrl('hand.png')"
      alt="hand icon"
      class="hand-1 absolute top-12.8vw left-34.133vw w-32vw h-32vw pointer-events-none select-none"
      sm="top-12.93vw left-15.3vw w-14vw h-14vw transform -rotate-45 scale-x-[-1]"
    />
    <div class="h-10.667vw overflow-hidden" sm="h-4.66vw ">
      <IcTapeMobile class="tape-1 w-auto h-full transform" />
    </div>

    <img
      :src="getImageUrl('poster-title.png')"
      alt="poster icon"
      class="poster-title absolute top-46vw left-1/2 transform translate-x-[-50%] w-86.93vw h-max-54.93vh pointer-events-none select-none"
      sm="top-11.3vw w-38.84vw h-23.29vw"
    />

    <div
      class="poster-text absolute top-104.45vw left-1/2 transform translate-x-[-50%] flex items-center whitespace-nowrap font-notosans font-700 text-size-3.733vw leading-5.498vw text-neutral-6"
      sm="top-36.77vw text-size-1.67vw leading-2.5vw"
    >
      <div>前端工程師</div>
      <IcCross class="mx-8.264vw" sm="mx-3.72vw" />
      <div>UI設計師</div>
    </div>

    <img
      :src="getImageUrl('hand.png')"
      alt="hand icon"
      class="hand-2 absolute top-115.33vw right-34.133vw w-32vw h-32vw transform rotate-180 scale-x-[-1] pointer-events-none select-none"
      sm="top-12.93vw right-15.3vw w-14vw h-14vw transform rotate-45 scale-x-[1]"
    />

    <IcPosterBadge1
      class="poster-badge-1 absolute -bottom-8vw -left-7vw w-55vw h-55vw"
      sm="-bottom-3vw left-10.83vw w-22vw h-22vw"
    />
    <IcPosterBadge2
      class="poster-badge-2 absolute top-23.68vw -bottom-8vw right-4.136vw w-30vw h-30vw"
      sm="top-3.78vw right-23.96vw w-12vw h-12vw"
    />

    <div class="h-10.667vw overflow-hidden" sm="h-4.66vw">
      <IcTapeMobile class="tape-2 w-auto h-full transform translate-x-[-20%]" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.grid-bg {
  background-color: white;
  background-image: url('~/assets/grid-bg.png');
  background-size: cover;
}
</style>
