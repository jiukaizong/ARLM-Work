import Link from "next/link";
export default function Careers() {
  return (
    <>
      <div class="hero-wrapper w-full bg-[#F6F5F2]">
        <div className="hero">
          <img
            src="/assets/images/laptop_person.png"
            alt="Picture of a person looking at a laptop"
            className="object-cover w-full"
          />
        </div>

        <div className="content">
          <h1 class="text-center md:text-left my-16 text-4xl">
            Join our growing team!
          </h1>
          <div class="flex h-auto">
            <div class="w-full flex items-center flex-wrap">
              <h2 className="w-full md:w-1/4 font-bold text-lg md:text-2xl">Why Flexpay?</h2>
              <div className="w-full md:w-3/4 mt-2 md:mt-0"><p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales
                morbi integer interdum et ut.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="content h-1/4">
        <p class="font-bold text-base my-16">
          <span class="underline cursor-pointer">
            {/* Set this link to career opportunities page when made*/}
            <Link href="#"><a>Click here</a></Link>
          </span>{" "}
          to see current openings
        </p>
      </div>
    </>
  );
}
