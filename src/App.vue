<script setup lang="ts">
import { onMounted, ref } from "vue"
import { Drawer, DrawerContent } from "@progress/kendo-vue-layout";
import CounterCard from './components/CounterCard.vue'
import DataGrid from "./components/DataGrid.vue";
import HeaderBand from "./components/HeaderBand.vue";
import { bellIcon, calendarIcon, cartIcon, envelopLinkIcon, flashManagerIcon, homeIcon, inboxIcon, questionCircleIcon, starOutlineIcon, userIcon } from "@progress/kendo-svg-icons";
import { useRouter } from "vue-router";

const toggleMenu = ref(true);
const routerItems = ref([
  {
    text: "Home",
    svgIcon: homeIcon,
    selected: true,
    data: {
      path: "/"
    },
  },
  {
    text: "About",
    svgIcon: questionCircleIcon,
    data: {
      path: "/about",
    },
  },
  {
    text: "Products",
    svgIcon: cartIcon,
    data: {
      path: "/products",
    },
  },
  {
    text: "Users",
    svgIcon: userIcon,
    data: {
      path: "/users",
    },
  },
  {
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
    text: "Notifications",
    svgIcon: bellIcon,
    data: {
      path: "/notifications",
    },
  },
  {
    text: "Calendar",
    svgIcon: calendarIcon,
    data: {
      path: "/calendar",
    },
  },
  {
    text: "Attachments",
    svgIcon: envelopLinkIcon,
    icon: "hyperlink-email",
    data: {
      path: "/attachments",
    },
  },
  {
    text: "Favourites",
    svgIcon: starOutlineIcon,
    data: {
      path: "/favourites",
    },
  },
]);

const selectedId: any = ref(0);
const position: string = "start";
const mode: string = "push";
const router = useRouter();

// lifecycle hooks
onMounted(() => {
  console.log(`App component mounted!`);
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
  // handleClickListener();
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
      :items="
        routerItems.map((item, index) => ({
          ...item,
          selected: index === selectedId,
        }))
      "
      @select="onSelect"
    >
      <DrawerContent>
        <router-view />
      </DrawerContent>
    </Drawer>
    <!-- <counter-card></counter-card>
    <data-grid /> -->
  </main>
</template>
