import { ACCOUNT_LIST } from "./database.mjs";

export const accountQueryDAO = {
    retrieveAccountList() {
        let ACCOUNT_LIST_NO_DATE = [];
        for (let i = 0; i<ACCOUNT_LIST.length; i++) {
          const copy = {...ACCOUNT_LIST[i]};
          delete copy.creationDate;
          ACCOUNT_LIST_NO_DATE.push(copy);
        }
        return ACCOUNT_LIST_NO_DATE;
    },
    retrieveAccount(id) {
        const account = ACCOUNT_LIST.find((account) => account.id == id);
        const {firstName, lastName, ...rest} = account;
        return {...rest, name: firstName + " " + lastName};
    },
};
