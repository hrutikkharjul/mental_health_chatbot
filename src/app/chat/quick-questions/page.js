import Link from "next/link";

export default function QuickQuestions() {
  return (
    <div className="min-h-screen bg-blue-200 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-blue-600 mb-6 text-center">
            Quick Questions
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/chat/conversation"
              className="bg-blue-100 p-6 rounded-lg hover:bg-blue-200 transition-colors"
            >
              <h2 className="text-lg font-semibold mb-2 text-gray-700 tracking-wide">How are you feeling?</h2>
              <p className="text-gray-700">
                Share your current emotional state with Well Being
              </p>
            </Link>
            <Link
              href="/chat/conversation"
              className="bg-blue-100 p-6 rounded-lg hover:bg-blue-200 transition-colors"
            >
              <h2 className="text-lg font-semibold mb-2 text-gray-700 tracking-wide">What&apos;s on your mind?</h2>
              <p className="text-gray-700">
                Talk about your thoughts and concerns
              </p>
            </Link>
            <Link
              href="/chat/conversation"
              className="bg-blue-100 p-6 rounded-lg hover:bg-blue-200 transition-colors"
            >
              <h2 className="text-lg font-semibold mb-2 text-gray-700 tracking-wide">Need help?</h2>
              <p className="text-gray-700">
                Get support and guidance for your mental health
              </p>
            </Link>
            <Link
              href="/chat/conversation"
              className="bg-blue-100 p-6 rounded-lg hover:bg-blue-200 transition-colors"
            >
              <h2 className="text-lg font-semibold mb-2 text-gray-700 tracking-wide">Feeling stressed?</h2>
              <p className="text-gray-700">
                Learn stress management techniques
              </p>
            </Link>
          </div>

          {/* Back to Chat Options */}
          <Link href="/chat" className="mt-8 block text-center text-blue-600 hover:text-blue-700">
            ← Back to Chat Options
          </Link>
        </div>
      </div>
    </div>
  );
}