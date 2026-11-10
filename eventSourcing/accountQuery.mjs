import { Account } from "./account.mjs";
import { accountQueryDAO } from "./accountQueryDAO.mjs";

export const accountQuery = {
    getAccountList() {
        let account_list = accountQueryDAO.retrieveAccountList();
        return account_list;
    },
    getAccount(id) {
        return accountQueryDAO.retrieveAccount(id);
    },
};
