export const checkBudget = (budget, remainingBudget) => {
  let budgetColor;

  if (budget/ 4 > remainingBudget) {
    budgetColor = "alert alert-danger";
  } else if  (budget/ 2 > remainingBudget) {
    budgetColor = "alert alert-warning";
  } else {
    budgetColor ="alert alert-success" 
  }

  return budgetColor
}