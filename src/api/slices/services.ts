import ApiSlice from "../slice";

interface Services {
  id: number;
  image: string;
  title: string;
}
export default class ServicesSlice extends ApiSlice {
  static baseURL: string = ApiSlice.baseURL + "/api/app/services";
  static GetServices() {
    return this.request();
  }
}
