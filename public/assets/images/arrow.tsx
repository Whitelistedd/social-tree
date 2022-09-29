interface ArrowProps {
  color?: string
  width: string
  height: string
  className?: string
}

export const Arrow = ({ color, width, height, className }: ArrowProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={color ? `${color}` : 'none'}
      viewBox="0 0 24 24"
      stroke-width="1.5"
      width={width}
      height={height}
      stroke={color ? `${color}` : 'none'}
      className={className}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
      />
    </svg>
  )
}
