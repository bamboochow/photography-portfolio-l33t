import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
// import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FacebookIcon, InstagramIcon } from '@/components/SocialIcons'
import Featured from '@/components/Featured'
import Masonry from '@/components/Masonry'
import { Timeline } from '@/components/Timeline'
import avatarImage from '@/images/avatar.jpg'


function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

export default function Home() {
  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
        <Image
        src={avatarImage}
        alt=""
        className=
          'my-6 h-16 w-16 rounded-full bg-zinc-100 object-cover dark:bg-zinc-800'
        priority
      />
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Lin Meng Shan AKA Mountain 林盟山
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Freelance Photographer
          </p>
          <p className="mt-0 text-base text-zinc-600 dark:text-zinc-400">
            Taipei, Taiwan
          </p>
          <p className="mt-0 text-base text-zinc-600 dark:text-zinc-400">
            +886 932254397
          </p>
          <p className="mt-0 text-base text-zinc-600 dark:text-zinc-400">
            mountainl@gmail.com
          </p>
          <div className="mt-6 flex gap-6">
            {/* <SocialLink href="#" aria-label="Follow on X" icon={XIcon} /> */}
            <SocialLink
              href="https://www.instagram.com/lmsphotos/"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
            <SocialLink
              href="https://www.facebook.com/lmsphotos/"
              aria-label="Follow on Facebook"
              icon={FacebookIcon}
            />
          </div>
        </div>
      </Container>
      <Container className="mt-9">
        <Featured />
      </Container>
      <Container>
        <h2 class="mt-4 text-2xl font-bold text-zinc-100 sm:text-xl">
        The Non-Existing Railroad Sceneries:
        </h2>
        <p class="mt-4 text-zinc-400">
          Is it landscape or figures paintings on the train? Or the non-existing
          figures paintings on the train.
        </p>
        <p class="mt-4 text-zinc-400">
          Sartre once said: “Nausea is one necessary feeling for a being
          existing in this world.”
        </p>
        <p class="mt-4 text-zinc-400">
          Due to the politics, Taiwanese cannot go to Tibet alone but with tour
          groups arranged by agencies. I accidentally went with friend’s group
          few years ago and took the train on Qinghai-Tibet Railway.
        </p>
        <p class="mt-4 text-zinc-400">
          This was a journey in China, a journey on railroads hurried and
          unprepared with nausea.
        </p>
        <p class="mt-4 text-zinc-400">
          I love Mount Kailash, the Tibetan spiritual mountain and would love to
          pay a visit. But I eventually didn’t make it this time. But these
          three days on the train to Lhasa made me excited and anxious. In this
          air conditioned space, my body was against air pressure and made me
          vomited/nauseated. My expectation and excitement have been totally
          ruined. The physical and mental discomforts made the sceneries outside
          the window like Chinese paintings. These politically influenced
          sceneries are so tranquil that it almost feels never existed before.
        </p>
        <p class="mt-4 text-zinc-400">
          Maybe one being’s consciousness can be free and unrestrained, but this
          loathing flesh has to be unwillingly connected with the world and be
          prisoned from the outside.
        </p>
        <p class="mt-4 text-zinc-400">
          It’s the railroad sceneries about politics.
        </p>
        {/* <div class="mt-16 border-t-2 border-zinc-600"></div> */}
      </Container>
      {/* <Photos /> */}
      <Container className="mt-4 md:mt-8">
        {/* <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2"> */}
          <Timeline />
        {/* </div> */}
      </Container>
      <Container className="mt-4 md:mt-8">
        <Masonry />
      </Container>
    </>
  )
}
