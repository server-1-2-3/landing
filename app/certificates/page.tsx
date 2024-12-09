import { CertificatesOverview } from "@/components/certificates/CertificatesOverview";

export default async function Home() {
  try {
    return (
      <>
        <CertificatesOverview></CertificatesOverview>
      </>
    );
  }
  catch (e) {
    return (<>مشکلی در ارطبات با سرور پیش آمده</>)
  }
}
