<script setup lang="ts">
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const showMobileAnimation = () => {
  const tl1 = gsap.timeline({
    scrollTrigger: {
      trigger: '.card-1',
      start: 'top 70%',
      end: '+=100px',
      scrub: true,
    },
  });
  const tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: '.card-2',
      start: 'top 70%',
      end: '+=100px',
      scrub: true,
    },
  });
  const tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: '.card-3',
      start: 'top 70%',
      end: '+=100px',
      scrub: true,
    },
  });
  tl1.from('.card-1', { x: '300px', opacity: 0 });
  tl2.from('.card-2', { x: '-300px', opacity: 0 });
  tl3.from('.card-3', { x: '300px', opacity: 0 });
};

const showDesktopAnimation = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.cards-container',
      start: 'top 50%',
      end: 'top 1%',
    },
  });
  tl.from('.theme-description', { y: '100px', opacity: 0, duration: 1 });
  tl.from('.card-1', { y: '300px', opacity: 0, duration: 1 }, '<');
  tl.from('.card-2', { y: '200px', opacity: 0, duration: 1 }, '<');
  tl.from('.card-3', { y: '100px', opacity: 0, duration: 1 }, '<');
  tl.to('.card-1 .flip-card-inner', { rotateY: 180 });
  tl.to('.card-2 .flip-card-inner', { rotateY: 180 });
  tl.to('.card-3 .flip-card-inner', { rotateY: 180 });
};

onMounted(() => {
  if (!mqLg.value) {
    showMobileAnimation();
  } else {
    showDesktopAnimation();
  }
});
</script>

