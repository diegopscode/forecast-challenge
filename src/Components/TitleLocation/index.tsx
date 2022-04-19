import { Container } from "./styles"

interface TitleLocationProps {
  children: React.ReactNode;
}

export default function TitleLocation({ children }: TitleLocationProps) {
  return (
    <Container>{children}</Container>
  )
}