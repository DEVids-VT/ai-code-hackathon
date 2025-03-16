import { Button } from '@/components/ui/button';
import { useToastNotification } from '@/hooks/useToastNotification';
import { useAuth0 } from '@auth0/auth0-react';
import { useState } from 'react';
import reactLogo from '../../assets/react.svg';
import viteLogo from '/vite.svg';
export default function Landing() {
  const [count, setCount] = useState(0);
  const { emitToast } = useToastNotification();
  const { logout } = useAuth0();

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-svh">
        <Button
          className="!bg-red-500"
          onClick={() => {
            emitToast('Hello world', 'info');
            logout({ logoutParams: { returnTo: 'http://localhost:5173' } });
          }}>
          Click me
        </Button>
      </div>
      <div className="bg-black">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}
