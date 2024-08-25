import { Badge } from "@nextui-org/badge";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Tabs, Tab } from "@nextui-org/tabs";
import { Avatar } from "@nextui-org/avatar";

import { GithubIcon, LinkedInIcon, ThreadsIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import { ThemeSwitch } from "@/components/theme-switch";

function MainCard() {
  return (
    <Card className="w-3/5">
      <CardBody>
        <div className="flex gap-4 justify-evenly px-10 py-4">
          <div className="py-8">
            <Badge content={ <ThemeSwitch /> } shape="circle" showOutline={false} size="lg">
              <Avatar className="col-span-2 w-32 h-32" src="./src/files/perfil.jpg" />
            </Badge>
          </div>
          <div className="pl-2 py-4 text-left">
            <div className="flex gap-1 justify-between">
              <p className="font-mono text-3xl">Luis Carlos Berrocal</p>
              <div className="flex gap-1.5 pt-.5">
                <Button isIconOnly color="primary" aria-label="github" radius="full" size="sm" onClick={() => window.open('https://github.com/lberrocal8', '_blank')}>
                  <GithubIcon />
                </Button>
                <Button isIconOnly color="primary" aria-label="linkein" radius="full" size="sm" onClick={() => window.open('https://www.linkedin.com/in/luis-carlos-berrocal-sarmiento-b3a085297/', '_blank')}>
                  <LinkedInIcon />
                </Button>
                <Button isIconOnly color="secondary" aria-label="threads" radius="full" size="sm" onClick={() => window.open('https://www.threads.net/@lc.berrocal', '_blank')}>
                  <ThreadsIcon />
                </Button>
              </div>
            </div>
            <p className="font-mono text-sm text-secondary">Fullstack Web Developer</p>
            <p className="font-mono text-xs pt-2">
              Hi 🖐 guys! I'm fullstack web developer from Colombia. I like music, videogames, cofee and... Code. Actually, I works with NextJS (frontend) and ExpressJS (backend). <br /> <br /> @mkdir Software
            </p>
            <div className="pt-4">
              <Button color="secondary" onClick={() => window.open('mailto:lcar.dev.b@gmail.com')} size="sm">Contac me</Button>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col">
          <Tabs aria-label="Options" className="justify-center">
            <Tab key="frontend" title="Frontend">
              <div className="flex gap-4">
                <Card className="border-none" isFooterBlurred isPressable onClick={() => window.open('https://github.com/lberrocal8/portfolio', '_blank')} radius="lg">
                  <Image alt="portfolio image" className="object-cover" height={200} src="./src/files/code.jpg" width={200}/>
                  <CardFooter className="justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                    <p className="text-tiny text-white/80 py-2">My portfolio</p>
                  </CardFooter>
                </Card>
                <Card className="border-none" isFooterBlurred isPressable onClick={() => window.open('https://github.com/lberrocal8/leads-api', '_blank')} radius="lg">
                  <Image alt="leads image" className="object-cover" height={200} src="./src/files/leads.jpg" width={200}/>
                  <CardFooter className="justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                    <p className="text-tiny text-white/80 py-2">Leads app</p>
                  </CardFooter>
                </Card>
              </div>
            </Tab>
            <Tab key="backend" title="Backend">
              <div className="flex gap-4">
                <Card className="border-none" isFooterBlurred isPressable onClick={() => window.open('https://github.com/lberrocal8/expense-tracker-app', '_blank')} radius="lg">
                  <Image alt="finance image" className="object-cover" height={200} src="./src/files/finance.png" width={200}/>
                  <CardFooter className="justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                    <p className="text-tiny text-white/80 py-2">Expense Tracker API</p>
                  </CardFooter>
                </Card>
                <Card className="border-none" isFooterBlurred isPressable onClick={() => window.open('https://github.com/lberrocal8/leads-api', '_blank')} radius="lg">
                  <Image alt="leads image" className="object-cover" height={200} src="./src/files/leads.jpg" width={200}/>
                  <CardFooter className="justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                    <p className="text-tiny text-white/80 py-2">Leads API</p>
                  </CardFooter>
                </Card>
              </div>
            </Tab>
          </Tabs>
        </div>
      </CardBody>
    </Card>
  );
}

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <MainCard />
      </section>
    </DefaultLayout>
  );
}
