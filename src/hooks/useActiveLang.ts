export function useActiveLang() {
  return localStorage.getItem("language") === "arm" ? true : false;
}
