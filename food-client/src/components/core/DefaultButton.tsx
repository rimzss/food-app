import React from 'react'
import Button from "@mui/material/Button";

type Props = {
  text: string | HTMLElement,
  buttonFunction: ()=>void
}

const DefualtButton = ({text, buttonFunction}: Props) => {
  return (
    <Button
    sx={{color: "white"}}
    variant="contained"

  >
{text}
  </Button>
  )
}

export default DefualtButton