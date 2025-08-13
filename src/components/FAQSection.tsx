import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type FAQItem = { q: string; a: string };
type FAQCategory = { id: string; label: string; items: FAQItem[] };

const CATEGORIES: FAQCategory[] = [
  {
    id: "general",
    label: "General",
    items: [
      { q: "When and where is ISUMEC 2025?", a: "October 25–27, 2025 in Karbala, Iraq at Al-Subtain University of Medical Sciences." },
      { q: "What is the conference theme?", a: "Advancing medical education through innovation, collaboration, and social accountability across UME, PGME, and CPD." },
      { q: "Who can attend?", a: "Educators, clinicians, residents, students, policymakers, accreditation bodies, and industry partners across health professions." },
      { q: "Will sessions be recorded?", a: "Keynotes and select sessions will be recorded and made available to registered participants post-event." },
      { q: "Are there networking opportunities?", a: "Yes. Welcome reception, themed roundtables, and poster walks are scheduled to encourage collaboration and partnerships." },
    ],
  },
  {
    id: "abstracts",
    label: "Abstracts",
    items: [
      { q: "Submission deadline", a: "August 20, 2025. Notifications by September 15, 2025." },
      { q: "Presentation formats", a: "Oral presentations, posters, workshops, and panels. You may specify preferences during submission." },
      { q: "Topics encouraged", a: "AI in Medical Education, CBME, Workplace-Based Assessment, Simulation & XR, Faculty Development, QA & Accreditation, Social Accountability, and more." },
      { q: "Publication opportunity", a: "Selected accepted abstracts may be considered for JAMP (Scopus-indexed; CiteScore 3.6). Publication fees sponsored by Al-Subtain University." },
      { q: "Word limits and structure", a: "Up to 300 words. Recommended structure: Background, Methods, Results, Conclusions/Implications." },
      { q: "Can I edit my submission?", a: "You may edit until the deadline by logging into your submission portal. After the deadline, edits are not permitted." },
    ],
  },
  {
    id: "registration",
    label: "Registration",
    items: [
      { q: "How do I register?", a: "Use the Register button on the homepage. You will receive a confirmation email upon payment." },
      { q: "Payment methods", a: "Major credit/debit cards and bank transfer are accepted. Group payments available on request." },
      { q: "Refund policy", a: "Full refund before September 10, 2025. 50% refund until October 1, 2025. No refunds after October 1, 2025." },
      { q: "Student discounts", a: "Discounted rates are available for students and trainees with valid identification." },
      { q: "Group rates", a: "Institutions sending 5+ delegates may request a group discount by contacting the registration team." },
    ],
  },
  {
    id: "travel",
    label: "Travel & Visa",
    items: [
      { q: "Visa support", a: "Invitation letters are provided to registered participants upon request. Processing time varies by country." },
      { q: "Airports & transport", a: "Nearest airports: Najaf and Baghdad. Shuttle options and local transport recommendations will be shared via email." },
      { q: "Safety & logistics", a: "The organizing committee coordinates with local authorities to ensure a safe and smooth experience." },
      { q: "Accommodation", a: "Partner hotels with conference rates will be listed on the website. Early booking is recommended." },
      { q: "Weather & dress code", a: "Late October is mild. Business casual is appropriate; bring a light jacket for evenings and comfortable walking shoes." },
    ],
  },
  {
    id: "onsite",
    label: "Onsite",
    items: [
      { q: "Badge pickup", a: "Registration desk opens one day prior to the conference. Bring your confirmation email and ID." },
      { q: "Certificates & CPD", a: "Electronic certificates will be emailed within 5–10 working days. CPD hours will be announced per session." },
      { q: "Accessibility", a: "Venues are accessible. For specific accommodations, contact us at least two weeks prior to the event." },
      { q: "Language", a: "Sessions are primarily in English. Select sessions may include Arabic translation." },
      { q: "Wi‑Fi & power", a: "High-speed Wi‑Fi is available at the venue. Limited charging stations are provided; consider bringing a portable charger." },
    ],
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Frequently Asked Questions</h2>
          <p className="text-muted-foreground mt-4">Find quick answers about abstracts, registration, travel, and onsite logistics.</p>
        </div>

        <Tabs defaultValue="general" className="w-full">
          <TabsList className="flex flex-wrap gap-2 bg-secondary/60 p-2">
            {CATEGORIES.map((cat) => (
              <TabsTrigger key={cat.id} value={cat.id} className="data-[state=active]:bg-background data-[state=active]:text-foreground">
                {cat.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {CATEGORIES.map((cat) => (
            <TabsContent key={cat.id} value={cat.id} className="mt-6">
              <Accordion type="multiple" className="w-full">
                {cat.items.map((item, idx) => (
                  <AccordionItem key={`${cat.id}-${idx}`} value={`${cat.id}-${idx}`}>
                    <AccordionTrigger className="text-left text-lg">{item.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">{item.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-10 text-center text-sm text-muted-foreground">
          Still need help? Email <a className="underline" href="mailto:isumec2025@sums.edu.iq">isumec2025@sums.edu.iq</a> or call <span className="font-medium">+964 787 5729 523</span>.
        </div>
      </div>
    </section>
  );
};

export default FAQSection;


