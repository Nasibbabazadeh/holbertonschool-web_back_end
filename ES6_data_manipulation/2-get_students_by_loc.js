export default function getStudentsByLocation(arr, specParametr) {
  return arr.filter((item) => item.location === specParametr);
}
