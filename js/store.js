const createStore = Framework7.createStore;
const store = createStore({
  state: {
    pushes: [],
  },
  getters: {
    pushes({ state }) {
      return state.pushes;
    }
  },
  actions: {
    setPushes({ state }, pushes) {
      state.pushes = pushes;
    },
    /*
    addProduct({ state }, product) {
      state.products = [...state.products, product];
    },
    */
  },
})

