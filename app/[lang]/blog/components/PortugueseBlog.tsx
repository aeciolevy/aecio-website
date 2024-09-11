import { allLetters } from "content-collections";

export const PortugueseBlog = () => {
  return (
    <div>
      <h1>Portuguese Blog</h1>
      {allLetters.map((letter) => (
        <div key={letter._meta.path}>
          <h2>{letter.title}</h2>
        </div>
      ))}
    </div>
  );
}

