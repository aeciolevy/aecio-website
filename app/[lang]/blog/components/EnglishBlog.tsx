export const EnglishBlog = () => {
  return (
    <div className="w-full h-full p-12">
      <div className="grid grid-cols-2 md:grid-cols-3">
        <div className="bg-brand-background-blue flex flex-col rounded-lg p-4 space-y-4">
          <img src="https://placehold.co/600x400" alt="blog" className="rounded-lg" />
          <h3 className="text-2xl font-bold mt-4">Blog 1</h3>
          <p className="text-brand-secondary-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>
  );
}

