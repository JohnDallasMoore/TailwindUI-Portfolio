import Image from 'next/image'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

import bootstrapLogo from '@/images/logos/bootstrap.svg'
import cssLogo from '@/images/logos/css.svg'
import gitLogo from '@/images/logos/git.svg'
import htmlLogo from '@/images/logos/html.svg'
import javascriptLogo from '@/images/logos/javascript.svg'
import jqueryLogo from '@/images/logos/jquery.svg'
import mongoLogo from '@/images/logos/mongo.svg'
import mysqlLogo from '@/images/logos/mysql.svg'
import nodeLogo from '@/images/logos/node.svg'
import reactLogo from '@/images/logos/react.svg'
import sequelizeLogo from '@/images/logos/sequelize.svg'
import tailwindLogo from '@/images/logos/tailwind.svg'
import typescriptLogo from '@/images/logos/typescript.svg'
import vueLogo from '@/images/logos/vue.svg'
import expressLogo from '@/images/logos/express.svg'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

const techs = [
  {
    name: 'HTML',
    logo: htmlLogo,
  },
  {
    name: 'CSS',
    logo: cssLogo,
  },
  {
    name: 'JavaScript',
    logo: javascriptLogo,
  },
  {
    name: 'TypeScript',
    logo: typescriptLogo,
  },
  {
    name: 'React',
    logo: reactLogo,
  },
  {
    name: 'Vue',
    logo: vueLogo,
  },
  {
    name: 'jQuery',
    logo: jqueryLogo,
  },
  {
    name: 'Bootstrap',
    logo: bootstrapLogo,
  },
  {
    name: 'Tailwind',
    logo: tailwindLogo,
  },
  {
    name: 'Node',
    logo: nodeLogo,
  },
  {
    name: 'GitHub',
    logo: gitLogo,
  },
  {
    name: 'MySQL',
    logo: mysqlLogo,
  },
  {
    name: 'Mongo',
    logo: mongoLogo,
  },
  {
    name: 'Express',
    logo: expressLogo,
  },
  {
    name: 'Sequelize',
    logo: sequelizeLogo,
  },
]

function TechCard() {
  return (
    <ul
      role="list"
      className="grid grid-cols-3 gap-x-2 gap-y-2 lg:gap-x-12 lg:gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
    >
      {techs.map((tech) => (
        <Card as="li" key={tech.name}>
          <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
            <Image src={tech.logo} alt="" className="h-8 w-8" unoptimized />
          </div>
          <h2 className="mt-6 text-center text-base font-semibold text-zinc-800 dark:text-zinc-100">
            {tech.name}
          </h2>
        </Card>
      ))}
    </ul>
  )
}

export const metadata = {
  title: 'Uses',
  description: 'Software I use, gadgets I love, and other things I recommend.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Software I use, gadgets I love, and other things I recommend."
      intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
    >
      <div className="space-y-20">
        <ToolsSection title="Development tools">
          <TechCard />
        </ToolsSection>
        <ToolsSection title="Workstation">
          <Tool title="16” MacBook Pro, M2 Max, 64GB RAM (2023)">
            I was using an Intel-based 16” MacBook Pro prior to this and the
            difference is night and day. This laptop is a powerhouse, offering
            unrivaled performance for demanding tasks and a stunning Retina
            display for a superior computing experience.
          </Tool>
          <Tool title="Apple iPad Pro">
            The Apple iPad Pro offers a high-resolution, portable display that&apos;s
            perfect for on-the-go work and creative tasks, providing exceptional
            clarity and performance. It also works great as an additional
            display when working on-the-go.
          </Tool>
          <Tool title="LG Ultrawide 34-in Monitor">
            The LG Ultrawide 34-inch monitor provides an expansive screen real
            estate, enhancing your productivity and multitasking capabilities
            with its stunning display and ergonomic design.
          </Tool>
          <Tool title="Apple Magic Trackpad">
            Something about all the gestures makes me feel like a wizard with
            special powers. I really like feeling like a wizard with special
            powers.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Productivity">
          <Tool title="Notion">
            An all-in-one workspace for notes, tasks, databases, and more.
            Notion keeps everything organized and accessible in one place,
            making it a versatile tool for productivity.
          </Tool>
          <Tool title="GoodNotes">
            Your digital notebook for handwritten notes and annotations.
            GoodNotes offers a natural writing experience on your tablet,
            perfect for sketching ideas or taking notes in meetings.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
