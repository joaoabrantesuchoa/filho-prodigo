/* eslint-disable react/react-in-jsx-scope */
export default function Youtube({ videoId }: { videoId: string }) {
  return (
    <div>
      <iframe
        className="aspect-video w-full"
        src={"https://www.youtube.com/embed/" + videoId}
        title="Youtube Video Player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>
  );
}