import React from 'react'
import { About, Anchor, Banner, Container, Image, Title, TopicsContainer } from './styles'
import { GiSupersonicArrow } from 'react-icons/gi'
import { CardTopic } from 'components/cardTopic'
import Topicos from './topicos.json'

export const Home = (): JSX.Element => {
  return (
    <Container>
      <Banner>
        <Title>Unnameds</Title>
        <Image src="/images/home.jpg" alt="imagem" />
        <About>
          <GiSupersonicArrow />
          <Anchor href="#topics-home-page">Veja mais</Anchor>
        </About>
      </Banner>
      <TopicsContainer id="topics-home-page">
        {Topicos.map((e, i) => (
          <CardTopic
            key={`${e.name}-${i}`}
            description={e.description}
            title={e.name}
            link={e.link}
          />
        ))}
      </TopicsContainer>
    </Container>
  )
}
