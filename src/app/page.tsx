import MyForm from '@/components/MyForm';
import Image from 'next/image';
import { FaBeer } from 'react-icons/fa';

export default function Home() {
  return (
    <main className="container mx-auto">
      <h1 className="">Academic Jobs NextJS Frontend</h1>
      <div className="flex flex-row">
        {/* <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        /> */}
        <FaBeer className="text-9xl text-blue-500 mr-6" />
        <MyForm />
      </div>
    </main>
  );
}
