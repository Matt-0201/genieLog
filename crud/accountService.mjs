import { Account } from "./account.mjs";
import { accountDAO } from "./accountDAO.mjs";

export const accountService = {
  addAccount(lastName, firstName) {
    const account = new Account();
    account.lastName = lastName;
    account.firstName = firstName;
    accountDAO.insertAccount(account);
    return ;
  },
  getAccountList() {
    let account_list = accountDAO.retrieveAccountList();
    return account_list;
  },
  saveAccount(id, lastName, firstName) {},
  getAccount(id) {},
};
