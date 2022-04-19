import { Container, Head, Body, Foot, HeadInfo, Title, CurrentTime, Temperature } from "./styles"

type CardProps = {
  data: any;
}

export default function Card({ data }: CardProps) {
  return (
    <Container isDaytime={data.isDaytime?1:0}>
      <Head>
        <img src={data.icon} alt="icon day status" />
        <HeadInfo>
          <Title>{data.name}</Title>
          <CurrentTime>{new Date(data.startTime).toLocaleString()}</CurrentTime>
          <small>
            Wind: {data.windDirection} /  {data.windSpeed}
          </small>
        </HeadInfo>
      </Head>
      <Body>
        {data.detailedForecast}
      </Body>
      <Foot>
        <Temperature>{data.temperature}<span>º{data.temperatureUnit}</span></Temperature>
      </Foot>
    </Container>
  )
}