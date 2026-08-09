"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

type Message = {
  id: number;
  content: string | null;
  user_id: string | null;
  created_at: string;
};

export default function MessageList() {
  const [messages, setMessages] = useState<Message[]>([]);
  const supabase = createClient();

  useEffect(() => {
    const loadMessages = async () => {
      const { data, error } = await supabase
        .from("messages")
        .select("*")
        .order("created_at", { ascending: true });

      if (error) {
        console.error("Error loading messages:", error);
        return;
      }

      setMessages(data || []);
    };

    loadMessages();

    const channel = supabase
      .channel("messages-realtime")
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "messages",
        },
        (payload) => {
          setMessages((current) => [
            ...current,
            payload.new as Message,
          ]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-white">
      {messages.map((message) => (
        <div
          key={message.id}
          className="bg-gray-100 border rounded-lg p-3 shadow-sm"
        >
          <p className="text-black font-medium">
            {message.content}
          </p>
        </div>
      ))}
    </div>
  );
}
