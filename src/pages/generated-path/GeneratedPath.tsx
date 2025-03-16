import { useLocation } from 'react-router';

export default function GeneratedPath() {
  const { state } = useLocation();

  let message = '';
  if (state) {
    message = state.message;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Generated Learning Path</h1>
      <p className="text-2xl">{message}</p>
    </div>
  );
}