<template>
  <div class="w-full flex flex-col items-center" p="x-37.5px" overflow="hidden">
    <div
      class="title"
      w="286px"
      h="140px"
      p="x-40px y-22px"
      m="t-80px"
      font="notosans 700 leading-48px"
      text="green-1 32px"
      border="~ 3px green-1"
      shadow="green"
      rounded="100px"
      position="relative"
      style="text-shadow: 0px 0px 10px rgba(85, 255, 173, 0.6)"
      sm="w-auto h-auto"
      x2l="text-48px leading-72px mt-180px"
    >
      <div>年度最強合作 三大主題來襲</div>
      <IcLightning class="absolute -top-90px -right-35px transform scale-70" />
    </div>

    <div
      class="theme-description flex flex-col items-center"
      font="notosans 400 leading-28px"
      text="20px neutral-1"
      m="t-40px"
      x2l="text-24px leading-36px"
    >
      <div>各路廠商強強聯手</div>
      <div class="flex flex-col items-center" sm="flex-row">
        <div>共同設計出接地氣的</div>
        <div>網頁互動挑戰關卡</div>
      </div>
    </div>

    <div
      class="cards-container flex flex-col"
      m="t-60px b-80px"
      lg="flex-row mb-5.55vw"
    >
      <div class="flip-card bg-transparent card-1" w="300px" h="360px">
        <div class="flip-card-inner" transform="~ rotate-y-180" lg="rotate-0">
          <div
            class="flip-card-front flex flex-col items-center"
            backface="hidden"
            p="x-56.5px y-50px"
          >
            <div
              class=""
              font="monument 400 leading-48px tracking-0.1em"
              text="32px neutral-1"
              whitespace="nowrap"
            >
              WEEK 1
            </div>
            <img
              class="icon-lock w-166px h-166px pointer-events-none"
              :src="getImageUrl('lock.png')"
              width="188px"
              height="196px"
              alt="an icon of lock"
              select="none"
              m="t-16px"
            />
          </div>
          <div
            class="flip-card-back flex flex-col items-center"
            backface="hidden"
            font="notosans"
            p="t-16px x-24px "
            bg="white"
            transform="~ rotate-y-180"
          >
            <div
              class="tag"
              w="min"
              bg="green-1"
              rounded="8px"
              font="notosans 700 leading-20px"
              text="16px neutral-5"
              p="x-8px y-4px"
              whitespace="nowrap"
            >
              # 板塊設計
            </div>

            <div
              class=""
              font="700 leading-36px"
              text="24px primary-3"
              m="t-16px"
            >
              The F2E 活動網站設計
            </div>
            <div
              class=""
              font="400 leading-28px"
              text="20px primary-3"
              m="t-8px"
            >
              視覺滾動
            </div>
            <img
              class="icon-dashboard w-166px h-166px pointer-events-none"
              :src="getImageUrl('dashboard.png')"
              alt="an icon of dashboard"
              select="none"
            />
            <div class="flex justify-between items-center" w="full" h="56px">
              <div font="monument 400 tracking-0.1em" text="14px primary-2">
                Week 1
              </div>
              <div
                class="flex items-center"
                font="700 leading-18px"
                text="14px primary-3"
              >
                <div class="text-link" cursor="pointer">查看關卡細節</div>
                <div class="ml-5px">↗</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flip-card bg-transparent card-2" w="300px" h="360px">
        <div class="flip-card-inner" transform="~ rotate-y-180" lg="rotate-0">
          <div
            class="flip-card-front flex flex-col items-center"
            backface="hidden"
            p="x-56.5px y-50px"
          >
            <div
              class=""
              font="monument 400 leading-48px tracking-0.1em"
              text="32px neutral-1"
              whitespace="nowrap"
            >
              WEEK 2
            </div>
            <img
              class="icon-lock w-166px h-166px pointer-events-none"
              :src="getImageUrl('lock.png')"
              width="188px"
              height="196px"
              alt="an icon of lock"
              select="none"
              m="t-16px"
            />
          </div>
          <div
            class="flip-card-back flex flex-col items-center"
            backface="hidden"
            font="notosans"
            p="t-16px x-24px "
            bg="white"
            transform="~ rotate-y-180"
          >
            <div
              class="tag"
              w="min"
              bg="green-1"
              rounded="8px"
              font="notosans 700 leading-20px"
              text="16px neutral-5"
              p="x-8px y-4px"
              whitespace="nowrap"
            >
              # 凱鈿行動科技
            </div>

            <div
              class=""
              font="700 leading-36px"
              text="24px primary-3"
              m="t-16px"
            >
              今晚，我想來點點簽
            </div>
            <div
              class=""
              font="400 leading-28px"
              text="20px primary-3"
              m="t-8px"
            >
              CANVAS
            </div>
            <img
              class="icon-canvas w-166px h-166px pointer-events-none"
              transform="~ scale-90"
              :src="getImageUrl('canvas.png')"
              alt="an icon of canvas"
              select="none"
            />
            <div class="flex justify-between items-center" w="full" h="56px">
              <div font="monument 400 tracking-0.1em" text="14px primary-2">
                Week 2
              </div>
              <div
                class="flex items-center"
                font="700 leading-18px"
                text="14px primary-3"
              >
                <div class="text-link" cursor="pointer">查看關卡細節</div>
                <div class="ml-5px">↗</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flip-card bg-transparent card-3" w="300px" h="360px">
        <div class="flip-card-inner" transform="~ rotate-y-180" lg="rotate-0">
          <div
            class="flip-card-front flex flex-col items-center"
            backface="hidden"
            p="x-56.5px y-50px"
          >
            <div
              class=""
              font="monument 400 leading-48px tracking-0.1em"
              text="32px neutral-1"
              whitespace="nowrap"
            >
              WEEK 3
            </div>
            <img
              class="icon-lock w-166px h-166px pointer-events-none"
              :src="getImageUrl('lock.png')"
              width="188px"
              height="196px"
              alt="an icon of lock"
              select="none"
              m="t-16px"
            />
          </div>
          <div
            class="flip-card-back flex flex-col items-center"
            backface="hidden"
            font="notosans"
            p="t-16px x-24px "
            bg="white"
            transform="~ rotate-y-180"
          >
            <div
              class="tag"
              w="min"
              bg="green-1"
              rounded="8px"
              font="notosans 700 leading-20px"
              text="16px neutral-5"
              p="x-8px y-4px"
              whitespace="nowrap"
            >
              # 鈦坦科技
            </div>

            <div
              class=""
              font="700 leading-36px"
              text="24px primary-3"
              m="t-16px"
            >
              Scrum 新手村
            </div>
            <div
              class=""
              font="400 leading-28px"
              text="20px primary-3"
              m="t-8px"
            >
              JS Draggable
            </div>
            <img
              class="icon-sync w-166px h-166px pointer-events-none"
              transform="~ scale-80"
              :src="getImageUrl('sync.png')"
              alt="an icon of sync"
              select="none"
            />
            <div class="flex justify-between items-center" w="full" h="56px">
              <div font="monument 400 tracking-0.1em" text="14px primary-2">
                Week 3
              </div>
              <div
                class="flex items-center"
                font="700 leading-18px"
                text="14px primary-3"
              >
                <div class="text-link" cursor="pointer">查看關卡細節</div>
                <div class="ml-5px">↗</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.flip-card {
  perspective: 1000px;
  &:not(:last-child) {
    margin-bottom: 40px;

    --at-apply: lg:(mb-0 mr-40px);
  }
}
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 16px;
}

.flip-card-front {
  background: linear-gradient(180deg, #9da4ff 0%, #6e77e9 100%);
}

.text-link {
  position: relative;

  &:hover::after {
    content:'';
    width: 100%;
    height: 1px;
    background-color: #6E77E9;
    position: absolute;
    bottom: -3px;
    left: 0;
  }
}
</style>
