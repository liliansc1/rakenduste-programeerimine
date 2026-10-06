import Counter from './components/Counter';
import ServerMessage from './components/ServerMessage';

export default function Home() {
  return (
    <main>
      <h1>Next.js Warm-up</h1>
      <p>Welcome to my Next.js application.</p>

      <Counter />
      <ServerMessage />
    </main>
  );
}