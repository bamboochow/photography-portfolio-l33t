import Link from 'next/link'
import Image from 'next/image'
import { FacebookIcon, InstagramIcon } from '@/components/SocialIcons'
import { ContainerInner, ContainerOuter } from '@/components/Container'
import avatarImage from '@/images/avatar.webp'

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="transition hover:text-gray-500 dark:hover:text-gray-400"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-32 flex-none">
      <ContainerOuter>
        <div className="border-t border-zinc-100 dark:border-zinc-700/40">
          <ContainerInner>
            <div className="xl:grid xl:grid-cols-3 xl:gap-8 p-10">
              <div className="space-y-8">
                <Image
                  src={avatarImage}
                  alt="Lin Meng Shan Logo"
                  className="h-10 w-10 rounded-full bg-zinc-100 object-cover dark:bg-zinc-800"
                  priority
                />
                <p className="text-sm leading-6 text-gray-300">
                Lin Meng Shan AKA Mountain 林盟山
                </p>
                <div className="flex space-x-6">
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
              <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                <div className="md:grid md:grid-cols-2 md:gap-8">
                  <div>
                    <h2 className="text-sm font-semibold leading-6 text-white">
                      Contact
                    </h2>
                    <ul role="list" className="mt-6 space-y-4">
                      <li className="text-sm leading-6 text-gray-300 hover:text-white">
                        <NavLink href="#">Taipei, Taiwan</NavLink>
                      </li>
                      <li className="text-sm leading-6 text-gray-300 hover:text-white">
                        <NavLink href="tel:+886932254397">
                          +886 932254397
                        </NavLink>
                      </li>
                      <li className="text-sm leading-6 text-gray-300 hover:text-white">
                        <NavLink href="mailto:mountainl@gmail.com">
                          mountainl@gmail.com
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h2 className="text-sm font-semibold leading-6 text-white">
                      Navigation
                    </h2>
                    <ul role="list" className="mt-6 space-y-4">
                      <li className="text-sm leading-6 text-gray-300 hover:text-white">
                        <NavLink href="/home">Home</NavLink>
                      </li>
                      <li className="text-sm leading-6 text-gray-300 hover:text-white">
                        <NavLink href="/timeline">Timeline</NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </ContainerInner>
          <div className="border-t border-zinc-100 py-4 dark:border-zinc-700/40">
            <p className="text-center text-xs text-gray-400">
              &copy; {new Date().getFullYear()} Lin Meng Shan AKA Mountain
              林盟山. All rights reserved.
            </p>
          </div>
        </div>
      </ContainerOuter>
    </footer>
  )
}
