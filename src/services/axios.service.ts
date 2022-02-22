import axios, { AxiosInstance } from "axios";

export class AxiosService {

  instance(): AxiosInstance {
    return axios.create({
      headers: {
        "Content-Type": "application/vnd.api+json",
        Accept: "application/vnd.api+json"
      }
    });
  }
}