import { mkdtemp, rm } from 'node:fs/promises';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { describe, expect, it } from 'vitest';
import { loadTasks, saveTasks } from './taskStorage.js';

describe('task storage', () => {
  it('saves and loads tasks', async () => {
    const directory = await mkdtemp(join(tmpdir(), 'tasks-'));
    const file = join(directory, 'tasks.json');

    const tasks = [
      { id: 1, title: 'Learn Node.js', completed: true },
      { id: 2, title: 'Learn Express', completed: false },
    ];

    try {
      await saveTasks(file, tasks);
      const loadedTasks = await loadTasks(file);

      expect(loadedTasks).toEqual(tasks);
    } finally {
      await rm(directory, { recursive: true, force: true });
    }
  });
});