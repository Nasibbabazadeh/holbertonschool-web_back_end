export default function getStudentIdsSum(arr) {
  const ids = arr.map((item) => item.id);
  return ids.reduce((prev, current) => prev + current, 0);
}
