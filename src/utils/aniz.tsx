import { FC, useEffect, useRef } from 'react'
import React from 'react'

export const Animated: FC<{
  force: (d: number, v: number) => number
  initial: number
  target: number
}> = props => {
  const { current: state } = useRef({
    d: 0,
    v: 0,
    t: 0,
    target: props.target,
  })
  const elementRef = useRef<HTMLDivElement>(null)
  function paint() {
    const element = elementRef.current
    if (!element) return
    element.style.transform = `translateX(${state.d * 5 + 100}px)`
    // element.innerText = state.d.toFixed(1)
  }

  useEffect(() => {
    let id: number | null = null
    state.t = performance.now()
    function step(timestamp: number) {
      const tDelta = (timestamp - state.t) / 1000
      const a = props.force(state.d, state.v)
      let nextV = state.v + a * tDelta
      let nextD = state.d + ((state.v + nextV) / 2) * tDelta
      const nextA = props.force(nextD, nextV)
      nextV = state.v + ((a + nextA) / 2) * tDelta
      nextD = state.d + ((state.v + nextV) / 2) * tDelta
      // state.d += state.v * tDelta
      state.d = nextD
      if (Math.abs(state.d) < 0.5) {
        console.log(tDelta, state.d, state.v)
      }
      state.v = nextV
      state.t = timestamp
      paint()
      if (Math.abs(state.v) < 0.01 && Math.abs(a) < 0.01) {
        id = null
      } else {
        id = window.requestAnimationFrame(step)
      }
    }
    id = window.requestAnimationFrame(step)
    return () => {
      if (id !== null) {
        window.cancelAnimationFrame(id)
      }
    }
  }, [])
  return <div ref={elementRef}>{props.children}</div>
}
