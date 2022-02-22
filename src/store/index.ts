import { createStore } from "vuex";

/**Services */
import { ComicService } from "../services/comic.service";

/**Types */
import { HomeTypes } from "../utils/mutation-types";

/**Interfaces */
import { ComicI } from "../interfaces/comic.interface";

export default createStore({
  state: {
    comics: []
  },
  mutations: {
    setComic(state, payload) {
      state.comics = payload;
    }
  },
  actions: {
    /**
     * @param {*} { commit }
     * @param {ComicI} payload
     */
    async getComics({ commit }, payload: ComicI) {
      try {
        const { data } = await new ComicService().getComics(payload);
        commit(HomeTypes.SET_COMIC, data);
      } catch (error) {
        console.log(error)
      }
    }
  },
  getters: {},
  modules: {}
});
