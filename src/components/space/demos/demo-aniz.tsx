import React from 'react'
import { Animated } from '../../../utils/aniz'

export default () => {
  return (
    <div>
      <Animated
        force={(d, v) => {
          return (20 - d) * 5
          // if (d < 20) return 10
          // if (d > 20) return -10
          // return 0
        }}
        initial={0}
        target={20}
      >
        🏀
      </Animated>
    </div>
  )
}
