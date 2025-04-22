interface CategoryPageProps {
  params: {
    category: string;
  };
};

export default function CategoryPage(params: CategoryPageProps) {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="font-size-32">Category page</h1>
        <p>I'm making a web app and a mobile app for learning propurses only. But I'm very, very exited!</p>
        <p>Category: {params.params.category}</p>
      </main>
    </div>
  );
}