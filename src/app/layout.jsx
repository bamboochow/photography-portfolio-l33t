import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Lin Meng Shan AKA Mountain 林盟山',
    default: 'Lin Meng Shan AKA Mountain 林盟山',
  },
  description:
    '林盟山1966生於台北，1991開始參與攝影工作，1994年起擔任多家雜誌社攝影編輯，目前為自由工作者，作品橫跨平面媒體、影像媒體、唱片封片與電影劇照等領域，2010-2015 金馬國際影展官方肖像攝影師。',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
