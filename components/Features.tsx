import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import image from "../assets/growth.png";
import image3 from "../assets/reflecting.png";
import image4 from "../assets/looking-ahead.png";
import Image, { StaticImageData } from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

interface FeatureProps {
  title: string;
  description: string;
  image: StaticImageData;
}

const features: FeatureProps[] = [
  {
    title: "هدف خود را انتخاب کنید",
    description:
      "ما انواع بسیاری از مدارک بین‌المللی را ارائه میدهیم. لیست را مشاهده کنید و هدف خود را انتخاب کنید.",
    image: image4,
  },
  {
    title: "با کارشناسان ما در ارتباط باشید",
    description:
      "کارشناسان ما در تمامی مراحل مشاوره، دریافت مدارک و گواهینامه‌‌های بین‌المللی در کنار شما هستند.",
    image: image3,
  },
  {
    title: "برای آزمون نهایی اماده شوید",
    description:
      "موفقیت در یک قدمی شماست. پس از آزمون نهایی گواهینامه خود را تحویل بگیرید.",
    image: image,
  },
];

const featureList: string[] = [
  "آمازون",
  "پی ام ای (PMI)",
  "کامپتیا (CompTIA)",
  "گوگل",
  "آی ای پی پی (IAPP)",
  "ال پی ای (LPI)",
  "مایکروسافت",
  "فورتینت",
  "سازمان پایتون",
  "اچ پی (HP)",
  "اسکرام (Scrum)",
  "Appian",
  "ISTQB",
  "CSA"
];

export const Features = () => {
  return (
    <section id="certificates" className="container py-24 sm:py-32 space-y-8">
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        گواهینامه‌های {" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          بین‌المللی
        </span>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge variant="secondary" className="text-sm">
              {feature}
            </Badge>
          </div>
        ))}

      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image }: FeatureProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              <Image
                src={image}
                alt="About feature"
                className="w-[200px] lg:w-[300px] mx-auto"
              />

            </CardFooter>
            <Link href={"/certificates"}>
              <Button className="w-full">برای اطلاعات بیشتر کلیک کنید</Button>
            </Link>

          </Card>
        ))}

      </div>
      <div>
      </div>
    </section>
  );
};
