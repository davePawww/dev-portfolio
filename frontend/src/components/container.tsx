function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto flex h-dvh max-w-7xl flex-col overflow-hidden px-4 py-4 md:px-6 md:py-6 lg:px-8">
      {children}
    </div>
  );
}

export default Container;
