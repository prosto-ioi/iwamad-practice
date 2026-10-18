import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { LikeButton } from './LikeButton';
import { LikesProvider } from '../context/LikesContext';

describe('LikeButton', () => {
  it('increases the visible like count after click', async () => {
    // LikeButton throws without LikesProvider, so wrap it
    render(
      <LikesProvider>
        <LikeButton />
      </LikesProvider>,
    );

    const button = screen.getByRole('button', { name: /like/i });
    expect(button).toHaveTextContent('Like (0)');

    await userEvent.click(button);

    expect(button).toHaveTextContent('Like (1)');
  });
});
