"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

export default function MessageInput() {
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  const sendMessage = async () => {
    if (!message.trim()) return;

    setSending(true);

    const supabase = createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      alert("Please sign in first.");
      setSending(false);
      return;
    }

    const { error } = await supabase.from("messages").insert({
      content: message.trim(),
      user_id: user.id,
    });

    if (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message.");
    } else {
      setMessage("");
      alert("Message sent successfully!");
    }

    setSending(false);
  };

  return (
    <div className="flex gap-3 p-4 bg-white border-t">
      <input
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            sendMessage();
          }
        }}
        className="flex-1 border rounded-lg px-4 py-2 outline-none text-black placeholder:text-gray-500"
      />

      <button
        onClick={sendMessage}
        disabled={sending}
        className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 disabled:opacity-50"
      >
        {sending ? "Sending..." : "Send"}
      </button>
    </div>
  );
}

