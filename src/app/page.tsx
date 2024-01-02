import MyForm from '@/components/MyForm';
import Image from 'next/image';
import { FaBeer } from 'react-icons/fa';

export default function Home() {
  return (
    <main className="container prose">
      <h1 className="">Academic Jobs NextJS Frontend</h1>
      <h2 className="">Academic Jobs H2</h2>
      <h3 className="">Academic Jobs H3</h3>
      <h4 className="">Academic Jobs H4</h4>
      <h5 className="">Academic Jobs H5</h5>
      <h6 className="">Academic Jobs H6</h6>
      <div className="text">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
          laudantium natus deserunt voluptas assumenda doloremque libero quod
          dignissimos quis consequuntur officiis recusandae officia sapiente
          illo, eaque aliquid delectus beatae? Labore similique soluta tenetur
          consequatur, repellendus atque voluptates, provident tempora illo
          molestias beatae neque at aliquid quasi exercitationem fugit
          recusandae! Eaque sequi natus sint accusantium illo ducimus ipsum
          quae, dolor id? Vitae cumque consequatur tempora atque vero, a
          pariatur ipsam repellat velit officia perferendis vel cupiditate quis?
          Dolores quaerat minima assumenda corporis aut cumque nisi! Corrupti
          rerum tempora soluta esse explicabo sunt libero recusandae. Doloribus
          inventore est expedita eius quo sint?
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
          laudantium natus deserunt voluptas assumenda doloremque libero quod
          dignissimos quis consequuntur officiis recusandae officia sapiente
          illo, eaque aliquid delectus beatae? Labore similique soluta tenetur
          consequatur, repellendus atque voluptates, provident tempora illo
          molestias beatae neque at aliquid quasi exercitationem fugit
          recusandae! Eaque sequi natus sint accusantium illo ducimus ipsum
          quae, dolor id? Vitae cumque consequatur tempora atque vero, a
          pariatur ipsam repellat velit officia perferendis vel cupiditate quis?
          Dolores quaerat minima assumenda corporis aut cumque nisi! Corrupti
          rerum tempora soluta esse explicabo sunt libero recusandae. Doloribus
          inventore est expedita eius quo sint?
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
          laudantium natus deserunt voluptas assumenda doloremque libero quod
          dignissimos quis consequuntur officiis recusandae officia sapiente
          illo, eaque aliquid delectus beatae? Labore similique soluta tenetur
          consequatur, repellendus atque voluptates, provident tempora illo
          molestias beatae neque at aliquid quasi exercitationem fugit
          recusandae! Eaque sequi natus sint accusantium illo ducimus ipsum
          quae, dolor id? Vitae cumque consequatur tempora atque vero, a
          pariatur ipsam repellat velit officia perferendis vel cupiditate quis?
          Dolores quaerat minima assumenda corporis aut cumque nisi! Corrupti
          rerum tempora soluta esse explicabo sunt libero recusandae. Doloribus
          inventore est expedita eius quo sint?
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
          laudantium natus deserunt voluptas assumenda doloremque libero quod
          dignissimos quis consequuntur officiis recusandae officia sapiente
          illo, eaque aliquid delectus beatae? Labore similique soluta tenetur
          consequatur, repellendus atque voluptates, provident tempora illo
          molestias beatae neque at aliquid quasi exercitationem fugit
          recusandae! Eaque sequi natus sint accusantium illo ducimus ipsum
          quae, dolor id? Vitae cumque consequatur tempora atque vero, a
          pariatur ipsam repellat velit officia perferendis vel cupiditate quis?
          Dolores quaerat minima assumenda corporis aut cumque nisi! Corrupti
          rerum tempora soluta esse explicabo sunt libero recusandae. Doloribus
          inventore est expedita eius quo sint?
        </p>
      </div>
      <div className="flex flex-row">
        <Image
          className=""
          src="/about-us/Academic-jobs-About-AJ.jpg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <FaBeer className="text-9xl text-blue-500 mr-6" />
        <MyForm />
      </div>
    </main>
  );
}
