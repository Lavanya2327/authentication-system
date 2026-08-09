"use client";

import ChatHeader from "@/components/chat/ChatHeader";
import OnlineUsers from "@/components/chat/OnlineUsers";
import MessageList from "@/components/chat/MessageList";
import MessageInput from "@/components/chat/MessageInput";

export default function ChatPage() {
  return (
    <main className="min-h-screen bg-[#FFFDF8] flex flex-col">
      <ChatHeader />

      <div className="flex flex-1 overflow-hidden">
        <OnlineUsers />

        <section className="flex flex-col flex-1 bg-[#FFFCF5]">
          <MessageList />
          <MessageInput />
        </section>
      </div>
    </main>
  );
}