export default function dateToBR(date) {
  return date.split("-").reverse().join("/");
}
