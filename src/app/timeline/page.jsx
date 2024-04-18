import { SimpleLayout } from '@/components/SimpleLayout'
import { TimelineList } from '@/components/TimelineList'
import { Container } from '@/components/Container'

export const metadata = {
  title: 'Timeline',
  description:
    '這段時間軸涵蓋了攝影展覽、策展、紀錄片製作、出版作品以及電影劇照等多個範疇。從攝影展覽方面，展示了林盟山在不同時期的攝影個展，從《青‧春》到《不存在的風景》，呈現了他多元的攝影風格和對於台灣社會、人文的關注。在策展方面，他參與了多個兩岸三地的攝影師聯展，促進了文化交流與合作。紀錄片製作方面，他涉足攝影指導，為《秋茶》、《青春印記》等影片提供了專業支持。此外，他的攝影作品也在多個出版物中發表，包括雜誌、攝影集以及電影劇照，展現了他在不同媒介下的創作才華。',
}

export default function Timeline() {
  return (
    <SimpleLayout
      title="Timeline"
      intro="這段時間軸涵蓋了攝影展覽、策展、紀錄片製作、出版作品以及電影劇照等多個範疇。從攝影展覽方面，展示了林盟山在不同時期的攝影個展，從《青‧春》到《不存在的風景》，呈現了他多元的攝影風格和對於台灣社會、人文的關注。在策展方面，他參與了多個兩岸三地的攝影師聯展，促進了文化交流與合作。紀錄片製作方面，他涉足攝影指導，為《秋茶》、《青春印記》等影片提供了專業支持。此外，他的攝影作品也在多個出版物中發表，包括雜誌、攝影集以及電影劇照，展現了他在不同媒介下的創作才華。"
    >
      <Container className="mt-4 md:mt-8">
        <TimelineList />
      </Container>
    </SimpleLayout>
  )
}
