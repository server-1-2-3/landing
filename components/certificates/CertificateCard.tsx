import ImagePlaceHolderSvg from '../../assets/image-combiner-svgrepo-com.svg'
import { digitsEnToFa, addCommas } from "@persian-tools/persian-tools";
import { Product } from "@/interfaces/iproduct";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from 'next/link';

export const CertificateCard = function ({ certificate }: { certificate: Product }) {

  return (
    <div
      className="relative flex-row w-full h-full h-[250px] transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-115 hover:bg-blue-700 hover:text-white duration-300 rounded-xl border cursor-pointer m-3 max-w-[300px] h-[200px] flex-col items-start justify-start  whitespace-warp"
    >
      <div className="w-[100%] bg-blue-500 p-2 text-center  bg-opacity-[0.2] text-small">{certificate.name}</div>
      

      <div className="pr-[90px]">
        <Image src={ImagePlaceHolderSvg} width={100} alt='' height={100} ></Image>
      </div>


      <div className="absolute bottom-10 w-full">
        <Button variant={"ghost"} className="rounded-none w-full">
          {digitsEnToFa(addCommas(+certificate.pricing.IRR.monthly))} {' '}
          ریال
        </Button>
      </div>

      <div className="absolute bottom-0 w-full">
        <Link href={certificate.product_url} >
        <Button className="rounded-none w-full">خرید</Button>
        </Link>
      </div>

    </div>
  );
}