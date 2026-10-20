export const libSmtpClient = {
    connect() { },
    sendEmail(emailContent, address) {
        libSmtpClient.connect();
        const email = new LibSmtpEmail();
        email.senderAddress = "noreply@auth.com"
        email.recipientAddress = address;
        email.content = emailContent;
        libSmtpClient.send(email);
    }
}

export class LibSmtpEmail {
    senderAddress;
    recipientAddress;
    content;
}