import { Container } from "./styles"

interface WarningProps {
  children: React.ReactNode;
}


export default function Warning({ children }: WarningProps) {
  return (
    <Container>{children}</Container>
  )
}