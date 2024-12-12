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

const generateDescription = (category) => {
  switch (category) {
    case "Legalizacoes de imoveis":
      return "Obtenha todas as informações necessárias para regularizar o seu imóvel de forma prática e eficiente.";
    case "Relacoes publicas e comunicacao":
      return "Explore as melhores estratégias de comunicação e engajamento para o seu público-alvo.";
    case "Eventos":
      return "Descubra como planejar e executar eventos inesquecíveis com nossa ajuda especializada.";
    case "Design":
      return "Inspire-se com soluções criativas em design e publicidade para elevar sua marca.";
    case "Formacao profissional":
      return "Aprimore suas habilidades com formações profissionais personalizadas e práticas.";
    default:
      return "Saiba mais sobre nossos serviços e como podemos ajudar você.";
  }
};

const DummyContent = ({ description, image }) => {
  return (
    <div className="bg-[#F5F5F7] rounded-3xl mb-4">
      <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto p-4">
        <span className="font-bold text-neutral-700">{description}</span>
      </p>
      <Image
        src={image}
        alt="Content image"
        height="500"
        width="500"
        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
      />
    </div>
  );
};

const data = [
  {
    category: "Legalizacoes de imoveis",
    title: "Saiba mais sobre legalizacoes de imoveis",
    description: generateDescription("Legalizacoes de imoveis"),
    src: "https://haksezldnsxyenpcdjph.supabase.co/storage/v1/object/public/Assets/legalization.jpg",
    content: (
      <DummyContent
        description={generateDescription("Legalizacoes de imoveis")}
        image="https://haksezldnsxyenpcdjph.supabase.co/storage/v1/object/public/Assets/legalization.jpg"
      />
    ),
  },
  {
    category: "Relacoes publicas e comunicacao",
    title: "Entenda mais sobre relacoes publicas e comunicacao",
    description: generateDescription("Relacoes publicas e comunicacao"),
    src: "https://haksezldnsxyenpcdjph.supabase.co/storage/v1/object/public/Assets/coworking.jpg",
    content: (
      <DummyContent
        description={generateDescription("Relacoes publicas e comunicacao")}
        image="https://haksezldnsxyenpcdjph.supabase.co/storage/v1/object/public/Assets/coworking.jpg"
      />
    ),
  },
  {
    category: "Eventos",
    title: "Saiba mais sobre eventos",
    description: generateDescription("Eventos"),
    src: "https://haksezldnsxyenpcdjph.supabase.co/storage/v1/object/public/Assets/events.jpg?t=2024-11-20T11%3A07%3A07.360Z",
    content: (
      <DummyContent
        description={generateDescription("Eventos")}
        image="https://haksezldnsxyenpcdjph.supabase.co/storage/v1/object/public/Assets/events.jpg?t=2024-11-20T11%3A07%3A07.360Z"
      />
    ),
  },
  {
    category: "Design",
    title: "Design e publicidade",
    description: generateDescription("Design"),
    src: "https://haksezldnsxyenpcdjph.supabase.co/storage/v1/object/public/Assets/design.jpg",
    content: (
      <DummyContent
        description={generateDescription("Design")}
        image="https://haksezldnsxyenpcdjph.supabase.co/storage/v1/object/public/Assets/design.jpg"
      />
    ),
  },
  {
    category: "Formacao profissional",
    title: "Saiba mais sobre as nossas formacoes profissionais",
    description: generateDescription("Formacao profissional"),
    src: "https://haksezldnsxyenpcdjph.supabase.co/storage/v1/object/public/Assets/formations.jpg?t=2024-11-20T11%3A17%3A10.572Z",
    content: (
      <DummyContent
        description={generateDescription("Formacao profissional")}
        image="https://haksezldnsxyenpcdjph.supabase.co/storage/v1/object/public/Assets/formations.jpg?t=2024-11-20T11%3A17%3A10.572Z"
      />
    ),
  },
];
