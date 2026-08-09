type MessageBubbleProps = {
  message: string;
  sender: string;
};

export default function MessageBubble({
  message,
  sender,
}: MessageBubbleProps) {
  return (
    <div className="mb-3">
      <div className="font-semibold text-green-700">{sender}</div>
      <div className="bg-gray-200 rounded-lg p-3 inline-block">
        {message}
      </div>
    </div>
  );
}
