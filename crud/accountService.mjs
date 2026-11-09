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
  saveAccount(id, lastName, firstName) {
    let account_list = accountDAO.retrieveAccountList();
    let actualAccount;
    for (let i = 0; i<account_list.length; i++) {
      if (id == account_list[i].id) {
        actualAccount = account_list[i];
      }
    }
    actualAccount.lastName = lastName;
    actualAccount.firstName = firstName;
    accountDAO.updateAccount(actualAccount);
  },
  getAccount(id) {},
};
