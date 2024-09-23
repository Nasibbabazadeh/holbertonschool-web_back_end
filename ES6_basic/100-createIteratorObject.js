export default function createIteratorObject(report) {
  const allEmployees = Object.values(report.allEmployees);
  const employees = allEmployees.flat();
  return employees;
}
