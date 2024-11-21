import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { locLogo } from "@/lib/constants"
import { cn } from "@/lib/utils"
import GridPattern from "@/components/ui/grid-pattern"
import { IconBrandWhatsapp } from "@tabler/icons-react"
import { InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">

      <GridPattern
        width={20}
        height={20}
        x={-1}
        y={-1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] ",
        )}
      />
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-8">
        <div className="container flex h-14 items-center justify-between">
          <Link className="font-semibold p-2" href="/">
            <Image
              src={locLogo}
              width={90}
              height={70}
              alt="Loc logo"
            />
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
        </div>
      </header>


      <main className="flex-1 p-6">
        <section className="py-20">
          <div className="">
            <h1 className="text-4xl font-bold mb-8">Fale connosco</h1>
            <div className="grid gap-12 md:grid-cols-2">
              <div className="space-y-8">
                <div className="flex gap-2">
                  <Button size="icon">
                    <IconBrandWhatsapp />
                  </Button>

                  <Button size="icon">
                    <InstagramLogoIcon />
                  </Button>
                  <Button size="icon">
                    <LinkedInLogoIcon />
                  </Button>
                </div>
                <div className="w-80 rounded-t">
                  <h2 className="text-2xl font-semibold mb-4">Nossa Localizacao</h2>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3127.987800741316!2d13.233127811964088!3d-8.970522930125322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-PT!2sao!4v1731405210351!5m2!1spt-PT!2sao" width="600" height="300" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-black text-white p-5">
        <div className="container py-24 md:py-32">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                VAMOS TRABALHAR JUNTOS
              </h2>
              <Link href="/contact">
                <Button className="mt-4 text-black" variant="outline">
                  Contacte-nos
                </Button>
              </Link>
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
            <div className="text-sm text-gray-400">Luanda Office Center © {new Date().getFullYear()}</div>
            <div className="flex gap-4">
              {["Linkedin", "Instagram", "Facebook"].map((social) => (
                <Link
                  key={social}
                  className="text-sm text-gray-400 hover:text-white"
                  href="https://instagram.com/luanda_office_center?igshid=YmMyMTA2M2Y="
                  aria-label={social}
                >
                  {social}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

