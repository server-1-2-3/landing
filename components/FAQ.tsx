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
    question: "سوال پر تکرار",
    answer: "جواب سوال اول",
    value: "item-1",
  },
  {
    question: "سوال پر تکرار",
    answer: "جواب سوال اول",
    value: "item-1",
  },
  {
    question: "سوال پر تکرار",
    answer: "جواب سوال اول",
    value: "item-1",
  },
  {
    question: "سوال پر تکرار",
    answer: "جواب سوال اول",
    value: "item-1",
  },
  {
    question: "سوال پر تکرار",
    answer: "جواب سوال اول",
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
