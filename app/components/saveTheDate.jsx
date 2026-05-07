import Image from "next/image";

export default function SaveTheDate({ t }) {
  return (
    <div className="z-10 flex flex-col items-center justify-center text-center gap-8 -translate-y-[40vh] px-5">
      <h1>{t.saveTheDate}</h1>
      <div className="flex items-center justify-between">
        <div className="relative w-full h-full">
          <Image
            alt=""
            src={"/detailed.jpg"}
            width={600}
            height={600}
            className="object-cover rounded-4xl"
          />
          <div className="flex flex-col justify-end items-center absolute h-full top-0 right-8 text-[#563a3a]">
            <span className="text-[120px] dzeragirFont">26</span>
            <span className="text-[120px] dzeragirFont leading-2">06</span>
            <span className="text-[120px] dzeragirFont">26</span>
          </div>
        </div>
      </div>
    </div>
  );
}
