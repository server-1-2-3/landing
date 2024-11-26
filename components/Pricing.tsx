import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check, Circle, GitlabIcon } from "lucide-react";

enum PopularPlanType {
  NO = 0,
  YES = 1,
}

interface PricingProps {
  title: string;
  popular: PopularPlanType;
  price: number | string;
  description: string;
  buttonText: string;
  benefitList: string[];
}


interface ManagedServicesProps {
  title: string;
  popular: PopularPlanType;
  price: number | string;
  description: string;
  buttonText: string;
  benefitList: string[];
  styles: any;
  icon: any;
}


const pricingList: PricingProps[] = [
  {
    title: "سرور هارپاگ",
    popular: 0,
    price: '۲۴۹،۰۰۰',
    description:
      "",
    buttonText: "سفارش این سرویس",
    benefitList: [
      "۳۰۰ گیگابایت ترافیک ",
      "۲۵ گیگابایت فضای SSD",
      " ۲ هسته cpu ",
      " ۲ گیگابایت حافظه RAM ",
      " موقعیت ایران ",
      " IP اختصاصی ",
      " کرنل اختصاصی ",
      " VNC / Reboot / Stop / Reinstall "
    ],
  },
  {
    title: "سرور آراسپ",
    popular: 0,
    price: '۳۹۹،۰۰۰',
    description:
      "",
    buttonText: "سفارش این سرویس",
    benefitList: [
      "۳۰۰ گیگابایت ترافیک ",
      "۳۰ گیگابایت فضای SSD",
      "۲ هسته cpu",
      "۳ گیگابایت حافظه RAM",
      " موقعیت ایران ",
      " IP اختصاصی ",
      " کرنل اختصاصی ",
      " VNC / Reboot / Stop / Reinstall "
    ],
  },
  {
    title: "سرور واتیس",
    popular: 1,
    price: '۴۸۹،۰۰۰',
    description:
      "",
    buttonText: "سفارش این سرویس",
    benefitList: [
      "۴۰۰ گیگابایت ترافیک ",
      "۵۰ گیگابایت فضای SSD",
      "۲ هسته cpu",
      "۴ گیگابایت حافظه RAM",
      " موقعیت ایران ",
      " IP اختصاصی ",
      " کرنل اختصاصی ",
      " VNC / Reboot / Stop / Reinstall "
    ],
  },
];

const managedServicePrices: ManagedServicesProps[] = [
  {
    title: "گیت‌لب EE",
    popular: 0,
    price: '۳۵۹،۰۰۰',
    description:
      "",
    buttonText: "سفارش این سرویس",
    benefitList: [
      "۳۰۰ گیگابایت ترافیک ",
      "۲۰ گیگابایت فضای SSD",
      " ۲ هسته cpu ",
      " ۲ گیگابایت حافظه RAM ",
      " موقعیت ایران ",
      " IP اختصاصی ",
      " کرنل اختصاصی ",
      " VNC / Reboot / Stop / Reinstall "
    ],
    styles: {
      backgroundColor: "rgba(255, 179, 0, 0.05)"
    },
    icon: <GitlabIcon></GitlabIcon>
  },
  {
    title: "سرور Wordpress",
    popular: 0,
    price: '۳۴۹،۰۰۰',
    description:
      "",
    buttonText: "سفارش این سرویس",
    benefitList: [
      "۳۰۰ گیگابایت ترافیک ",
      "۳۰ گیگابایت فضای SSD",
      "۲ هسته cpu",
      "۳ گیگابایت حافظه RAM",
      " موقعیت ایران ",
      " IP اختصاصی ",
      " کرنل اختصاصی ",
      " VNC / Reboot / Stop / Reinstall "
    ],
    icon: "",
    styles: {
      backgroundColor: "#007cff26"
    },
  },
  {
    title: "سرور Ansible",
    popular: 1,
    price: '۳۴۹،۰۰۰',
    description:
      "",
    buttonText: "سفارش این سرویس",
    benefitList: [
      "۴۰۰ گیگابایت ترافیک ",
      "۵۰ گیگابایت فضای SSD",
      "۲ هسته cpu",
      "۴ گیگابایت حافظه RAM",
      " موقعیت ایران ",
      " IP اختصاصی ",
      " کرنل اختصاصی ",
      " VNC / Reboot / Stop / Reinstall "
    ],
    icon: "",
    styles: {
      backgroundColor: '#ff00001c'
    },
  },
];



export const Pricing = () => {
  return (
    <>
      <section
        id="pricing"
        className="container py-24 sm:py-32"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          پلن های
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            {" "}
            پیشنهادی ما{" "}
          </span>

        </h2>
        <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
          علاوه بر کیفیت، ما قیمت‌های مناسبی برای سرویس‌های خود داریم
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingList.map((pricing: PricingProps) => (
            <Card
              key={pricing.title}
              className={
                pricing.popular === PopularPlanType.YES
                  ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10"
                  : ""
              }
            >
              <CardHeader>
                <CardTitle className="flex item-center justify-between">
                  {pricing.title}
                  {pricing.popular === PopularPlanType.YES ? (
                    <Badge
                      variant="secondary"
                      className="text-sm text-primary"
                    >
                      پرطرفدارترین
                    </Badge>
                  ) : null}
                </CardTitle>
                <div>
                  <span className="text-3xl font-bold">{pricing.price} تومان</span>
                  <span className="text-muted-foreground"> /ماه</span>
                </div>

                <CardDescription>{pricing.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <Button className="w-full">{pricing.buttonText}</Button>
              </CardContent>

              <hr className="w-4/5 m-auto mb-4" />

              <CardFooter className="flex">
                <div className="space-y-4">
                  {pricing.benefitList.map((benefit: string) => (
                    <span
                      key={benefit}
                      className="flex"
                    >
                      <Circle className="text-green-500" />{" "}
                      <h3 className="mr-2">{benefit}</h3>
                    </span>
                  ))}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
      <section
        id="pricing"
        className="container py-24 sm:py-32"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          سرویس‌های مدیریت شده
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            {" "}
            پیشنهادی ما{" "}
          </span>

        </h2>
        <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
          دیگر نیازی به دانش پیاده سازی ابزار‌ها ندارید.
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {managedServicePrices.map((pricing: ManagedServicesProps) => (
            <Card
              key={pricing.title}
              style={pricing.styles}
              className={
                pricing.popular === PopularPlanType.YES
                  ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10"
                  : ""
              }
            >
              <CardHeader>
                <CardTitle className="flex item-center justify-between">
                  {pricing.title}
                  <Badge
                    variant="secondary"
                    className="text-sm text-primary"
                  >
                    {pricing.icon}
                  </Badge>
                </CardTitle>
                <div>
                  <span className="text-3xl font-bold">{pricing.price} تومان</span>
                  <span className="text-muted-foreground"> /ماه</span>
                </div>

                <CardDescription>{pricing.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <Button className="w-full">{pricing.buttonText}</Button>
              </CardContent>

              <hr className="w-4/5 m-auto mb-4" />

              <CardFooter className="flex">
                <div className="space-y-4">
                  {pricing.benefitList.map((benefit: string) => (
                    <span
                      key={benefit}
                      className="flex"
                    >
                      <Circle className="text-green-500" />{" "}
                      <h3 className="mr-2">{benefit}</h3>
                    </span>
                  ))}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
};
