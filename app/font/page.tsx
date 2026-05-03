import Card from "./card";
import TextLength from "./text";

export default function Page() {
  return (
   <>
   <TextLength/>
    <section className="bg-white py-16 md:py-20 xl:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 space-y-5 flex flex-col justify-center items-center text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-gray-950 dark:text-white">Get started with Tailwind CSS</h1>
          <p className="text-gray-600 font-normal text-base leading-relaxed max-w-2xl"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Est blanditiis praesentium asperiores? Qui, obcaecati in.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card src="/img/blog/blog-1.jpg" alt="Image one" />
          <Card src="/img/blog/blog-2.jpg" alt="Image two" />
          <Card src="/img/blog/blog-3.jpg" alt="Image three" />
        </div>
      </div>
    </section>
   </>
  );
}
