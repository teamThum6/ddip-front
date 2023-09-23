import { useEffect, useRef } from 'react'

type CallbackFunction = () => void

export default function useTimeout(
  callback: CallbackFunction,
  delay?: number | null
) {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const savedCallback = useRef<CallbackFunction | null>(null)

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    const tick = () => savedCallback.current?.()

    if (typeof delay === 'number') {
      timeoutRef.current = setTimeout(tick, delay)

      return () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current)
        }
      }
    }
  }, [delay])

  return timeoutRef
}
