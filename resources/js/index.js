import { createApp } from "vue";
import Users from "./components/Users.vue";
import "./index.css";

const app = createApp({});
app.component("Users", Users);
app.mount("#app");
