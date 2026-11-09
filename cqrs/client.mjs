import { accountCommand } from "./accountCommand.mjs";
import { accountQuery } from "./accountQuery.mjs";

console.log("------- AddAccount call 1 -------")
accountCommand.addAccount('Matt', 'Test');
console.log("------- AddAccount call 2 -------")
accountCommand.addAccount('Toto', 'Titi');

console.log("------- getAccountList call -------")
console.log(accountQuery.getAccountList());

console.log("------- saveAccount call (no console.log) ------- ")
accountCommand.saveAccount(accountQuery.getAccountList()[0].id, 'Mamatt', 'TestTest');

console.log("------- getAccountList call (modification in db) -------")
console.log(accountQuery.getAccountList());

console.log("------- getAccount call -------")
console.log(accountQuery.getAccount(accountQuery.getAccountList()[0].id));

console.log("------- getAccountList call (NO modification in db) -------")
console.log(accountQuery.getAccountList());