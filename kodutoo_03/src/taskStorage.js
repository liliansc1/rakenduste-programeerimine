import { readFile, writeFile } from 'node:fs/promises';

export async function loadTasks(filePath) {
  try {
    const text = await readFile(filePath, 'utf8');
    const tasks = JSON.parse(text);

    if (!Array.isArray(tasks)) {
      throw new Error('Task data must be an array');
    }

    return tasks;
  } catch (error) {
    if (error.code === 'ENOENT') {
      return [];
    }

    throw error;
  }
}

export async function saveTasks(filePath, tasks) {
  await writeFile(filePath, JSON.stringify(tasks, null, 2));
}