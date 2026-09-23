import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { TaskCard } from './TaskCard';
import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';

afterEach(cleanup);

describe('TaskCard', () => {
  it('shows task title', () => {
    const task = {
      id: 1,
      title: 'Learn React',
      completed: false,
    };

    render(
      <TaskCard
        task={task}
        onToggle={() => {}}
        onDelete={() => {}}
      />
    );

    expect(screen.getByText(/Learn React/)).toBeTruthy();
  });

  it('calls onToggle when Toggle button is clicked', () => {
    const onToggle = vi.fn();

    const task = {
      id: 1,
      title: 'Learn React',
      completed: false,
    };

    render(
      <TaskCard
        task={task}
        onToggle={onToggle}
        onDelete={() => {}}
      />
    );

    fireEvent.click(screen.getByRole('button', { name: 'Toggle' }));

    expect(onToggle).toHaveBeenCalledWith(1);
  });
});