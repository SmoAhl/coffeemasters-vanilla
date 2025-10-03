import API from "./API.js"; // add .js

export async function loadData() {
  app.store.menu = await API.fetchMenu();
}
