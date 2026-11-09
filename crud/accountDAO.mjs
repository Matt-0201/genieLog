import { ACCOUNT_LIST } from "./database.mjs";

export const accountDAO = {
  insertAccount(account) {
    ACCOUNT_LIST.push(account);
    console.log(ACCOUNT_LIST);
    return;
  },
  retrieveAccountList() {
    let ACCOUNT_LIST_NO_DATE = [];
    for (let i = 0; i<ACCOUNT_LIST.length; i++) {
      const copy = {...ACCOUNT_LIST[i]};
      delete copy.creationDate;
      ACCOUNT_LIST_NO_DATE.push(copy);
    }
    return ACCOUNT_LIST_NO_DATE;
  },
  updateAccount(account) {
    for (let i = 0; i<ACCOUNT_LIST.length; i++) {
      if (ACCOUNT_LIST[i].id == account.id) {
        ACCOUNT_LIST[i].lastName = account.lastName;
        ACCOUNT_LIST[i].firstName = account.firstName;
      }
    }
    return;
  },
  retrieveAccount(id) {},
};
