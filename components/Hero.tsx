import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="container grid overflow-hidden lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
            ارائه
            </span>{" "}
             سرویس‌های تخصصی مرتبط با زیرساخت‌
          </h1>{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              و ارائه مدارک بین المللی
            </span>{" "}
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
        این سامانه خدمات تخصصی زیرساختی و مدارک بین‌المللی را به توسعه‌دهندگان و مدیران سرور ارائه می‌دهد تا مهارت‌ها و دانش خود را ارتقا داده و بر اساس استانداردهای جهانی فعالیت کنند.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Link
            href="https://my.server123.ir/index.php/login"
            target="_blank"
            
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
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
