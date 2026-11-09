import { accountService } from "./accountService.mjs";

console.log("------- AddAccount call 1 -------")
accountService.addAccount('Matt', 'Test');
console.log("------- AddAccount call 2 -------")
accountService.addAccount('Toto', 'Titi');

console.log("------- getAccountList call -------")
console.log(accountService.getAccountList());

console.log("------- saveAccount call (no console.log) ------- ")
accountService.saveAccount(accountService.getAccountList()[0].id, 'Mamatt', 'TestTest');

console.log("------- getAccountList call (again to verify)-------")
console.log(accountService.getAccountList());