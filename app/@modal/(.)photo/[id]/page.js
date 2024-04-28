import { photos } from "../../../data";

export default function PhotoModal({ params: { id } }) {
  const photo = photos.find((p) => p.id === id)
  console.log("🚀 ~ PhotoModal ~ photo:", photo)
  return (
    <div className="flex h-60 justify-center items-center fixed bottom-0 bg-slate-300 w-full">
      hello world
      <img className="w-52" src={photo.src} />
    </div>
  )
}
