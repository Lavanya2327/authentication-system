export default function OnlineUsers() {
  const users = ["Lavanya", "Rahul", "Priya"];

  return (
    <div className="w-64 bg-white border p-4">
      <h2 className="text-lg font-bold mb-4 text-black">
        Online Users
      </h2>

      <div className="space-y-3">
        {users.map((user) => (
          <div key={user} className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>

            <span className="text-gray-800 font-medium">
              {user}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
