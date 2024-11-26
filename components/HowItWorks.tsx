import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "./Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "شناسایی زیر ساخت هدف",
    description:
      "در ابتدا می بایست نیاز خود را در زیرساخت جهت دریافت با کیفیت ترین زیرساخت شناسایی نمایید.",
  },
  {
    icon: <MapIcon />,
    title: "ثبت نام و ورود به سایت",
    description:
      "ابتدا می بایست در سایت ثبت نام نمایید و به حساب کاربری خود وارد شده و حساب خود را فعال نمایید .",
  },
  {
    icon: <PlaneIcon />,
    title: "دریافت زیرساخت",
    description:
      "پس از اینکه اکانت شما فعال شد . می توانید زیرساخت مد نظر خود را که در مرحله اول شناسایی نموده اید تهیه نمایید.",
  },
  {
    icon: <GiftIcon />,
    title: "شروع به استفاده",
    description:
      "از سرویس‌های خود استفاده کنید و لذت ببرید. در صورت نیاز همکاران شما در تمامی مراحل همراه ما هستند",
  },
];

export const HowItWorks = () => {
  return (
    <section id="howItWorks" className="container text-center py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold ">
        چند{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          گام{" "}
        </span>
        ساده برای دریافت سرویس در ۳ دقیقه
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        شما می توانید با کمک ما مشکلات خود را به سادگی رفع نمایید و بدون دغدغه به توسعه نرم افزار یا زیرساخت خود بپردازید .
        می توانید به راحتی زیرساخت آماده خود را ایجاد نمایید بدون اینکه وابسته باشید !
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card key={title} className="bg-muted/50">
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
