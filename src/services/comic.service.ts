import { AxiosInstance } from "axios";
import { AxiosService } from "../services/axios.service";

/** Interfaces */
import { ComicI } from "../interfaces/comic.interface";

/**Helpers */
import comicRandom from '../helpers/comicRandom'

export class ComicService {
  private service: AxiosInstance;

  constructor() {
    this.service = new AxiosService().instance();
  }

  /**
   * [Eng] The history of simulations is obtained.
   * [Spa] Se obtiene el historico de simulaciones.
   *
   */
  async getComics(payload: ComicI) {
    return this.service.get(`https://getxkcd.vercel.app/api/comic?num=${comicRandom()}`, {
      params: payload
    });
  }
}