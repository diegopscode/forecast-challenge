import { Container } from "./styles"

interface ForecastListProps {
  children: React.ReactNode;
}

export default function ForecastList({ children }: ForecastListProps) {
  return (
    <Container>{children}</Container>
  )
}