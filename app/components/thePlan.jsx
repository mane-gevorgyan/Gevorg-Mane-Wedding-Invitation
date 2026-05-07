import Image from "next/image";

export default function ThePlan({ t }) {
  const onClick = ({ src }) => {
    window.open(src, "_blank");
  };

  return (
    <div className="z-10 flex flex-col items-center justify-center text-center text-white gap-8 px-6 -translate-y-[30vh]">
      <h1>{t.plan}</h1>

      <div className="flex flex-col gap-24">
        <div className="flex flex-col gap-2">
          <h4>15:30</h4>
          <h2>{t.weddingCeremony}</h2>
          <Image
            alt=""
            src={"/church.svg"}
            width={600}
            height={600}
            className="object-cover rounded-4xl"
          />
          <h3 className="my-4">{t.church}</h3>
          <button
            className="px-6 py-3 bg-[#b4a790] text-white rounded-full"
            onClick={() =>
              onClick({
                src: "https://www.google.com/maps/place/Saint+Gregory+The+Illuminator+Cathedral/@40.1721579,44.514665,17z/data=!3m1!4b1!4m6!3m5!1s0x406abcf5dce61905:0x5b1b85523b3f82de!8m2!3d40.1721579!4d44.5172399!16s%2Fm%2F06w5y6_?entry=ttu&g_ep=EgoyMDI2MDQyOS4wIKXMDSoASAFQAw%3D%3D",
              })
            }
          >
            {t.howToGetThere}
          </button>
        </div>

        <div className="flex flex-col gap-4">
          <h4>18:00</h4>
          <h2>{t.weddingParty}</h2>
          <Image
            alt=""
            src={"/restaurant1.svg"}
            width={600}
            height={600}
            className="object-cover rounded-4xl"
          />
          <h3 className="my-4">{t.restaurant}</h3>
          <button
            className="px-6 py-3 bg-[#b4a790] text-white rounded-full"
            onClick={() =>
              onClick({
                src: "https://www.google.com/maps/place/Van/@40.1880956,44.5971362,17z/data=!3m1!4b1!4m6!3m5!1s0x406aa55c4d8fc561:0xccf6e794aba96587!8m2!3d40.1880956!4d44.5997111!16s%2Fg%2F11hvj_6y5h?entry=ttu&g_ep=EgoyMDI2MDQyOS4wIKXMDSoASAFQAw%3D%3D",
              })
            }
          >
            {t.howToGetThere}
          </button>
        </div>
      </div>
    </div>
  );
}
