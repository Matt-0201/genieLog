import { ACCOUNT_LIST } from "./database.mjs";
import { queryDatabase } from "./queryDatabase.mjs";
import { accountCache } from "./cache.mjs";

export const accountQueryDAO = {
    retrieveAccountList() {
        return queryDatabase.accountSummaryList;
    },
    retrieveAccount(id) {
        return accountCache;
    },
};
