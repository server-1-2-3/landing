import image3 from "../../assets/reflecting.png";
import image4 from "../../assets/looking-ahead.png";
import Image, { StaticImageData } from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { CertificatesAnimatedList } from "./CertificatesAnimatedList";
import Ripple from "../ui/ripple";
import { Badge } from "../ui/badge";


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
    title: "با کارشناسان در ارطبات باشید",
    description:
      "کارشناسان ما در تمامی مراحل دریافت مدارک و گواهینامه‌‌های بین‌المللی در کنار شما هستند.",
    image: image3,
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

export const CertificatesOverview = () => {
  return (
    <section id="overview" className="container relative py-20 sm:py-20 space-y-8">
      <h2 className="z-10 text-3xl lg:text-4xl font-bold md:text-center">
        گواهینامه‌های {" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          بین‌المللی
        </span>
      </h2>

      <div className="flex z-10 flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge className="text-sm">
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid z-10 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
          </Card>
        ))}
        <Card key={"title"}>
          <CardHeader>
          </CardHeader>
          <CardContent>
            <CertificatesAnimatedList></CertificatesAnimatedList>
          </CardContent>
          <CardFooter>
          </CardFooter>
        </Card>
      </div>
      <Ripple/>
    </section>
  );
};
