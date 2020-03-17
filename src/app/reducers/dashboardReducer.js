import actionType from "../actionTypes";

const initialState = {
  walletBalance: 0,
  categories: {
    expense: ["Electricity", "Gas", "Internet", "Rent", "Others"],
    income: ["Salary", "Interest Money", "Gifts", "Others"]
  },
  currency: "₹"
};

export const selectWalletBalance = state => state.walletBalance;
export const selectExpenseCategory = state => state.categories.expense;
export const selectIncomeCategory = state => state.categories.income;
export const selectCurrency = state => state.currency;

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.UPDATE_WALLET_MONEY:
      state = {
        ...state,
        walletBalance: state.walletBalance + action.payload
      };
      break;

    case actionType.ADD_CATEGORY:
      state = {
        ...state,
        categories: {
          ...state.categories,
          [action.payload.type]: state.categories[action.payload.type].push(
            action.payload.value
          )
        }
      };
      break;
    case actionType.SET_CURRENCY:
      state = {
        ...state,
        currency: action.payload
      };
      break;
  }
  return state;
};

export default dashboardReducer;
