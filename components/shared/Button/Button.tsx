import { StyledButton, StyledLottie } from './Button-styles'

import Loading from 'public/assets/lotties/loading.json'

interface ButtonProps {
  error?: boolean
  loading?: boolean
  text: string
  className?: string
  reverse?: boolean
  type?: string
}

export const Button = ({
  text,
  error,
  loading,
  className,
  reverse,
  type,
}: ButtonProps) => {
  return (
    <>
      {/* @ts-ignore */}
      <StyledButton
        className={className}
        error={error}
        loadingState={loading}
        type={type}
        reverse={reverse}
      >
        {loading ? (
          <StyledLottie animationData={Loading} />
        ) : error ? (
          'Something went wrong'
        ) : (
          text
        )}
      </StyledButton>
    </>
  )
}
