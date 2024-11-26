import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Check, Linkedin } from "lucide-react";
import { LightBulbIcon } from "./Icons";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import Image from "next/image";

export const HeroCards = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">

      {/* Team */}
      <Card className="absolute right-[20px] top-[-30px] w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="mt-8 flex justify-center items-center pb-2">
          <Image
            src="https://www.svgrepo.com/download/474373/cloud-server.svg"
            alt="user avatar"
            width={100}
            height={100}
            className="absolute grayscale-[0%] -top-12 rounded-full w-24 h-24 aspect-square object-cover"
          />
          <CardTitle className="text-center">خدمات زیرساختی</CardTitle>
        </CardHeader>

        <CardContent className="text-center pb-2">
          <p>
            ارائه سرویس‌هایی مدیریت شده که با اتکا با توانایی های زیرساختی فعال، تجربه‌ای کاربردی ومانا برای شما فراهم خوهیم کرد.
          </p>
        </CardContent>

        <CardFooter>
          <div>
            <Link
              href="https://github.com/server-1-2-3"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">Github icon</span>
              <svg fill="#ef2929" width="25px" height="25px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" data-darkreader-inline-fill="">
                <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                <g id="SVGRepo_iconCarrier"> <path d="M14.156 15.297l6.25 4.927-4.141-10.214zM16 0c-8.839 0-16 7.161-16 16s7.161 16 16 16c8.839 0 16-7.161 16-16s-7.161-16-16-16zM23.729 23.073c-0.016 0.63-0.536 1.125-1.167 1.109-0.313 0-0.552-0.12-0.885-0.391l-8.255-6.667-2.771 6.938h-2.396l6.995-16.807c0.167-0.422 0.568-0.693 1.021-0.677 0.432-0.016 0.839 0.25 0.99 0.677l6.365 15.323c0.057 0.151 0.104 0.313 0.104 0.464 0 0.010 0 0.010 0 0.031z" /> </g>
              </svg>
            </Link>

            <Link
              href=""
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">Managet Gitlab EE</span>
              <svg width="25px" height="25px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><path fill="#FC6D26" d="M14.975 8.904L14.19 6.55l-1.552-4.67a.268.268 0 00-.255-.18.268.268 0 00-.254.18l-1.552 4.667H5.422L3.87 1.879a.267.267 0 00-.254-.179.267.267 0 00-.254.18l-1.55 4.667-.784 2.357a.515.515 0 00.193.583l6.78 4.812 6.778-4.812a.516.516 0 00.196-.583z" /><path fill="#E24329" d="M8 14.296l2.578-7.75H5.423L8 14.296z" /><path fill="#FC6D26" d="M8 14.296l-2.579-7.75H1.813L8 14.296z" /><path fill="#FCA326" d="M1.81 6.549l-.784 2.354a.515.515 0 00.193.583L8 14.3 1.81 6.55z" /><path fill="#E24329" d="M1.812 6.549h3.612L3.87 1.882a.268.268 0 00-.254-.18.268.268 0 00-.255.18L1.812 6.549z" /><path fill="#FC6D26" d="M8 14.296l2.578-7.75h3.614L8 14.296z" /><path fill="#FCA326" d="M14.19 6.549l.783 2.354a.514.514 0 01-.193.583L8 14.296l6.188-7.747h.001z" /><path fill="#E24329" d="M14.19 6.549H10.58l1.551-4.667a.267.267 0 01.255-.18c.115 0 .217.073.254.18l1.552 4.667z" /></svg>

            </Link>

            <Link
              href=""
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">Linkedin icon</span>
              <svg width="25px" height="25px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" r="14" fill="#028CB0" />
                <path d="M6.45538 16C6.45538 19.7823 8.65538 23.04 11.8369 24.5885L7.28462 12.1162C6.73798 13.338 6.45541 14.6615 6.45538 16ZM16 25.5446C17.1085 25.5446 18.1746 25.35 19.1731 25.0031L19.1054 24.8762L16.1692 16.8377L13.3092 25.1554C14.1554 25.4092 15.0608 25.5446 16 25.5446ZM17.3115 11.5238L20.7638 21.7877L21.72 18.6062C22.1262 17.2862 22.4392 16.3385 22.4392 15.5177C22.4392 14.3331 22.0162 13.5208 21.6608 12.8946C21.17 12.0992 20.7215 11.4308 20.7215 10.6523C20.7215 9.77231 21.3815 8.96 22.3292 8.96H22.4477C20.689 7.34546 18.3874 6.45141 16 6.45538C14.4192 6.45509 12.8632 6.84777 11.4718 7.59809C10.0805 8.34842 8.89746 9.43285 8.02923 10.7538L8.63846 10.7708C9.63692 10.7708 11.1769 10.6438 11.1769 10.6438C11.7015 10.6185 11.7608 11.3715 11.2446 11.4308C11.2446 11.4308 10.7285 11.4985 10.1446 11.5238L13.6308 21.8638L15.7208 15.6023L14.2315 11.5238C13.898 11.5054 13.565 11.4772 13.2331 11.4392C12.7169 11.4054 12.7762 10.6185 13.2923 10.6438C13.2923 10.6438 14.8662 10.7708 15.8054 10.7708C16.8038 10.7708 18.3438 10.6438 18.3438 10.6438C18.86 10.6185 18.9277 11.3715 18.4115 11.4308C18.4115 11.4308 17.8954 11.49 17.3115 11.5238ZM20.7977 24.25C22.2416 23.4104 23.4399 22.2066 24.2729 20.7589C25.1059 19.3112 25.5444 17.6703 25.5446 16C25.5446 14.3415 25.1215 12.7846 24.3769 11.4223C24.5281 12.9211 24.3012 14.4339 23.7169 15.8223L20.7977 24.25ZM16 27C13.0826 27 10.2847 25.8411 8.22183 23.7782C6.15893 21.7153 5 18.9174 5 16C5 13.0826 6.15893 10.2847 8.22183 8.22183C10.2847 6.15893 13.0826 5 16 5C18.9174 5 21.7153 6.15893 23.7782 8.22183C25.8411 10.2847 27 13.0826 27 16C27 18.9174 25.8411 21.7153 23.7782 23.7782C21.7153 25.8411 18.9174 27 16 27Z" fill="white" />
              </svg>
            </Link>
          </div>
        </CardFooter>
        <Link
          href="https://my.server123.ir/index.php/store/server123fire"
          target="_blank"
          className={buttonVariants({
            variant: "ghost",
            size: "sm",
          }) + ' w-full'}
        >
          <Button className="w-full mb-5">محصولات ما</Button>
        </Link>
      </Card>

      {/* Pricing */}
      <Card className="absolute top-[150px] left-[50px] w-72  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader>
          <CardTitle className="flex item-center justify-between">
            سرور Gitlab
            <Badge variant="secondary" className="text-sm text-primary">
              پرطرفدارترین
            </Badge>
          </CardTitle>
          <div>
            <span className="text-xl font-bold"> 3,590,000 ریال</span>
            <span className="text-muted-foreground"> /ماه</span>
          </div>

          <CardDescription>
            سرور گیتلب خود را به راحتی راه اندازی کنید.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Button className="w-full">خرید این سرویس</Button>
        </CardContent>

        <hr className="w-4/5 m-auto mb-4" />

        <CardFooter className="flex">
          <div className="space-y-4">
            {["تمامی امکانات فعال", "بدون محدودیت", "پشتیبانی عالی"].map(
              (benefit: string) => (
                <span key={benefit} className="flex">
                  <Check className="text-green-500" />{" "}
                  <h3 className="mr-2">{benefit}</h3>
                </span>
              )
            )}
          </div>
        </CardFooter>
      </Card>

      {/* Service */}
      <Card className="absolute w-[350px] -right-[10px] bottom-[-90px]  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
          <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
            <LightBulbIcon></LightBulbIcon>
          </div>
          <div>
            <CardTitle>گواهی‌نامه بین المللی</CardTitle>
            <CardDescription className="text-md mt-2">
              تصحیل گواهی‌نامه های بین‌المللی.
            </CardDescription>

          </div>
        </CardHeader>
        <CardFooter>
          <div className="space-y-4 w-full">
            {["آمازون", "پی ام ای (PMI)", "کامپتیا (CompTIA)", ". . ."].map(
              (benefit: string) => (
                <span key={benefit} className="flex">
                  <Check className="text-green-500" />{" "}
                  <h3 className="mr-2">{benefit}</h3>
                </span>
              )
            )}

            <Link
              href="#certificates"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              }) + ' w-full'}
            >
              <Button className="w-full">دیدن گواهینامه‌ها</Button>
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};
