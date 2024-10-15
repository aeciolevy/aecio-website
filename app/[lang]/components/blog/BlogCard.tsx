type BlogCardProps = {
  title: string;
  summary: string;
  thumbnail: string | undefined;
};

export const BlogCard = ({ title, summary, thumbnail }: BlogCardProps) => {
  return (
    <div className="bg-brand-background-blue flex flex-col rounded-lg p-4 space-y-4">
      <img src={thumbnail} alt="blog" className="aspect-3/2 rounded-lg" />
      <h3 className="text-2xl font-bold mt-4"> {title} </h3>
      <p className="text-brand-secondary-text"> {summary} </p>
    </div>
  );
};
