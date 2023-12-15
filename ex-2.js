class Notification {
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

class EmailNotification extends Notification {
  constructor(notificationId, createdTime, content, receiver) {
    super(notificationId, createdTime, content, receiver);
  }
}

class SMSNotification extends Notification {
  constructor(notificationId, createdTime, content, receiver) {
    super(notificationId, createdTime, content, receiver);
  }
}

const sendEmailToAmmy = new EmailNotification(
  "033",
  "14.09",
  "Good Afternoon",
  "Ammy"
);
sendEmailToAmmy.send();

const sendSMSToMay = new SMSNotification("333", "21.08", "Good Night", "May");
sendSMSToMay.send();
