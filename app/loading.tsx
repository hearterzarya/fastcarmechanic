export default function Loading() {
  return (
    <div className="pt-32 pb-24 min-h-screen flex items-center justify-center">
      <div className="text-center space-y-4">
        <div className="w-16 h-16 border-4 border-amber-400 border-t-transparent rounded-full animate-spin mx-auto"></div>
        <p className="text-silver-400">Loading...</p>
      </div>
    </div>
  );
}
