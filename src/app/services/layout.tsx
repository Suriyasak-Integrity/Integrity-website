function ExampleLayout({ children }: { children: React.ReactNode;
}) {
  return (
    <div className="min-h-[70vh] py-12">
      {children}
    </div>
  );
}
