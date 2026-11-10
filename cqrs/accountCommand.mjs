import { Account } from "./account.mjs";
import { accountCommandDAO } from "./accountCommandDAO.mjs";
import { queryDatabase } from "./queryDatabase.mjs";

export const accountCommand = {
    addAccount(lastName, firstName) {
        const account = new Account();
        account.lastName = lastName;
        account.firstName = firstName;
        accountCommandDAO.insertAccount(account);

        const {creationDate, ...accountNoDate} = account;
        queryDatabase.accountSummaryList.push(accountNoDate);
        return ;
    },
    saveAccount(id, lastName, firstName) {
        let actualAccount = accountCommandDAO.returnAccount(id);
        actualAccount.lastName = lastName;
        actualAccount.firstName = firstName;
        accountCommandDAO.updateAccount(actualAccount);
        
        const {creationDate, ...accountNoDate} = actualAccount;
        queryDatabase.accountSummaryList.push(actualAccount);
    },
};
