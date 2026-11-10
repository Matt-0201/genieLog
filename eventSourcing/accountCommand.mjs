import { Account } from "./account.mjs";
import { Event } from "./event.mjs";
import { accountCommandDAO } from "./accountCommandDAO.mjs";
import { queryDatabase } from "./queryDatabase.mjs";
import { accountCache } from "./cache.mjs";
import { eventStore } from "./eventStore.mjs";

export const accountCommand = {
    addAccount(lastName, firstName) {
        const account = new Account();
        account.lastName = lastName;
        account.firstName = firstName;
        accountCommandDAO.insertAccount(account);

        const {creationDate, ...accountNoDate} = account;
        queryDatabase.accountSummaryList.push(accountNoDate);

        const {firstName: fn, lastName: ln, id, ...accountName } = accountNoDate;
        accountCache[account.id] = {...accountName, name: fn + " " + ln, };  
        
        const event = new Event();
        event.name = "accountAdded"; 
        event.accountId = account.id; 
        event.payload = account;
        eventStore.addEvent(event)
        return ;
    },
    saveAccount(accountId, lastName, firstName) {
        let actualAccount = accountCommandDAO.returnAccount(accountId);
        actualAccount.lastName = lastName;
        actualAccount.firstName = firstName;
        accountCommandDAO.updateAccount(actualAccount);
        
        const {creationDate, ...accountNoDate} = actualAccount;
        queryDatabase.accountSummaryList.push(actualAccount);
        
        const {firstName: fn, lastName: ln, id, ...accountName } = accountNoDate;
        accountCache[accountId] = {...accountName, name: fn + " " + ln, };          
    },
};
