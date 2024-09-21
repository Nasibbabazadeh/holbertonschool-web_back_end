export default function createIteratorObject(report) {
    const allEmployees = Object.values(report.allEmployees);
    let employees = allEmployees.flat();
    return employees
  }



  