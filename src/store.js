import { createPinia } from "pinia";
import createPersistedState  from "pinia-plugin-persistedstate";

export default createPinia(createPersistedState)