import { createChatBotMessage } from 'react-chatbot-kit';

class ActionProvider {
  createChatBotMessage: any;
  setState: any;
  createClientMessage: any;
  stateRef: any;

  constructor(createChatBotMessage: any, setStateFunc: any, createClientMessage: any, stateRef: any) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
    this.stateRef = stateRef;
  }

  greet() {
    const message = this.createChatBotMessage("Hello! Nice to meet you.");
    this.setState((prev: any) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }

  handleExpense() {
    const message = this.createChatBotMessage("Medical expenses can be tricky. Have you scanned your bill? I can help categorize it or suggest savings.");
    this.setState((prev: any) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }

  handleUnknown() {
    const message = this.createChatBotMessage("I'm sorry, I didn't understand that. Can you rephrase?");
    this.setState((prev: any) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }
}

export default ActionProvider;