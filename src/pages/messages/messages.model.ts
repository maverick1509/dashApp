export class MessageModel {
  image: string;
  message: string;
  name: string;
  date: Date;
}

export class MessagesModel {
  today: Array<MessageModel> = [];
  yesterday: Array<MessageModel> = [];
}
