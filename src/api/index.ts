import ApiSlice from "./slice";
import ServicesSlice from "./slices/services";

export default class Api extends ApiSlice {
  static services = ServicesSlice;
}
