import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/footer";
import BG from "../public/home.png";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />
      <div
        className="md:h-screen h-80 w-full flex md:justify-start md:items-center items-end"
        style={{
          backgroundImage: `url("/home.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="ml-10">
          <div className="md:text-5xl text-2xl md:mt-0 mt-60 justify-normal text-white md:w-1/4 w-full ">
            Beautiful homes made for you
          </div>
          <p className="md:w-2/4 w-full md:text-xl md:mb-16 mb-16 text-white mt-4">
            In oculis quidem se esse admonere interesse enim maxime placeat,
            facere possimus, omnis. Et quidem faciunt, ut labore et accurate
            disserendum et harum quidem exercitus quid.
          </p>
        </div>
      </div>
      <div className="md:flex md:mt-40 mt-10">
        <div className="flex-1">
          <Image
            src="/contentImage.png"
            width="800"
            height="657"
            className="cursor-pointer"
            priority
          />
        </div>
        <div className="flex-1 flex flex-col md:justify-start justify-center md:items-start items-center -mt-7">
          <h2 className="md:text-5xl text-2xl md:mt-20 mt-1">About us</h2>
          <p className="md:text-xl text-base w-3/4  mt-4 text-center md:text-left">
            Welcome to our property website, your gateway to the enchanting real
            estate landscape of Lucknow. Nestled in the heart of Uttar Pradesh,
            our platform is committed to connecting you with the finest
            properties in this culturally rich city. With a deep understanding{" "}
          </p>
          <button class="bg-black text-white py-3 px-6 rounded-tr-lg flex items-center space-x-4 w-44 mt-5">
            <div className="mx-1 text-white">Learn more</div>
            <Image
              src="/keyboard-arrow-right.png"
              className="cursor-pointer"
              width={20}
              height={20}
            />
          </button>
        </div>
      </div>
      <div className="bg-gray-100 md:py-60 py-10 px-10 md:min-h-screen  md:-mt-60 mt-10">
        <div>
          <Image src="/line.png" width={169} height={4} />
        </div>

        <div className="text-5xl mt-5">Find your next place to live</div>
        <div className="bg-white rounded-xl grid md:grid-cols-4 grid-cols-2 mt-12  w-full justify-around">
          <div className=" md:py-12 p-5 text-xs md:text-base ">
            <label for="lookingfor"> Looking for</label>
            <select id="lookingfor"></select>
          </div>
          <div className=" md:p-12 p-5 border-l-2 text-xs md:text-base">
            <label for="lookingfor"> Location</label>
            <select id="lookingfor"></select>
          </div>
          <div className=" md:p-12 p-5 md:border-l-2 md:border-t-0 border-t-2 text-xs md:text-base">
            <label for="lookingfor"> Property Type</label>
            <select id="lookingfor"></select>
          </div>
          <div className=" md:p-12 p-5 md:pr-20 border-l-2 md:border-t-0 border-t-2 text-xs md:text-base">
            <label for="lookingfor"> Price</label>
            <select id="lookingfor"></select>
          </div>
        </div>

        <div class="grid md:grid-cols-4 grid-cols-1 w-full gap-10 justify-center items-center mt-10">
          <div class="max-w-sm rounded overflow-hidden shadow-lg mx-2">
            <Image src="/house1.png" width={400} height={4} />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Malto House</div>
              <p class="text-gray-500 text-base">12-march-2024</p>
            </div>
          </div>
          <div class="max-w-sm rounded overflow-hidden shadow-lg mx-2">
            <Image src="/house6.png" width={400} height={4} />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Malto House</div>
              <p class="text-gray-500 text-base">12-march-2024</p>
            </div>
          </div>
          <div class="max-w-sm rounded overflow-hidden shadow-lg mx-2">
            <Image src="/house2.png" width={400} height={4} />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Malto House</div>
              <p class="text-gray-500 text-base">12-march-2024</p>
            </div>
          </div>
          <div class="max-w-sm rounded overflow-hidden shadow-lg mx-2">
            <Image src="/house3.png" width={400} height={4} />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Malto House</div>
              <p class="text-gray-500 text-base">12-march-2024</p>
            </div>
          </div>
          <div class="max-w-sm rounded overflow-hidden shadow-lg mx-2">
            <Image src="/house5.png" width={400} height={4} />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Malto House</div>
              <p class="text-gray-500 text-base">12-march-2024</p>
            </div>
          </div>

          <div class="max-w-sm rounded overflow-hidden shadow-lg mx-2">
            <Image src="/house2.png" width={400} height={4} />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Malto House</div>
              <p class="text-gray-500 text-base">12-march-2024</p>
            </div>
          </div>

          <div class="max-w-sm rounded overflow-hidden shadow-lg mx-2">
            <Image src="/house3.png" width={400} height={4} />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Malto House</div>
              <p class="text-gray-500 text-base">12-march-2024</p>
            </div>
          </div>

          <div class="max-w-sm rounded overflow-hidden shadow-lg mx-2">
            <Image src="/house4.png" width={400} height={4} />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Malto House</div>
              <p class="text-gray-500 text-base">12-march-2024</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black md:py-60 py-10 px-10 ">
        <div className="flex items-center justify-center">
          <Image src="/line.png" width={169} height={4} />
        </div>
        <div className="flex items-center justify-center text-white md:text-5xl text-2xl mt-8">
          Why Lucknow property
        </div>
        <div className="flex items-center justify-center mt-8">
          <div className="text-gray-300 text-xl md:w-1/2 w-full md:text-left text-center">
            Lucknow Property is an online place for buying and selling homes,
            created by Hol Proptech Private Limited. Lucknow Property, Find
            Homes Stress-Free, proudly claims to be a real friend to anyone
            searching for a home.
          </div>
        </div>
        <div className="flex items-center justify-center mt-12">
          <button class="bg-amber-500 text-white py-3 px-10 rounded-tr-lg text-black flex items-center space-x-4 ">
            <div className="mx-1 text-black">Work with us</div>
            <Image
              src="/Arrow.png"
              className="cursor-pointer"
              width={20}
              height={20}
            />
          </button>
        </div>
      </div>
      <div className="bg-white md:py-60 py-10 px-10 ">
        <div className="flex items-center justify-center">
          <Image src="/line.png" width={169} height={4} />
        </div>
        <div className="flex items-center justify-center text-black md:text-5xl text-2xl mt-8 ">
          Locations near me!
        </div>
        <div className="grid md:grid-cols-7 grid-cols-3 md:gap-5 gap-2 mt-10 max-w-7xl m-auto">
          <button class="border-solid border-2 border-amber-500 py-3 px-6 rounded-lg flex items-center justify-center space-x-4 ">
            <div className="text-black">Lucknow</div>
          </button>
          <button class="border-solid border-2 border-amber-500 py-3 px-6 rounded-lg flex items-center justify-center space-x-4 ">
            <div className="text-black">Lucknow</div>
          </button>
          <button class="border-solid border-2 border-amber-500 py-3 px-6 rounded-lg flex items-center justify-center space-x-4 ">
            <div className="text-black">Lucknow</div>
          </button>
          <button class="border-solid border-2 border-amber-500 py-3 px-6 rounded-lg flex items-center justify-center space-x-4 ">
            <div className="text-black">Lucknow</div>
          </button>
          <button class="border-solid border-2 border-amber-500 py-3 px-6 rounded-lg flex items-center justify-center space-x-4 ">
            <div className="text-black">Lucknow</div>
          </button>
          <button class="border-solid border-2 border-amber-500 py-3 px-6 rounded-lg flex items-center justify-center space-x-4 ">
            <div className="text-black">Lucknow</div>
          </button>
          <button class="border-solid border-2 border-amber-500 py-3 px-6 rounded-lg flex items-center justify-center space-x-4 ">
            <div className="text-black">Lucknow</div>
          </button>
          <button class="border-solid border-2 border-amber-500 py-3 px-6 rounded-lg flex items-center justify-center space-x-4 ">
            <div className="text-black">Lucknow</div>
          </button>
          <button class="border-solid border-2 border-amber-500 py-3 px-6 rounded-lg flex items-center justify-center space-x-4 ">
            <div className="text-black">Lucknow</div>
          </button>
          <button class="border-solid border-2 border-amber-500 py-3 px-6 rounded-lg flex items-center justify-center space-x-4 ">
            <div className="text-black">Lucknow</div>
          </button>
          <button class="border-solid border-2 border-amber-500 py-3 px-6 rounded-lg flex items-center justify-center space-x-4 ">
            <div className="text-black">Lucknow</div>
          </button>
          <button class="border-solid border-2 border-amber-500 py-3 px-6 rounded-lg flex items-center justify-center space-x-4 ">
            <div className="text-black">Lucknow</div>
          </button>
          <button class="border-solid border-2 border-amber-500 py-3 px-6 rounded-lg flex items-center justify-center space-x-4 ">
            <div className="text-black">Lucknow</div>
          </button>
          <button class="border-solid border-2 border-amber-500 py-3 px-6 rounded-lg flex items-center justify-center space-x-4 ">
            <div className="text-black">Lucknow</div>
          </button>
          <button class="border-solid border-2 border-amber-500 py-3 px-6 rounded-lg flex items-center justify-center space-x-4 ">
            <div className="text-black">Lucknow</div>
          </button>
          <button class="border-solid border-2 border-amber-500 py-3 px-6 rounded-lg flex items-center justify-center space-x-4 ">
            <div className="text-black">Lucknow</div>
          </button>
          <button class="border-solid border-2 border-amber-500 py-3 px-6 rounded-lg flex items-center justify-center space-x-4 ">
            <div className="text-black">Lucknow</div>
          </button>
          <button class="border-solid border-2 border-amber-500 py-3 px-6 rounded-lg flex items-center justify-center space-x-4 ">
            <div className="text-black">Lucknow</div>
          </button>
          <button class="border-solid border-2 border-amber-500 py-3 px-6 rounded-lg flex items-center justify-center space-x-4 ">
            <div className="text-black">Lucknow</div>
          </button>
          <button class="border-solid border-2 border-amber-500 py-3 px-6 rounded-lg flex items-center justify-center space-x-4 ">
            <div className="text-black">Lucknow</div>
          </button>
          <button class="border-solid border-2 border-amber-500 py-3 px-6 rounded-lg flex items-center justify-center space-x-4 ">
            <div className="text-black">Lucknow</div>
          </button>
          <button class="border-solid border-2 border-amber-500 py-3 px-6 rounded-lg flex items-center justify-center space-x-4 ">
            <div className="text-black">Lucknow</div>
          </button>
          <button class="border-solid border-2 border-amber-500 py-3 px-6 rounded-lg flex items-center justify-center space-x-4 ">
            <div className="text-black">Lucknow</div>
          </button>
          <button class="border-solid border-2 border-amber-500 py-3 px-6 rounded-lg flex items-center justify-center space-x-4 ">
            <div className="text-black">Lucknow</div>
          </button>
          <button class="border-solid border-2 border-amber-500 py-3 px-6 rounded-lg flex items-center justify-center space-x-4 ">
            <div className="text-black">Lucknow</div>
          </button>
          <button class="border-solid border-2 border-amber-500 py-3 px-6 rounded-lg flex items-center justify-center space-x-4 ">
            <div className="text-black">Lucknow</div>
          </button>
          <button class="border-solid border-2 border-amber-500 py-3 px-6 rounded-lg flex items-center justify-center space-x-4 ">
            <div className="text-black">Lucknow</div>
          </button>
          <button class="border-solid border-2 border-amber-500 py-3 px-6 rounded-lg flex items-center justify-center space-x-4 ">
            <div className="text-black">Lucknow</div>
          </button>
          <button class="border-solid border-2 border-amber-500 py-3 px-6 rounded-lg flex items-center justify-center space-x-4 ">
            <div className="text-black">Lucknow</div>
          </button>
          <button class="border-solid border-2 border-amber-500 py-3 px-6 rounded-lg flex items-center justify-center space-x-4 ">
            <div className="text-black">Lucknow</div>
          </button>
          <button class="border-solid border-2 border-amber-500 py-3 px-6 rounded-lg flex items-center justify-center space-x-4 ">
            <div className="text-black">Lucknow</div>
          </button>
          <button class="border-solid border-2 border-amber-500 py-3 px-6 rounded-lg flex items-center justify-center space-x-4 ">
            <div className="text-black">Lucknow</div>
          </button>
          <button class="border-solid border-2 border-amber-500 py-3 px-6 rounded-lg flex items-center justify-center space-x-4 ">
            <div className="text-black">Lucknow</div>
          </button>
          <button class="border-solid border-2 border-amber-500 py-3 px-6 rounded-lg flex items-center justify-center space-x-4 ">
            <div className="text-black">Lucknow</div>
          </button>
          <button class="border-solid border-2 border-amber-500 py-3 px-6 rounded-lg flex items-center justify-center space-x-4 ">
            <div className="text-black">Lucknow</div>
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
