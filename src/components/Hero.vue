<script setup lang="ts">
import { gsap } from 'gsap';

const elHeroText = ref<HTMLElement>();
const elCodeIcon = ref<HTMLElement>();
const elDashboardIcon = ref<HTMLElement>();
const elMarquee = ref<HTMLElement>();

const showMobileAnimation = () => {
  if (
    !elHeroText.value ||
    !elCodeIcon.value ||
    !elDashboardIcon.value ||
    !elMarquee.value
  )
    return;

  const tl = gsap.timeline();
  tl.delay(0.5);
  tl.from(elHeroText.value, { y: 60, opacity: 0, duration: 2 });
  tl.from(elCodeIcon.value, { y: 80, opacity: 0, duration: 2 }, '<');
  tl.from(elDashboardIcon.value, { y: -80, opacity: 0, duration: 2.5 }, '<');

  tl.to(elCodeIcon.value, {
    y: 30,
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: 'power1.inOut',
  });
  tl.to(
    elDashboardIcon.value,
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
    elMarquee.value,
    { x: -395 },
    {
      duration: 1.5,
      ease: 'none',
      x: '+=265',
      repeat: -1,
    },
    '<'
  );
};

const showDesktopAnimation = () => {
  if (
    !elHeroText.value ||
    !elCodeIcon.value ||
    !elDashboardIcon.value ||
    !elMarquee.value
  )
    return;

  const tl1 = gsap.timeline();
  tl1.delay(0.5);
  tl1.from(elCodeIcon.value, { y: -80, opacity: 0, duration: 2 });
  tl1.to(elCodeIcon.value, {
    y: -30,
    duration: 2.5,
    repeat: -1,
    yoyo: true,
    ease: 'power1.inOut',
  });

  const tl2 = gsap.timeline();
  tl2.delay(0.5);
  tl2.from(elHeroText.value, { y: 60, opacity: 0, duration: 1 });
  tl2.from(elDashboardIcon.value, { y: 60, opacity: 0, duration: 1 }, '<');

  tl2.to(elDashboardIcon.value, {
    y: 30,
    duration: 2.5,
    repeat: -1,
    yoyo: true,
    ease: 'power1.inOut',
  });

  // Get scroll length of marquee by dividing the amount of v-for items
  const scrollLength = elMarquee.value.scrollWidth / 10;
  tl2.to(
    elMarquee.value,
    {
      duration: 2,
      ease: 'none',
      x: `+=${scrollLength * 2}`,
      repeat: -1,
    },
    '<'
  );
};

onMounted(() => {
  if (!mqMd.value) {
    showMobileAnimation();
    return;
  }
  showDesktopAnimation();
});
</script>

<template>
  <div class="hero flex flex-col justify-center items-center">
    <div
      class="hero-container w-375px h-510px flex flex-col items-center relative"
      md="w-[min(86.406vw,1244px)] h-[min(49.47vw,711px)]"
    >
      <div
        ref="elHeroText"
        class="hero-text w-full flex flex-col items-center relative"
      >
        <div
          class="relative mt-80px mb-7.5px"
          md="m-0 absolute top-[min(5.738vw,96.63px)] right-[min(18.56vw,267.3px)]"
        >
          <div class="hero-text-1 text-#9FA6FF absolute top-3px left-3px">
            4TH
          </div>
          <div class="hero-text-1 text-green-1 relative">4TH</div>
          <div class="hero-text-1 text-white absolute top-1.5px left-1.5px">
            4TH
          </div>
        </div>
        <div
          class="relative mb-17px"
          md="absolute top-[min(8.64vw,138.43px)] right-[min(28.229vw,406.5px)]"
        >
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
        md="text-size-[min(1.94vw,28px)] leading-[min(2.87vw,41.44px)] mt-[min(17.8vw,270.37px)] mb-[min(7.057vw,101.63px)] -mr-0.8em"
      >
        互動式網頁設計
      </div>

      <div
        font="notosans 700 leading-36px tracking-0.02em"
        text="center neutral-6"
        p="x-39px y-8px"
        rounded="100px"
        bg="yellow-1"
        cursor="pointer"
        hover="bg-yellow-2"
        md="px-[min(5vw,72px)] py-[min(1.388vw,20px)] text-size-[min(1.666vw,24px)]"
      >
        立即報名
      </div>

      <div
        class="w-89.82px h-89.82px"
        position="absolute top-2px left-25px"
        md="w-[min(13.275vw,191.16px)] h-[min(13.275vw,191.16px)] top-[min(9.867vw,156.09px)] left-0"
      >
        <img
          ref="elCodeIcon"
          class="icon-code pointer-events-none"
          :src="getImageUrl('code.png')"
          alt="an icon of code"
          transform="~ rotate-[-19.31deg] scale-80"
          select="none"
        />
      </div>

      <div
        class="w-130.95px h-130.95px"
        position="absolute top-315px right-15px"
        md="w-[min(21.597vw,311px)] h-[min(21.597vw,311px)] top-[min(14.72vw,226px)] right-[min(10.036vw,142.48px)]"
      >
        <img
          ref="elDashboardIcon"
          class="icon-dashboard pointer-events-none"
          :src="getImageUrl('dashboard.png')"
          alt="an icon of dashboard"
          select="none"
        />
      </div>
    </div>
    <div class="container max-w-full overflow-hidden">
      <div
        ref="elMarquee"
        class="marquee flex items-center"
        transform="~ translate-x-[-40%]"
      >
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

  --at-apply: md:(text-size-[min(3.61vw,52px)] leading-[min(3.857vw,55.54px)]);
}

.hero-text-2 {
  --at-apply: font-monument;
  font-size: 42px;
  line-height: 50.4px;
  letter-spacing: 0.2em;
  white-space: nowrap;

  --at-apply: md:(text-size-[min(5.55vw,80px)] leading-[min(6.66vw,96px)]);
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

  --at-apply: x2l:(text-48px leading-57.6px);
}
</style>
