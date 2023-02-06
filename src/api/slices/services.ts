import ApiSlice from "../slice";

export interface ServiceItem {
  id: number;
  image: string;
  title: string;
  description?: string;
}
export interface Services {
  items: ServiceItem[];
}

export default class ServicesSlice extends ApiSlice {
  static baseURL: string = ApiSlice.baseURL + "api/app";
  static GetServices() {
    return this.request<Services>("/services");
  }

  static GetFullServices() {
    return this.request<Services>("/all_services");
  }
  static GetServicePricelist(id: number) {
    return this.request(`/services/price-list/${id}`);
  }
}
