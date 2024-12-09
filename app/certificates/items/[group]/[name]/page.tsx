'use client'

import { CertificateCard } from "@/components/certificates/CertificateCard";
import { loadAllCertificates } from "@/lib/actions";
import { Product } from "@/interfaces/iproduct";
import { useParams } from 'next/navigation';
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";

export default function CartificatesCategoryItems() {
  const [groupItems, setGroupItems] = useState<Product[]>([]);
  const [isLoading, setLoading] = useState(true);

  const params = useParams();

  const group = params.group;
  const name = decodeURI(params.name as string);

  useEffect(() => {
    loadAllCertificates(group as string)
      .then(data => {
        setGroupItems(data.products.product);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      })
  }, [group]);

  return (
    <>
      <div className="p-4">
        <h1 className="text-6xl p-10">{name.toString()}</h1>
        <p> فقط کافیست هدف خود را انتخاب و سپس پرداخت کنید</p>

      </div>
      <hr></hr>
      <div className="flex flex-wrap p-5">
        {isLoading ? (<Loader2 size={100} className="animate-spin"></Loader2>) : ''}
        {...groupItems.map((certificate, index) => {
          return (
            <CertificateCard key={index} certificate={certificate}>
            </CertificateCard>
          )
        })}
      </div>

    </>
  );
}
