export const libGsmClient = {
    attachToSMSC(smscNumber) { },
    sendSMS(smsContent, phoneNumber) {
        libGsmClient.attachToSMSC(smscNumber);
        const sms = new LibGsmSms();
        sms.senderNum = "+33 7 12 34 56 78";
        sms.num = phoneNumber;
        sms.payload = smsContent;
        libGsmClient.routeSMS(sms);
    }
}

export class LibGsmSms {
    senderNum
    num
    payload
}