import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      q: "When and where is ISUMEC 2025?",
      a: "October 25–27, 2025 in Karbala, Iraq at Al-Subtain University of Medical Sciences.",
    },
    {
      q: "What is the abstract submission deadline?",
      a: "August 20, 2025. Notifications will be sent by September 15, 2025.",
    },
    {
      q: "Which topics are encouraged?",
      a: "AI in Medical Education, CBME, Quality Assurance & Accreditation, Faculty Development, Workplace-Based Assessment, Social Accountability, and more.",
    },
    {
      q: "Which disciplines are eligible?",
      a: "Medicine, Dentistry, Pharmacy, Nursing, Midwifery, and Allied Health across UME, PGME, and CME/CPD.",
    },
    {
      q: "Is there a publication opportunity?",
      a: "Selected accepted abstracts may be considered for JAMP (Scopus-indexed; CiteScore 3.6). Publication fees sponsored by Al-Subtain University.",
    },
    {
      q: "How can I contact the organizers?",
      a: "Email isumec2025@sums.edu.iq or call +964 787 5729 523.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Frequently Asked Questions</h2>
          <p className="text-muted-foreground mt-4">Answers to common questions about ISUMEC 2025.</p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((item, idx) => (
            <AccordionItem key={idx} value={`faq-${idx}`}>
              <AccordionTrigger className="text-left text-lg">{item.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;


