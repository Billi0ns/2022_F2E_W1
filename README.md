# The F2E 4th - Week 1

![Web Cover Image](/public/WebCover.png)

UIUX Designer - [Jenny Wu](https://2022.thef2e.com/users/12061549261447630282)

設計稿 - [Figma](https://www.figma.com/file/M2aMcZsEIKBbRdLkj7fCAd/F2E-%2F-W1%3A-%E6%B4%BB%E5%8B%95%E7%B6%B2%E7%AB%99%E8%A8%AD%E8%A8%88?node-id=90%3A702)

Demo - [The F2E 4th 活動網站設計](https://2022-thef2e.netlify.app)

## 開發心得

大部分都盡量照著 UI 做 RWD 跟動畫了，除了問題冒泡那段的小裝飾物因爲有點有點懶所以沒加上去...

上下捲動跳轉是做到後面才發現要加的，幸好後來想到可以用 scroll-snap 固定滑動到某元件，再配合 Intersection Observer 在元件出現在正中央時觸發動畫，因此調整後桌面版滾動也比較流暢。
手機版因爲螢幕高度不夠就沒有加了，避免滾動後視窗剛好卡在奇怪的地方

寫的時候因為有時間壓力基本上都沒在管複用，搭配 tailwind 劈哩啪啦一堆 code 寫在一起，先求能動就好 XD

重構這件事等之後有時間心血來潮再說吧 🤣

## 有趣的 bug？

寫完贊助廠商那塊後，用 Netlify 的連結觀看時發現網站上的廠商區塊都消失了

研究一番後發現原來是因為 class 名稱 `.sponsor-block`被 Adguard 的規則擋了，把名稱改為`.sponsor-item`後就正常了

以後會記得 class 如果有取到跟 `.sponsor`相關的要小心，不然可能就無意間觸發的擋廣告機制了

## 使用技術

- [Vue 3](https://github.com/vuejs/core)

- [Vite](https://github.com/vitejs/vite)

- [UnoCSS](https://github.com/antfu/unocss)

- [GSAP](https://greensock.com/gsap/)
