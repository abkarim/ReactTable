import isEmpty from "./isEmpty";

export default function getSearchParameter(key) {
  const value = new URL(window.location.href).searchParams.get(key);
  if (value !== null && !isEmpty(value)) return value;
  return null;
}
