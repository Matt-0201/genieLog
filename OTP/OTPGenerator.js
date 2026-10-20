export function OTPGenerator() {
    const randomSeed = Math.floor(Math.random() * 100);
    const timeSeed = Date.now % 100;
    const otp = `${randomSeed}${timeSeed}`;
    return otp;
}