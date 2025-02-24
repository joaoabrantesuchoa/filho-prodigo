/* eslint-disable react/react-in-jsx-scope */
export default function Youtube({ id }: { id: string }) {
  return (
    <div>
      <iframe
        className="aspect-video w-full"
        src={"https://www.youtube.com/embeb/" + id}
        title="Youtube Video Player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>
  );
}
