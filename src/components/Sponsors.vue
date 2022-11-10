<script setup lang="ts"></script>

<template>
  <div class="w-full flex flex-col items-center" bg="neutral-3" p="t-60px">
    <div
      class="title flex flex-col items-center"
      position="relative"
      m="b-40px"
    >
      <div
        font="monument 400 leading-48px tracking-0.1em"
        text="32px white"
        sm="text-48px leading-72px"
      >
        SPONSORS
      </div>
      <div
        font="notosans 700 leading-36px"
        text="24px white"
        sm="text-32px leading-48px"
      >
        鑽石級贊助商
      </div>
      <IcStar2 position="absolute top-15px left-[-43px]" />
      <IcStar2
        class="transform scale-59"
        position="absolute top-[-25px] right-[-33px]"
      />
    </div>

    <div
      class="sponsor-blocks flex flex-col items-center"
      m="b-60px"
      sm="flex-row mb-100px"
    >
      <div class="sponsor-item" w="160px" h="160px" p="12px" rounded="32px">
        <img
          class="pointer-events-none"
          :src="getImageUrl('sponsor-1.png')"
          alt="an logo of sponsor"
          select="none"
        />
      </div>
      <div class="sponsor-item" w="160px" h="160px" p="12px" rounded="32px">
        <img
          class="pointer-events-none"
          :src="getImageUrl('sponsor-2.png')"
          alt="an logo of sponsor"
          select="none"
        />
      </div>
      <div class="sponsor-item" w="160px" h="160px" p="12px" rounded="32px">
        <img
          class="pointer-events-none"
          :src="getImageUrl('sponsor-3.png')"
          alt="an logo of sponsor"
          select="none"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sponsor-item {
  position: relative;
  background: white;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 32px;
    padding: 6px;
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

  &:not(:last-child) {
    margin-bottom: 40px;
    --at-apply: sm:(mb-0 mr-60px);
  }
}
</style>
