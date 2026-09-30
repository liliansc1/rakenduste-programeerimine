import request from 'supertest';
import { describe, expect, it } from 'vitest';
import { app } from './app.js';

describe('Task API', () => {
  it('GET returns tasks', async () => {
    const response = await request(app).get('/api/tasks');

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it('POST rejects empty title', async () => {
    const response = await request(app)
      .post('/api/tasks')
      .send({ title: '   ' });

    expect(response.status).toBe(400);
  });

  it('unknown task returns 404', async () => {
    const response = await request(app).get('/api/tasks/999');

    expect(response.status).toBe(404);
  });
});