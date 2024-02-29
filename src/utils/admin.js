const hoursCalculator = (employeeData) => {
  let billableHours = 0;
  let nonBillableHours = 0;
  const len = employeeData.length;
  for (let i = 0; i < len; i++) {
    billableHours = billableHours + employeeData[i].billableHours;
    nonBillableHours = nonBillableHours + employeeData[i].nonBillableHours;
  }
  employeeData.showHours = { billableHours, nonBillableHours };
  console.log("billableHours", employeeData.showHours.billableHours);
  console.log("nonBillableHours", employeeData.showHours.nonBillableHours);
  return { billableHours, nonBillableHours };
};

export { hoursCalculator };
