import fetchImages from '@/app/lib/fetchImages';
import { ImagesResults } from '@/app/models/Images';

export default async function Gallery() {
  const url = 'https://api.pexels.com/v1/curated';
  const images: ImagesResults | undefined = await fetchImages(url);

  if (!images) {
    return <h2 className="m-4 text-2xl font-bold">No images found</h2>;
  }

  return (
    <section className="grid-cols-gallery my-3 grid gap-2 px-2">
      {images.photos.map((photo) => (
        <div key={photo.id} className="h-64 rounded bg-gray-200"></div>
      ))}
    </section>
  );
}
