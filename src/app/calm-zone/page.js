export default function CalmZone() {
  return (
    <div className="min-h-screen bg-blue-200 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-600 mb-8 text-center">Calm Zone</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-black tracking-wide">Guided Meditation</h2>
            <p className="text-gray-700">Find peace and tranquility through our guided meditation sessions.</p>
            <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Start Meditation
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-black tracking-wide">
            <h2 className="text-xl font-semibold mb-4">Relaxing Sounds</h2>
            <p className="text-gray-700">Listen to soothing sounds that help calm your mind.</p>
            <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Play Sounds
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}