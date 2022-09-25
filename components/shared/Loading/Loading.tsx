import { Container, StyledLottie } from './Loading-styles'

import LoadingAnimation from 'public/assets/lotties/loading.json'

export const Loading = () => {
  return (
    <Container>
      <StyledLottie animationData={LoadingAnimation} />
    </Container>
  )
}
