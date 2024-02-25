import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen"> 
      <Image src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" alt="img" width={200} height={200} />
    </div>
  );
}
