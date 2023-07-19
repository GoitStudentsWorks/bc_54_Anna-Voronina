export const selectTransactions = state => state.transactions.transactions;
export const selectCategories = state => state.transactions.categories;
export const selectCategoriesSummary = state =>
  state.transactions.categoriesSummary;
export const selectIncomeSummary = state => state.transactions.incomeSummary;
export const selectExpenseSummary = state => state.transactions.expenseSummary;
export const selectPeriodTotal = state => state.transactions.periodTotal;
export const selectYear = state => state.transactions.year;
export const selectMonth = state => state.transactions.month;
export const selectIsLoading = state => state.transactions.isLoading; //reauiered??
