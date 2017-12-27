export default function read (property) {
  return JSON.parse(localStorage.getItem(property))
}
