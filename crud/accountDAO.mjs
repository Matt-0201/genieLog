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
    const newAccount = ACCOUNT_LIST.find((acc) => acc.id == account.id);

    newAccount.firstName = account.firstName,
    newAccount.lastName = account.lastName
  },
  retrieveAccount(id) {
    const account = ACCOUNT_LIST.find((account) => account.id == id);
    const {firstName, lastName, ...rest} = account;
    return {...rest, name: firstName + " " + lastName};
  },
};
