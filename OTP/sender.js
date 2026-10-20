function sendEmail(emailContent, address) {
        libSmtpClient.connect();
        const email = new LibSmtpEmail();
        email.senderAddress = "noreply@auth.com"
        email.recipientAddress = address;
        email.content = emailContent;
        libSmtpClient.send(email);
    }
    
function sendSMS(smsContent, phoneNumber) {
        libGsmClient.attachToSMSC(smscNumber);
        const sms = new LibGsmSms();
        sms.senderNum = "+33 7 12 34 56 78";
        sms.num = phoneNumber;
        sms.payload = smsContent;
        libGsmClient.routeSMS(sms);
    }

