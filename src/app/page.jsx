import React from 'react'
import { Container } from '@/components/Container'
import Featured from '@/components/Featured'
import Masonry from '@/components/Masonry'

export default function Home() {
  return (
    <>
      {/* <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Lin Meng Shan AKA Mountain 林盟山
          </h1>
        </div>
      </Container> */}
      <Container className="-mt-16">
        <Featured />
      </Container>
      <Container>
        <h2 className="mt-4 text-2xl font-bold text-zinc-100 sm:text-xl">
          The Non-Existing Railroad Sceneries:
        </h2>
        <p className="mt-4 text-zinc-400">
          Is it landscape or figures paintings on the train? Or the non-existing
          figures paintings on the train.
        </p>
        <p className="mt-4 text-zinc-400">
          Sartre once said: “Nausea is one necessary feeling for a being
          existing in this world.”
        </p>
        <p className="mt-4 text-zinc-400">
          Due to the politics, Taiwanese cannot go to Tibet alone but with tour
          groups arranged by agencies. I accidentally went with friend’s group
          few years ago and took the train on Qinghai-Tibet Railway.
        </p>
        <p className="mt-4 text-zinc-400">
          This was a journey in China, a journey on railroads hurried and
          unprepared with nausea.
        </p>
        <p className="mt-4 text-zinc-400">
          I love Mount Kailash, the Tibetan spiritual mountain and would love to
          pay a visit. But I eventually didn’t make it this time. But these
          three days on the train to Lhasa made me excited and anxious. In this
          air conditioned space, my body was against air pressure and made me
          vomited/nauseated. My expectation and excitement have been totally
          ruined. The physical and mental discomforts made the sceneries outside
          the window like Chinese paintings. These politically influenced
          sceneries are so tranquil that it almost feels never existed before.
        </p>
        <p className="mt-4 text-zinc-400">
          Maybe one being’s consciousness can be free and unrestrained, but this
          loathing flesh has to be unwillingly connected with the world and be
          prisoned from the outside.
        </p>
        <p className="mt-4 text-zinc-400">
          It’s the railroad sceneries about politics.
        </p>
      </Container>
      <Container className="mt-4 md:mt-8">
        <Masonry />
      </Container>
    </>
  )
}
