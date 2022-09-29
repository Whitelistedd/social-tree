import { StyledButton, StyledLottie } from './Button-styles'

import Loading from 'public/assets/lotties/loading.json'

interface ButtonProps {
  error: boolean
  loading: boolean
  text: string
  className?: string
}

export const Button = ({ text, error, loading, className }: ButtonProps) => {
  return (
    <>
      {/* @ts-ignore */}
      <StyledButton
        className={className}
        error={error}
        loadingState={loading}
        type="submit"
      >
        {loading ? (
          <StyledLottie animationData={Loading} />
        ) : error ? (
          'Something went wrong'
        ) : (
          'Login'
        )}
      </StyledButton>
    </>
  )
}
