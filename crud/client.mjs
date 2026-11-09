import { accountService } from "./accountService.mjs";

accountService.addAccount('Matt', 'Test');

accountService.addAccount('Toto', 'Titi');

console.log(accountService.getAccountList());