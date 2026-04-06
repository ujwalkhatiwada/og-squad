'use client'

import Chatbot from 'react-chatbot-kit'

import config from './config'

import MessageParser from './MessageParser'

import ActionProvider from './ActionProvider'

export default function ChatbotPage() {

  return (

    <div className="p-8">

      <h1 className="text-2xl font-bold mb-4">🤖 MediBot - Your AI Assistant</h1>

      <Chatbot

        config={config}

        messageParser={MessageParser}

        actionProvider={ActionProvider}

      />

    </div>

  )

}