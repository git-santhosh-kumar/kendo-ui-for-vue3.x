<script setup lang="ts">
import { onMounted, ref } from "vue"
import { Drawer, DrawerContent, DrawerItem } from "@progress/kendo-vue-layout";
// import CounterCard from './components/CounterCard.vue'
// import DataGrid from "./components/DataGrid.vue";
import HeaderBand from "./components/HeaderBand.vue";
import { bellIcon, calendarIcon, cartIcon, envelopLinkIcon, flashManagerIcon, homeIcon, inboxIcon, questionCircleIcon, starOutlineIcon, userIcon, chevronRightIcon,
  chevronDownIcon,
  commentIcon, } from "@progress/kendo-svg-icons";
import { useRouter } from "vue-router";
import { SvgIcon } from "@progress/kendo-vue-common";

const toggleMenu = ref(true);
const routerItems = ref([
  {
    id: 1,
    text: "Home",
    svgIcon: homeIcon,
    selected: true,
    data: {
      path: "/"
    },
  },
  {
    id: 2,
    text: "About",
    svgIcon: questionCircleIcon,
    data: {
      path: "/about",
    },
  },
  {
    id: 3,
    text: "Products",
    svgIcon: cartIcon,
    data: {
      path: "/products",
    },
  },
  {
    id: 4,
    text: "Users",
    svgIcon: userIcon,
    data: {
      path: "/users",
    },
  },
  {
    id: 5,
    text: "Posts",
    svgIcon: flashManagerIcon,
    data: {
      path: "/posts",
    },
  },
  {
    separator: true,
  },
  {
    id: 6,
    text: "Notifications",
    svgIcon: bellIcon,
    data: {
      path: "/notifications",
    },
  },
  {
    id: 7,
    text: "Calendar",
    svgIcon: calendarIcon,
    data: {
      path: "/calendar",
    },
  },
  {
    id: 8,
    text: "Attachments",
    svgIcon: envelopLinkIcon,
    icon: "hyperlink-email",
    data: {
      path: "/attachments",
    },
  },
  {
    id: 9,
    text: "Favourites",
    svgIcon: starOutlineIcon,
    data: {
      path: "/favourites",
    },
  },
]);

const selectedId: any = ref(0);
const position: string = "start";
const mode: string = "push"; // push || overlay
const router = useRouter();

// lifecycle hooks
onMounted(() => {
  console.log(`App component mounted!`);
  console.log("routerItems.value[selectedId].data: ", selectedId.value, routerItems.value[selectedId.value].data)
  const routerPath: any = routerItems.value[selectedId.value].data;
  // router.push(routerPath);
});

function handleClickListener() {
  console.log("Listening handleClick Event.")
  toggleMenu.value = !toggleMenu.value;
  console.log("toggleMenu: ", toggleMenu.value)
}

function onSelect(data: any) {
  console.log("data: ", data);
  selectedId.value = data.itemIndex;
  const routerPath: any = routerItems.value[data.itemIndex].data;
  console.log("routerPath: ", routerPath)
  router.push(routerPath);
}
</script>

<template>  
  <header-band @handleClickEvent="handleClickListener"></header-band>
  <main>
    <Drawer
      :expanded="toggleMenu"
      :position="position"
      :mode="mode"
      :mini="true"
      :width="220"
      :items="
        routerItems.map((item, index) => ({
          ...item,
          selected: index === selectedId,
        }))
      "
      @select="onSelect($event)"

    >
      <!-- <template v-slot:CustomItem="{ props }">
        <DrawerItem 
          v-if="props.visible !== false"
          v-bind="props"
          @click="props.onClick"
        >
          <span><SvgIcon :icon="props.svgIcon" /></span>
          <span class="k-item-text">{{ props.text }}</span>

          <span
            v-if="props['data-expanded'] !== undefined"
            :style="{
              position: 'absolute',
              right: '10px',
              visibility: toggleMenu ? '' : 'hidden',
            }"
          >
            <SvgIcon
              :icon="
                props['data-expanded'] ? chevronDownIcon : chevronRightIcon
              "
            />
          </span>
        </DrawerItem>
      </template> -->
      <DrawerContent>
        <router-view />
      </DrawerContent>
    </Drawer>
    <!-- <counter-card></counter-card>
    <data-grid /> -->
  </main>
</template>
