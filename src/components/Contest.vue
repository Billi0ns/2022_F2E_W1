<script lang="ts" setup>
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const { observerEl, createObserver } = useCustomObserver();

const setHoverEffects = () => {
  const cardElements = document.querySelectorAll('.race-card');

  cardElements.forEach((container) => {
    const toggleLogo = gsap.timeline({
      reversed: true,
      paused: true,
      defaults: { duration: 0.3 },
    });

    toggleLogo.to(container, { y: '-30px' });

    container.addEventListener('mouseenter', () => toggleLogo.play());
    container.addEventListener('mouseleave', () => toggleLogo.reverse());
  });
};

const isAnimationPlayed = ref(false);
const playAnimation = () => {
  if (isAnimationPlayed.value) return;
  isAnimationPlayed.value = true;

  let tl;
  if (mqX2l.value) {
    tl = gsap.timeline();
    tl.set('.contest', { visibility: 'visible' });
  } else {
    tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.race-text-1',
        start: 'top 50%',
        end: 'top 1%',
      },
    });
  }

  let distance = '0px';
  if (mqXl.value) {
    distance = '-745px';
  } else if (mqSm.value) {
    distance = '-375px';
  } else {
    distance = '-235px';
  }

  tl.from('.race-text-1', {
    duration: 1,
    opacity: 0,
    y: '50px',
  });
  tl.from(
    '.race-card',
    {
      duration: 1,
      opacity: 0,
      y: '200px',
      onComplete: setHoverEffects,
    },
    '<'
  );

  tl.from(
    '.race-text-2',
    {
      duration: 1.3,
      opacity: 0,
    },
    '+=0.5'
  );

  tl.to('.car', {
    duration: 1,
    ease: 'power2.inOut',
    x: distance,
  });

  tl.to('.flag', {
    duration: 0.2,
    ease: 'none',
    transformOrigin: 'left',
    rotate: '-35',
    y: '-5px',
  });
};

onMounted(() => {
  if (mqX2l.value) {
    const targetEl = document.querySelector('.contest');
    targetEl?.setAttribute('style', 'visibility: hidden');
    createObserver(playAnimation);
    return;
  }
  playAnimation();
});
</script>

<template>
  <div ref="observerEl" class="contest w-full flex flex-col items-center">
    <div class="w-343px" sm="w-485px" xl="w-856px">
      <div
        font="notosans 700 leading-36px"
        text="24px white center"
        m="t-82px b-32px"
        style="text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.6)"
        sm="text-32px leading-48px mb-60px"
        xl="flex justify-center text-40px leading-60px"
      >
        <div class="race-text-1">???????????????????????????????????????</div>
        <div class="race-text-2">????????????????????????</div>
      </div>

      <div
        class="race w-full h-40px flex items-end justify-between"
        m="b-60px"
        position="relative"
      >
        <IcFlag class="flag w-36.8px h-40px" />
        <IcCar
          class="car w-75px h-35px transform translate-y-8px translate-x-6px"
        />
        <div
          class="track mt-auto"
          w="full"
          h="3px"
          bg="white"
          shadow="white"
          position="absolute bottom-[-5px] left-0"
        ></div>
      </div>
    </div>
    <div xl="flex">
      <div
        class="race-card w-343px"
        bg="neutral-3"
        rounded="32px"
        p="24px"
        m="b-24px"
        sm="w-485px h-552px"
        xl="mr-80px mb-0"
      >
        <div class="flex flex-col items-center">
          <img
            class="icon-paper pointer-events-none"
            width="80"
            height="80"
            :src="getImageUrl('paper.png')"
            alt="an icon of paper"
            select="none"
          />
          <div
            font="notosans 700 leading-48px"
            text="32px primary-1"
            m="b-40px"
            style="text-shadow: 0px 0px 10px rgba(157, 164, 255, 0.6)"
            sm="text-40px leading-60px"
          >
            ????????????
          </div>
        </div>

        <div font="notosans" text="white" m="b-32px">
          <div font="700 leading-36px" text="24px" m="b-8px">?????????</div>
          <div font="400 leading-28px" text="20px">
            ???????????????????????????UI ??????????????????????????????
          </div>
        </div>

        <div font="notosans" text="white">
          <div font="700 leading-36px" text="24px" m="b-8px">?????????</div>
          <div font="400 leading-28px" text="20px">
            ?????????????????????????????????????????????????????????????????? 12/30(???)
            ????????????????????????????????????
          </div>
        </div>
      </div>

      <div
        class="race-card w-343px"
        bg="neutral-3"
        rounded="32px"
        p="24px"
        m="b-80px"
        sm="w-485px h-552px"
      >
        <div class="flex flex-col items-center">
          <img
            class="icon-coin pointer-events-none"
            width="80"
            height="80"
            :src="getImageUrl('coin.png')"
            alt="an icon of coin"
            select="none"
          />
          <div
            font="notosans 700 leading-48px"
            text="32px primary-1"
            m="b-40px"
            style="text-shadow: 0px 0px 10px rgba(157, 164, 255, 0.6)"
            sm="text-40px leading-60px"
          >
            ??????
          </div>
        </div>

        <div font="notosans" text="white" m="b-24px">
          <div sm="flex items-center">
            <div font="700 leading-36px" text="24px" m="b-8px">???????????????</div>
            <div font="400 leading-28px" text="20px" m="b-8px">
              ????????????
              <span class="text-green-1 ml-8px">????????????</span>
            </div>
          </div>
          <div font="400 leading-20px" text="16px neutral-2" sm="flex">
            <div>??????????????????????????????</div>
            <div>???????????????</div>
          </div>
        </div>

        <div font="notosans" text="white" m="b-24px">
          <div sm="flex items-center">
            <div font="700 leading-36px" text="24px" m="b-8px">
              ??????????????????
            </div>
            <div font="400 leading-28px" text="20px" m="b-8px">
              ?????????
              <span class="text-green-1 ml-8px">NTD 3,000/???</span>
            </div>
          </div>
          <div font="400 leading-20px" text="16px neutral-2">
            ??????????????? 2 ???????????? 1 ???????????? 1 ???
          </div>
        </div>

        <div font="notosans" text="white" m="b-24px">
          <div sm="flex items-center">
            <div font="700 leading-36px" text="24px" m="b-8px">
              ??????????????????
            </div>
            <div font="400 leading-28px" text="20px" m="b-8px">
              ?????????
              <span class="text-green-1 ml-8px">NTD 10,000/???</span>
            </div>
          </div>
          <div font="400 leading-20px" text="16px neutral-2">
            ??????????????? 1 ???
          </div>
        </div>

        <div font="notosans 700 leading-28px" text="white 20px">
          ?????????????????????????????????
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.race-card {
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 32px;
    padding: 3px;
    background: linear-gradient(
      100.38deg,
      #313a65 3.95%,
      rgba(49, 58, 101, 0) 100%
    );
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }

  &:hover {
    &::before {
      background: linear-gradient(90deg, #9da4ff 0%, #55ffad 100%);
    }
  }
}
</style>
