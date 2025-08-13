import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

type Speaker = {
  name: string;
  title: string;
  country: string;
  countryCode: string; // ISO 3166-1 alpha-2
  description: string;
  image?: string;
};

const speakers: Speaker[] = [
  {
    name: "Dr. Aria Bennett",
    title: "Chief Innovation Officer, CECI",
    country: "United States",
    countryCode: "us",
    description:
      "Leader in simulation-based learning and AI-driven assessment.",
  },
  {
    name: "Jordan Liu",
    title: "Head of AI Research",
    country: "Canada",
    countryCode: "ca",
    description: "Focuses on adaptive curricula and ML for clinical skills.",
  },
  {
    name: "Prof. Amal Hassan",
    title: "Dean of Medical Education",
    country: "Iraq",
    countryCode: "iq",
    description: "Leads national reforms in competency-based education.",
  },
  {
    name: "Dr. Luca Romano",
    title: "Curriculum Architect",
    country: "Italy",
    countryCode: "it",
    description: "Specialist in interprofessional team training.",
  },
  {
    name: "Dr. Aisha Khan",
    title: "Director of Assessment",
    country: "United Kingdom",
    countryCode: "gb",
    description: "OSCE standard setting and validity research expert.",
  },
  {
    name: "Prof. Omar Al-Mansouri",
    title: "Professor of Surgery",
    country: "United Arab Emirates",
    countryCode: "ae",
    description: "Enhances skill labs with high-fidelity simulation.",
  },
  {
    name: "Dr. Sofia Petrov",
    title: "Clinical Skills Lead",
    country: "Bulgaria",
    countryCode: "bg",
    description: "Designs milestone-based feedback ecosystems.",
  },
  {
    name: "Dr. Miguel Alvarez",
    title: "Medical Informatics",
    country: "Mexico",
    countryCode: "mx",
    description: "Interoperable records for competency tracking.",
  },
  {
    name: "Prof. Layla Nasser",
    title: "Educational Psychologist",
    country: "Egypt",
    countryCode: "eg",
    description: "Cognitive load optimization in complex simulations.",
  },
  {
    name: "Dr. Hana Suzuki",
    title: "Senior Lecturer",
    country: "Japan",
    countryCode: "jp",
    description: "XR/VR integration for procedural training.",
  },
  {
    name: "Dr. Pierre Moreau",
    title: "Assessment Scientist",
    country: "France",
    countryCode: "fr",
    description: "Blueprinting and longitudinal progression models.",
  },
  {
    name: "Prof. Sara Öztürk",
    title: "Professor of Pediatrics",
    country: "Türkiye",
    countryCode: "tr",
    description: "Parent–clinician communication curricula.",
  },
  {
    name: "Dr. Noura Al-Sabah",
    title: "Quality & Accreditation",
    country: "Kuwait",
    countryCode: "kw",
    description: "Accreditation pathways and outcome mapping.",
  },
];

function getFlagUrl(countryCode: string) {
  // Uses FlagCDN. 80px height is crisp and lightweight.
  return `https://flagcdn.com/h80/${countryCode.toLowerCase()}.png`;
}

function getPortraitPlaceholder(index: number) {
  // Deterministic avatar placeholder
  const imgId = (index % 70) + 1;
  return `https://i.pravatar.cc/800?img=${imgId}`;
}

const SpeakersSection = () => {
  const [api, setApi] = useState<CarouselApi | null>(null);

  // Simple autoplay without extra deps
  useEffect(() => {
    if (!api) return;
    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [api]);

  return (
    <section id="speakers" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-left md:text-left mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground px-6 py-2 rounded-full mb-4 shadow-glow">
            <span className="w-2 h-2 rounded-full bg-academic-gold" />
            <span className="font-semibold">Our Speakers</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Inspiring voices in medical education
          </h2>
        </div>

        <div className="relative">
          <Carousel
            setApi={setApi}
            opts={{ loop: true, align: "start" }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {speakers.map((spk, idx) => (
                <CarouselItem
                  key={spk.name}
                  className="pl-2 md:pl-4 basis-full sm:basis-2/3 md:basis-1/2 lg:basis-1/3 xl:basis-1/3"
                >
                  <Card className="relative overflow-hidden rounded-3xl border-0 bg-academic-navy text-white shadow-hero">
                    {/* Background image */}
                    <div className="relative">
                      <img
                        src={spk.image || getPortraitPlaceholder(idx)}
                        alt={spk.name}
                        className="w-full h-64 md:h-72 lg:h-80 object-cover opacity-90"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                    </div>

                    {/* Flag badge */}
                    <div className="absolute top-4 left-5">
                      <div className="w-14 h-14 rounded-full bg-white/80 backdrop-blur-sm p-1 shadow-glow flex items-center justify-center">
                        <img
                          src={getFlagUrl(spk.countryCode)}
                          alt={spk.country}
                          className="w-full h-full rounded-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <div className="mt-2">
                        <div className="text-sm text-white/70 mb-1">{spk.country}</div>
                        <h3 className="text-xl font-bold leading-tight">{spk.name}</h3>
                        <div className="text-white/80 text-sm mb-3">{spk.title}</div>
                        <p className="text-white/80 text-sm leading-relaxed line-clamp-3">
                          {spk.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4 top-1/2 -translate-y-1/2 bg-academic-gold text-academic-navy hover:bg-academic-gold/90 shadow-elevated" />
            <CarouselNext className="-right-4 top-1/2 -translate-y-1/2 bg-academic-gold text-academic-navy hover:bg-academic-gold/90 shadow-elevated" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;


