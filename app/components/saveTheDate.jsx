import Image from "next/image";

export default function SaveTheDate({ t }) {
  return (
    <div className="z-10 flex flex-col items-center justify-center text-center -translate-y-[40vh] px-15">
      <h1 className="kotaykFont">{t.saveTheDate}</h1>
      <div className="flex items-center justify-between">
        <div className="relative w-full h-full flex flex-col items-center gap-8">
          <p className="dzeragirFont " style={{fontSize: "46px"}}>26.06.2026</p>
          <Image
            alt=""
            src={"/detail.png"}
            width={600}
            height={600}
            className="object-cover rounded-4xl"
          />
          {/* <div className="flex flex-col justify-end items-center absolute h-full -top-5 right-4 text-[#482929]">
            <span className="text-[100px] dzeragirFont">26</span>
            <span className="text-[100px] dzeragirFont leading-2">06</span>
            <span className="text-[100px] dzeragirFont">26</span>
          </div> */}
        </div>
      </div>
    </div>
  );
}
