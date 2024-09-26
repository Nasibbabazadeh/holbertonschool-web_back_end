export default function getListStudentIds(argument) {
  if (Array.isArray(argument)) {
    return argument.map((item) => item.id);
  } else return [];
}
