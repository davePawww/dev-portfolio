function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto flex h-dvh max-w-7xl flex-col overflow-hidden py-4">{children}</div>
  );
}

export default Container;
