'use client';

import { useState } from 'react';

export default function ServerMessage() {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function loadMessage() {
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/message');

      if (!response.ok) {
        throw new Error();
      }

      const data = await response.json();
      setMessage(data.message);
    } catch {
      setError('Failed to load message');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h2>Server message</h2>

      <button onClick={loadMessage}>
        Load server message
      </button>

      {loading && <p>Loading...</p>}
      {message && <p>{message}</p>}
      {error && <p>{error}</p>}
    </div>
  );
}