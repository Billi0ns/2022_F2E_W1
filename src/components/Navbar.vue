<script setup lang="ts">
const dropdown = ref<HTMLElement>();
const toggleMenu = () => {
  if (!dropdown.value) return;
  dropdown.value.classList.toggle('active');
};

const closeMenu = () => {
  if (!dropdown.value) return;

  dropdown.value.classList.remove('active');
};
</script>

<template>
  <div class="navbar">
    <div
      w="full"
      h="72px"
      flex="~"
      items="center"
      p="16px"
      bg="neutral-5"
      position="relative"
      z="1"
      md="px-32px py-24px h-90px"
    >
      <div
        class="hamburger"
        flex="~ col"
        m="r-16px"
        md="hidden"
        @click="toggleMenu"
      >
        <div class="hamburger-line" />
        <div class="hamburger-line" />
        <div class="hamburger-line" />
      </div>

      <f2e_logo m="r-auto" md="transform scale-163 origin-left" />
      <div
        font="notosans leading-20px"
        text="center neutral-1"
        p="x-16px y-9px"
        border="~"
        rounded="30px"
        md="hidden"
      >
        立即報名
      </div>

      <div hidden class="items-center" md="flex">
        <div class="navbar-link" m="r-32px">關卡資訊</div>
        <div class="navbar-link" m="r-32px">攻略資源</div>
        <div class="navbar-link" m="r-48px">求職專區</div>
        <div
          font="notosans leading-20px"
          text="center neutral-1"
          p="x-24px y-12px"
          border="~"
          rounded="30px"
          cursor="pointer"
          md="block"
        >
          登入
        </div>
      </div>
    </div>
    <div
      ref="dropdown"
      class="dropdown-menu"
      w="full"
      h="294px"
      flex="~ col"
      align="center"
      position="absolute top-72px left-0 right-0"
      font="notosans leading-20px"
      text="neutral-2"
      bg="neutral-5"
      p="t-56px x-16px"
      md="hidden"
    >
      <div m="b-32px">關卡資訊</div>
      <div m="b-32px">攻略資源</div>
      <div m="b-40px">求職專區</div>
      <div
        class="w-full"
        font="notosans leading-20px"
        text="center neutral-1"
        p="x-16px y-9px"
        border="~"
        rounded="30px"
      >
        登入
      </div>

      <div
        class="cross"
        position="absolute top-16px right-16px"
        @click="closeMenu"
      >
        <IcCross class="transform scale-140" text="neutral-1" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hamburger-line {
  width: 20px;
  height: 2px;
  margin: 2.5px 0;
  background-color: white;
  border-radius: 20px;
}

.dropdown-menu {
  transform: translateY(-100%);
  transition: transform 0.3s ease-in-out;

  &.active {
    transform: translateY(0);
  }
}

.navbar-link {
  --at-apply: text-neutral-2;
  position: relative;
  transition: color 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    color: white;
    text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.6);

    &::after {
      --at-apply: bg-green-1;
      content: '';
      width: 12px;
      height: 4px;
      border-radius: 20px;
      position: absolute;
      bottom: -8px;
      left: 42%;
    }
  }
}
</style>
