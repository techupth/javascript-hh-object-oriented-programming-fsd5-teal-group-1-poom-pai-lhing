class EmailNotification {
  constructor(notificationId, createdTime, content, receiver) {
    this.notificationId = notificationId;
    this.createdTime = createdTime;
    this.content = content;
    this.receiver = receiver;
  }
  send() {
    console.log(`Notification has been sent to ${this.receiver}`);
  }
}
class SMSNotification {
  constructor(notificationId, createdTime, content, phoneNumber) {
    this.notificationId = notificationId;
    this.createdTime = createdTime;
    this.content = content;
    this.phoneNumber = phoneNumber;
  }
  send() {
    console.log(`Notification has been sent to ${this.phoneNumber}`);
  }
}
const sendEmailToJohn = new EmailNotification(
  "023",
  "10.12",
  "Hello!!",
  "john01@hotmail.com"
);
sendEmailToJohn.send();

const sendSMSToSara = new SMSNotification(
  "044",
  "10.20",
  "Good Morning😊",
  "081-048-9876"
);
sendSMSToSara.send();
