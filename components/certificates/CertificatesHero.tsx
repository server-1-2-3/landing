import Link from "next/link";
import { Button, buttonVariants } from "../ui/button";
import { CertificatesIconCloud } from "./CertificatesIconCloud";

export const CertificatesHero = () => {
  return (
    <section className="container overflow-hidden grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className=" text-center text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
              ارائه
            </span>{" "}
            گواهینامه‌های
          </h1>{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              بین المللی
            </span>{" "}
          </h2>
        </main>

        <p className="text-xl text-center text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          سرور ۱۲۳ از ابتدا تا انتها در کنار شماست.
        </p>

        <div className="text-center space-y-4 md:space-y-0 md:space-x-4">
          <Link
            href="#overview"
          >
            <Button className="w-full md:w-1/3">شروع کنید</Button>
          </Link>

          <Link
            href="https://server123.ir/blog-grid/"
            target="_blank"
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            یا سری به داکیومنت بزنید
          </Link>
        </div>
      </div>

      {/* Hero cards sections */}
      <CertificatesIconCloud></CertificatesIconCloud>
      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
