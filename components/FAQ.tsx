import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "سرور 123 چه خدماتی می تواند ارائه نماید؟",
    answer: "ما در تلاشیم تا بتوانیم خدمات زیرساخت و سایر خدمات در زمینه دواپس را به تمامی همکاران خود ارائه نماییم",
    value: "item-1",
  },
  {
    question: "گواهینامه های بین الملل چه فایده ای دارند ؟",
    answer: " شما با دریافت این مدارک هم میتوانید گواهی تخصصی از شرکت اصلی دریافت نماید همچنین در پروسه مهاجرت و همچنین جایگاه شغلی تخصصی می توانید به راحتی مشغول به کار شوید",
    value: "item-1",
  },
  {
    question: "آیا گواهینامه های بین المللی آنلاین معتبر است؟",
    answer: "قطعا، ناظر این آزمون ها از خود شرکت اصلی در آزمون شماست و مدرک شما نیز این موضوع قید می گردد",
    value: "item-1",
  },
  {
    question: "تفاوت ثبت نام از طریق سرور123 با افرادی که ثبت نام می کنند در چیست ؟",
    answer: "مهم نرین مزیت ما احراز هویت شماست. ما از طریق سنتر رسمی خود شما را تایید می نماییم . لازم به ذکر است سنتر های خارجی ایرانیان را به سختی احراز می کنند و در آزمون های آنلاین اگر نیاز به احراز توسط ناظر باشد شما را رد خواهد کرد",
    value: "item-1",
  },
  {
    question: "در زمینه زیرساخت و گواهینامه های بین الملل چند سال سابقه دارید ؟",
    answer: "سنتر آزمون ما حدود 5 سال و در زمینه تامین زیرساخت حدود 10 سال سابقه حرفه ایم داریم",
    value: "item-1",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        سوالات{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          پرتکرار
        </span>
      </h2>

      <Accordion type="single" collapsible className="w-full AccordionRoot">
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
