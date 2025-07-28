import Image from "next/image";

export default function Small() {
  return (
    <div className="bg-gradient-to-r from-[#1a4280] to-[#6989b0] rounded-2xl p-8 mt-16 text-white mb-5 flex flex-col sm:flex-row items-center justify-center gap-8 text-center sm:text-left">
      <div className="flex-shrink-0">
        <Image
          src="/assets/images/author-3.jpeg"
          alt="Jacob Ken Robinson"
          width={200}
          height={200}
          className="rounded-sm object-cover shadow-lg border-4 border-white"
        />
      </div>
      <div className="max-w-2xl">
        <p className="text-2xl sm:text-3xl font-semibold">
          Grab the bestseller by a rising talent, available at your local bookstore!
        </p>
      </div>
    </div>
  );
}
