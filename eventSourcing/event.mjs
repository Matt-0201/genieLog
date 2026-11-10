export class Event {
    constructor(accountId, name, payload, creationDate) {
        this.accountId = accountId;
        this.name = name;
        this.payload = payload;
        this.creationDate = creationDate ?? new Date();
    }
}