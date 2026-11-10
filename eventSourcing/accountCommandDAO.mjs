import { ACCOUNT_LIST } from "./database.mjs";

export const accountCommandDAO = {
    insertAccount(account) {
        ACCOUNT_LIST.push(account);
        console.log(ACCOUNT_LIST);
        return;
    },
    updateAccount(account) {
        const newAccount = ACCOUNT_LIST.find((acc) => acc.id == account.id);
    
        newAccount.firstName = account.firstName,
        newAccount.lastName = account.lastName
    },
    returnAccount(id) {
        return ACCOUNT_LIST.find((account) => account.id == id);
    }
};
