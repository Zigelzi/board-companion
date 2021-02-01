import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/Index.vue";
import CalculateCharPoints from "../views/CalculateCharPoints.vue";
import CalculateGrossPoints from "../views/CalculateGrossPoints.vue";
import CalculateIndustryPoints from "../views/CalculateIndustryPoints.vue";
import GameIndex from "../views/GameIndex.vue";
import NewGame from "../views/NewGame.vue";
import Replay from "../views/Replay.vue";
import TotalView from "../views/TotalView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index
  },
  {
    path: "/calculate_character_points/:playerNumber",
    name: "CalculateCharPoints",
    component: CalculateCharPoints,
    props: true
  },
  {
    path: "/calculate_gross_points/:playerNumber",
    name: "CalculateGrossPoints",
    component: CalculateGrossPoints,
    props: true
  },
  {
    path: "/calculate_industry_points/:playerNumber",
    name: "CalculateIndustryPoints",
    component: CalculateIndustryPoints,
    props: true
  },
  {
    path: "/game_index",
    name: "GameIndex",
    component: GameIndex
  },
  {
    path: "/new_game",
    name: "NewGame",
    component: NewGame
  },
  {
    path: "/replay",
    name: "Replay",
    component: Replay
  },
  {
    path: "/total_view",
    name: "TotalView",
    component: TotalView
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
