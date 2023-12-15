class EmailNotification {
  constructor(notificationId, createdTime, content, receiver) {
    this.notificationId = notificationId;
    this.createdTime = createdTime;
    this.content = content;
    this.receiver = receiver;
  }

  send() {
    console.log("Notification has been sent to " + this.receiver);
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
    console.log("Notification has been sent to " + this.phoneNumber);
  }
}

const emailNotice = new EmailNotification(
  "001",
  "15/12/2023",
  "OOP",
  "acb@gmail.com"
);
const phoneNotice = new SMSNotification(
  "001",
  "15/12/2023",
  "React",
  "0919195500"
);

emailNotice.send();
phoneNotice.send();
