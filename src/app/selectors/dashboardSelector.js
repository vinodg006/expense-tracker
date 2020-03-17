import * as local from "../reducers/dashboardReducer";
import globalize from "../../common/utils/globalize";

const path = "dashboard";

export const selectWalletBalance = globalize(local.selectWalletBalance, path);
export const selectExpenseCategory = globalize(
  local.selectExpenseCategory,
  path
);
export const selectIncomeCategory = globalize(local.selectIncomeCategory, path);
export const selectCurrency = globalize(local.selectCurrency, path);
