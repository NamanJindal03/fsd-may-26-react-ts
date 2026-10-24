import React from "react"

type props = {
    pBody: string;
    numberArr?: number[];
    doRandomThing: () => void
}

function Child({pBody, numberArr}: props) {
    console.log(' I will always be triggered')
  return (
    <div>Child: {pBody} {JSON.stringify(numberArr)}</div>
  )
}

export default React.memo(Child)