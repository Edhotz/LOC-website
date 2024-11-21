"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function ServicesCard() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));

  return (
    <div className="w-full">
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] rounded-3xl mb-4"
          >
            <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Legalizacoes de imoveis",
    title: "Saiba mais sobre mais legalizacoes de imoveis",
    src: "https://haksezldnsxyenpcdjph.supabase.co/storage/v1/object/public/Assets/legalization.jpg",
    content: <DummyContent />,
  },
  {
    category: "Relacoes publicas e comunicacao",
    title: "Entenda nais sobre relacoes publicas e comunicacao",
    src: "https://haksezldnsxyenpcdjph.supabase.co/storage/v1/object/public/Assets/coworking.jpg",
    content: <DummyContent />,
  },
  {
    category: "Eventos",
    title: "Saiba mais sobre eventos",
    src: "https://haksezldnsxyenpcdjph.supabase.co/storage/v1/object/public/Assets/events.jpg?t=2024-11-20T11%3A07%3A07.360Z",
    content: <DummyContent />,
  },

  {
    category: "Design",
    title: "Design e publicidade",
    src: "https://haksezldnsxyenpcdjph.supabase.co/storage/v1/object/public/Assets/design.jpg",
    content: <DummyContent />,
  },
  {
    category: "Formacao profissional",
    title: "Saiba mais sobre as nossas formacoes profissionais",
    src: "https://haksezldnsxyenpcdjph.supabase.co/storage/v1/object/public/Assets/formations.jpg?t=2024-11-20T11%3A17%3A10.572Z",
    content: <DummyContent />,
  },
];

