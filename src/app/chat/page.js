import Link from "next/link";

export default function Chat() {
  return (
    <div className="min-h-screen bg-blue-200 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-600 mb-8 text-center">Chat with Well Being</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4">Start a Conversation</h2>
            <p className="text-gray-700">Talk to our AI companion about your feelings and thoughts.</p>
          </div>
          <div className="flex space-x-4">
            <Link href="/chat/conversation" className="flex-1 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Start Chat
            </Link>
            <Link href="/chat/quick-questions" className="flex-1 bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300 transition-colors">
              Quick Questions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}