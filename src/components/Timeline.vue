<script setup lang="ts"></script>

<template>
  <div class="w-full flex flex-col items-center" bg="neutral-4" p="t-76px">
    <div class="flex items-center" m="b-36px">
      <IcPacmanLeft></IcPacmanLeft>
      <div
        font="notosans 700 leading-48px"
        text="32px white"
        m="x-16px"
        style="text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.6)"
        sm="text-40px leading-60px"
        x2l="text-48px leading-72px"
      >
        活動說明
      </div>
      <IcPacmanRight></IcPacmanRight>
    </div>

    <div class="timeline-container grid" x2l="grid-cols-2 gap-144px relative">
      <IcTriangle
        class="hidden"
        x2l="block absolute top-130px left-1/2 transform -translate-x-1/2 -rotate-90"
      />
      <IcTriangle
        class="hidden"
        x2l="block absolute top-1/2 right-220px transform -translate-y-1/2"
      />
      <IcTriangle
        class="hidden"
        x2l="block absolute bottom-130px left-1/2 transform -translate-x-1/2 rotate-90"
      />
      <div class="card-container">
        <div
          class="card flex flex-col items-center"
          w="343px"
          border="~ 3px white hover:primary-1"
          rounded="32px"
          p="t-21px b-26px x-26px"
          sm="flex-row justify-between items-center w-520px h-300px px-48px py-36px"
        >
          <img
            class="icon-pencil w-74px h-89px pointer-events-none"
            :src="getImageUrl('pencil.png')"
            alt="an icon of pencil"
            m="b-22px"
            select="none"
            sm="w-88.8px h-106.8px mb-0"
          />

          <div
            class="flex flex-col items-center"
            font="notosans leading-28px"
            text="white 20px"
            sm="items-start w-260px"
          >
            <div
              class="text-effect"
              font="700 leading-36px"
              text="24px"
              m="b-16px"
              sm="text-32px leading-48px"
            >
              開放報名
            </div>
            <div class="flex" m="b-8px">
              <div text="green-1" m="r-8px">10/13</div>
              <div>(四) 早上 11:00</div>
            </div>
            <div class="w-2px h-12px bg-white" m="b-8px" sm="mx-auto"></div>
            <div class="flex" m="b-16px">
              <div text="green-1" m="r-8px">10/30</div>
              <div>(日) 晚上 23:59</div>
            </div>
            <div>截止前可修改報名組別</div>
          </div>
        </div>

        <IcTriangle class="w-full my-24px" x2l="hidden" />
      </div>
      <div class="card-container">
        <div
          class="card flex flex-col items-center"
          w="343px"
          border="~ 3px white hover:primary-1"
          rounded="32px"
          p="t-21px b-26px x-26px"
          sm="flex-row-reverse justify-between items-center w-520px h-300px px-48px py-36px"
        >
          <img
            class="icon-clock w-74px h-89px pointer-events-none"
            :src="getImageUrl('clock.png')"
            alt="an icon of clock"
            m="b-22px"
            select="none"
            sm="w-88.8px h-106.8px mb-0"
          />

          <div
            class="flex flex-col items-center"
            font="notosans leading-28px"
            text="white 20px"
            sm="items-start w-260px"
          >
            <div
              class="text-effect"
              font="700 leading-36px"
              text="24px"
              m="b-16px"
              sm="text-32px leading-48px"
            >
              各組別開賽
            </div>
            <div class="flex" m="b-8px">
              <div text="green-1" m="r-8px">10/31</div>
              <div>UI組、團體組開賽</div>
            </div>
            <div class="flex" m="b-16px">
              <div text="green-1" m="r-8px">11/07</div>
              <div>前端組開賽</div>
            </div>
            <div class="text-center">前端工程師可採用</div>
            <div>UI 設計師的設計稿產出完整作品</div>
          </div>
        </div>

        <IcTriangle class="w-full my-24px" x2l="hidden" />
      </div>
      <div class="card-container" x2l="order-4">
        <div
          class="card flex flex-col items-center"
          w="343px"
          border="~ 3px white hover:primary-1"
          rounded="32px"
          p="t-21px b-26px x-26px"
          sm="flex-row justify-between items-center w-520px h-300px px-48px py-36px"
        >
          <img
            class="icon-file w-86px h-103px pointer-events-none"
            :src="getImageUrl('file.png')"
            alt="an icon of file"
            m="b-22px"
            select="none"
            sm="w-103.6px h-124.6px mb-0"
          />

          <div
            class="flex flex-col items-center"
            font="notosans leading-28px"
            text="white 20px"
            sm="items-start w-260px"
          >
            <div
              class="text-effect"
              font="700 leading-36px"
              text="24px"
              m="b-16px"
              sm="text-32px leading-48px"
            >
              登錄作品
            </div>
            <div class="flex" m="b-8px">
              <div text="green-1" m="r-8px">10/31</div>
              <div>(一) 中午 12:00</div>
            </div>
            <div class="w-2px h-12px bg-white" m="b-8px" sm="mx-auto"></div>
            <div class="flex" m="b-16px">
              <div text="green-1" m="r-8px">11/28</div>
              <div>(一) 中午 12:00</div>
            </div>
            <div>依賽程登錄作品</div>
          </div>
        </div>

        <IcTriangle class="w-full my-24px" x2l="hidden" />
      </div>
      <div class="card-container">
        <div
          class="card flex flex-col items-center"
          w="343px"
          border="~ 3px white hover:primary-1"
          rounded="32px"
          p="t-21px b-26px x-26px"
          sm="flex-row-reverse justify-between items-center w-520px h-300px px-48px py-36px"
        >
          <img
            class="icon-media w-100px h-100px pointer-events-none"
            :src="getImageUrl('media.png')"
            alt="an icon of media"
            m="b-22px"
            select="none"
            sm="mb-0"
          />

          <div
            class="flex flex-col items-center"
            font="notosans leading-28px"
            text="white 20px"
            sm="items-start w-260px"
          >
            <div
              class="text-effect"
              font="700 leading-36px"
              text="24px"
              m="b-16px"
              sm="text-32px leading-48px"
            >
              線上直播
            </div>
            <div class="flex">
              <div text="green-1" m="r-8px">11/03 - 11/24</div>
              <div>每週四</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card:hover .text-effect {
  --at-apply: text-primary-1;
  text-shadow: 0px 0px 10px rgba(157, 164, 255, 0.6);
}
</style>
