import { motion } from 'framer-motion'
import './MysticalOrb.css'

interface MysticalOrbProps {
  isRevealing: boolean
}

export function MysticalOrb({ isRevealing }: MysticalOrbProps) {
  return (
    <div className="orb-wrapper">
      <motion.div
        className="orb-container"
        animate={{
          scale: isRevealing ? [1, 1.1, 1.05, 1.15, 1] : 1,
        }}
        transition={{
          duration: 2.5,
          ease: 'easeInOut',
        }}
      >
        {/* Rotating Globe Layer */}
        <motion.div
          className="globe-layer"
          animate={{
            rotate: 360,
            filter: isRevealing
              ? [
                  'drop-shadow(0 0 40px rgba(138, 43, 226, 0.6)) brightness(1)',
                  'drop-shadow(0 0 80px rgba(212, 175, 55, 1)) brightness(1.3)',
                  'drop-shadow(0 0 60px rgba(0, 229, 255, 0.8)) brightness(1.2)',
                  'drop-shadow(0 0 100px rgba(255, 215, 0, 1)) brightness(1.4)',
                  'drop-shadow(0 0 40px rgba(138, 43, 226, 0.6)) brightness(1)',
                ]
              : 'drop-shadow(0 0 40px rgba(138, 43, 226, 0.6)) brightness(1)',
          }}
          transition={{
            rotate: {
              duration: isRevealing ? 2 : 30,
              repeat: Infinity,
              ease: 'linear',
            },
            filter: {
              duration: 2.5,
              ease: 'easeInOut',
            },
          }}
        >
          <img
            src="/globe_isolated.png"
            alt="Mystical Globe"
            className="globe-image"
          />
        </motion.div>

        {/* Static Holder Layer */}
        <div className="holder-layer">
          <img
            src="/holder_isolated.png"
            alt="Crystal Ball Holder"
            className="holder-image"
          />
        </div>
      </motion.div>

      <motion.div
        className="orb-particles"
        animate={{
          opacity: isRevealing ? 1 : 0.3,
        }}
      >
        {[...Array(12)].map((_, i) => (
          <motion.span
            key={i}
            className="particle"
            animate={{
              y: [-20, -60, -20],
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.25,
              ease: 'easeInOut',
            }}
            style={{
              left: `${10 + (i * 7)}%`,
            }}
          />
        ))}
      </motion.div>
    </div>
  )
}
