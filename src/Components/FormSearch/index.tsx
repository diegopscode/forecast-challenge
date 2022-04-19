import React, { useState, useEffect } from "react"
import { Container, Form, Title, Input, Submit, InputGroup } from "./styles"

import type { Coord } from "@types";

type FormSeachProps = {
  onSubmit: ({lat, long}: Coord) => void;
  defaultValue: Coord;
}

export default function FormSearch({ onSubmit, defaultValue }: FormSeachProps) {
  const [coord, setCoord] = useState<any>(defaultValue)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    onSubmit({ ...coord })

    return false;
  }

  const handleChangeItem = ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) => {
    if(Number(value)) {
      coord[name] = Number(value);
      setCoord({ ...coord });
    }
  }

  useEffect(() => {
    if(defaultValue) setCoord(defaultValue)
  }, [defaultValue])

  return (
    <Container>
      <Title>Try to another location</Title>
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <Input type="text"name="lat" placeholder="Lat" onChange={handleChangeItem} value={coord.lat} />
          <Input type="text" name="long" placeholder="Long" onChange={handleChangeItem} value={coord.long}  />
        </InputGroup>
        <Submit>Search</Submit>
      </Form>
    </Container>
  )
}