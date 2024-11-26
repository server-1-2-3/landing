import { Statistics } from "./Statistics";
import pilot from "../assets/pilot.png";
import Image from "next/image";

export const About = () => {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <Image
            src={pilot}
            alt=""
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  درباره{" "}
                </span>
                سرور ۱۲۳
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                در سرور ۱۲۳، خدمات پیشرفته زیرساختی و مدارک معتبر بین‌المللی ارائه می‌کنیم. هدف ما توانمندسازی توسعه‌دهندگان و متخصصان IT برای ارتقای مهارت‌ها و همگام شدن با استانداردهای جهانی است.
                با تمرکز بر کیفیت و نوآوری، دسترسی آسان به دانش فنی و اعتبار حرفه‌ای را فراهم می‌کنیم. سرور۱۲۳ همراه مطمئن شما در مسیر رشد، موفقیت و دستیابی به جایگاه جهانی است.
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
