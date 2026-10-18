import { createContext, useContext, useState, type ReactNode } from 'react';

type LikesContextValue = {
  likes: number;
  addLike: () => void;
};

const LikesContext = createContext<LikesContextValue | null>(null);

export function LikesProvider({ children }: { children: ReactNode }) {
  const [likes, setLikes] = useState(0);

  // functional update so two fast clicks don't get lost
  const addLike = () => {
    setLikes((current) => current + 1);
  };

  // no localStorage on purpose, resetting on refresh is fine for this task
  return (
    <LikesContext.Provider value={{ likes, addLike }}>
      {children}
    </LikesContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLikes(): LikesContextValue {
  const context = useContext(LikesContext);

  // without a Provider the context is empty, better to fail early with a clear message
  if (context === null) {
    throw new Error('useLikes must be used within LikesProvider');
  }

  return context;
}
