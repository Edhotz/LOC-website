"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useRouter } from "next/navigation";
import GridPattern from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";
import PulsatingButton from "@/components/ui/pulsating-button";
import { ServicesDialog } from "@/components/services-dialog";
import BlurFade from "@/components/ui/blur-fade";
import {
  designImage,
  enterprisepersonImage,
  flagImage,
  headerImage,
  HygieneImage,
  legalizationImage,
  locLogo,
} from "@/lib/constants";
import { ServicesCard } from "@/components/services-cards";
import { ContactModal } from "@/components/contact-modal";

export default function Component() {
  const router = useRouter();
  return (
    <div className="flex min-h-screen flex-col">
      <GridPattern
        width={20}
        height={20}
        x={-1}
        y={-1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] "
        )}
      />
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-8">
        <div className="container flex h-14 items-center justify-between">
          <Link className="font-semibold p-2" href="/">
            <Image src={locLogo} width={90} height={70} alt="Loc logo" />
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link className="text-sm hover:underline" href="#services">
              Servicos
            </Link>
            <Link className="text-sm hover:underline" href="#partners">
              Parceiros
            </Link>
            <Link className="text-sm hover:underline" href="#about">
              A Empresa
            </Link>
          </nav>
          <PulsatingButton onClick={() => router.push("contact")}>
            Entre em contacto
          </PulsatingButton>
        </div>
      </header>
      <main className="flex-1 p-10 flex flex-col">
        <section className="flex flex-col gap-10 p-10 md:p-14 lg:p-20">
          <BlurFade>
            <div className="">
              <div className="grid gap-4 text-start">
                <div className="space-y-2 max-w-4xl">
                  <div className="text-md text-muted-foreground text-blue-500">
                    Luanda Office Center
                  </div>
                  <h1 className="text-2xl font-bold tracking-tighter sm:text-2xl md:text-3xl lg:text-4xl">
                    UM NOVO CONCEITO DE PRESTACAO DE SERVIÇOS ESSENCIAIS PARA O
                    SUCESSO PROFISSIONAL, PESSOAL E PARA O DESENVOLVIMENTO
                    SUSTENTÁVEL
                  </h1>
                </div>
              </div>
            </div>
          </BlurFade>

          <BlurFade className="">
            <div className="relative h-[400px] w-full rounded-md">
              <Image
                alt="Header image"
                className="object-cover rounded-lg"
                fill
                src={headerImage}
                priority
              />
            </div>
          </BlurFade>
        </section>
        <section className="md:py-32 border-t">
          <div className="container" id="services">
            <div className="mb-3">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                NOSSOS SERVICOS
              </h2>
              <p className="text-muted-foreground">
                Serviços personalizados para atender as necessidades essenciais
                da sua empresa
              </p>
            </div>
            <ServicesCard />
          </div>
        </section>
        <section className="border-t py-24 md:py-32">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                  ALGUNS DE OUTROS SERVICOS QUE PRESTAMOS
                </h2>
                <p className="mt-2 text-muted-foreground">
                  Ao colaborar em cada projeto, identificamos quais competências
                  são necessárias e depois reunimos as melhores pessoas para
                  criar algo verdadeiramente extraordinário.
                </p>
              </div>
              <div>
                <Accordion type="single" collapsible className="w-full mt-6">
                  {[
                    {
                      title: "Higiene e seguranca no trabalho",
                      content:
                        "Prevenção é a melhor solução. Conheça nossas ferramentas e treinamentos para proteger sua equipe.",
                    },
                    {
                      title: "Design Grafico",
                      content:
                        "Design gráfico que transforma ideias em realidade. Crie uma identidade visual impactante e memorável para o seu negócio.",
                    },
                    {
                      title: "Desenvolvimento de Software",
                      content:
                        "Nós desenvolvemos soluções de software personalizadas para impulsionar o crescimento do seu negócio. Desde a concepção até a implementação, nossa equipe de especialistas trabalha lado a lado com você para criar softwares eficientes e inovadores.",
                    },
                  ].map((item) => (
                    <AccordionItem key={item.title} value={item.title}>
                      <AccordionTrigger className="text-2xl">
                        {item.title}
                      </AccordionTrigger>
                      <AccordionContent>{item.content}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </section>
        <section className="border-t py-24 md:py-32" id="partners">
          <div className="container">
            <h2 className="mb-12 text-center text-lg font-semibold">
              EMPRESAS PARCEIRAS
            </h2>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="flex items-center justify-center">
                  <Image
                    alt="Partner logo"
                    className="aspect-[2/1] object-contain"
                    height={50}
                    src={locLogo}
                    width={100}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="border-t py-24 md:py-32">
          <div className="container" id="about">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                  SOBRE NOS
                </h2>
              </div>
              <div>
                <p className="text-muted-foreground">
                  Registrada Pela Sociedade de direito Angolano Invesparso, a
                  Luanda Office Center é uma empresa orientada para o mercado
                  empresarial angolano, que cria e implementa soluções que visam
                  potencializar as vendas e a notariedade de imagem das empresas
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-black text-white p-5">
        <div className="container py-24 md:py-32">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                VAMOS TRABALHAR JUNTOS
              </h2>

              <ContactModal />
            </div>
            <div className="grid gap-4 text-sm">
              <div>
                <div className="font-semibold">Nosso escritorio</div>
                <div className="text-gray-400">Jardim de Rosas, Camama</div>
                <div className="text-gray-400">Luanda</div>
              </div>
              <div>
                <div className="font-semibold">Envie-nos um email</div>
                <div className="text-gray-400">geral.invesparso@gmail.com</div>
              </div>
              <div>
                <div className="font-semibold">Numero de telemovel</div>
                <div className="text-gray-400">+244 924 676 351</div>
              </div>
            </div>
          </div>
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-8 md:flex-row">
            <div className="text-sm text-gray-400">
              Luanda Office Center @{new Date().getFullYear()}
            </div>
            <div className="flex gap-4">
              {["Linkedin", "Instagram", "Facebook"].map((social) => (
                <Link
                  key={social}
                  className="text-sm text-gray-400 hover:text-white"
                  href="https://instagram.com/luanda_office_center?igshid=YmMyMTA2M2Y="
                >
                  {social}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
