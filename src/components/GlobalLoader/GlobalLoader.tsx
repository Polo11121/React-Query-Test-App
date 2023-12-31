import { Loader } from 'styled'
import { useIsFetching } from 'react-query'

export const GlobalLoader = () => {
  const isFetching = useIsFetching()

  return (
    <Loader
      css={`
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
        font-size: 1.5rem;
        transition: 0.3s ease;
        pointer-events: none;
      `}
      style={{
        opacity: isFetching ? 1 : 0,
      }}
    />
  )
}
