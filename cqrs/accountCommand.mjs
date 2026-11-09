import { Account } from "./account.mjs";
import { accountCommandDAO } from "./accountCommandDAO.mjs";

export const accountCommand = {
    addAccount(lastName, firstName) {
        const account = new Account();
        account.lastName = lastName;
        account.firstName = firstName;
        accountCommandDAO.insertAccount(account);
        return ;
    },
    saveAccount(id, lastName, firstName) {
        let actualAccount = accountCommandDAO.returnAccount(id);
        actualAccount.lastName = lastName;
        actualAccount.firstName = firstName;
        accountCommandDAO.updateAccount(actualAccount);
    },
};
