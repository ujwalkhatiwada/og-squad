import ActionProvider from './ActionProvider';

class MessageParser {
  actionProvider: ActionProvider;

  constructor(actionProvider: ActionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message: string) {
    const lowerCaseMessage = message.toLowerCase();
    if (lowerCaseMessage.includes("hello")) {
      this.actionProvider.greet();
    } else if (lowerCaseMessage.includes("expense")) {
      this.actionProvider.handleExpense();
    } else {
      this.actionProvider.handleUnknown();
    }
  }
}

export default MessageParser;