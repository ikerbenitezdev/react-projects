import { describe, it, expect, beforeEach, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { Router } from './components/Router';
import { getCurrentPath } from './utils/getCurrentPath.js'; 

vi.mock('./utils/getCurrentPath.js', () => ({
    getCurrentPath: vi.fn()
    }
));

describe('Router', () => {
    beforeEach(() => {
        cleanup();
        vi.clearAllMocks();
    })
  it('should render without problems', () => {
    render(<Router routes={[]} />);
    expect(true).toBeTruthy();
  });

  it('should render 404 page', () => {
    render(<Router routes={[]} defaultComponent={() => <h1>404</h1>} />);
    expect(screen.getByText('404')).toBeTruthy();

  } );
});
  it('should render a page', () => {
    getCurrentPath.mockReturnValue('/about');
    const routes = [
      {
        path: '/',
        Component: () => <h1>Home</h1>
        },
       {
        path: '/about',
        Component: () => <h1>About</h1>
       } 
    ];
    render(<Router routes={routes} />);
    expect(screen.getByText('About')).toBeTruthy();
});