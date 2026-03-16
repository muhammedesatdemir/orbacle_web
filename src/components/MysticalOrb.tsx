import { motion } from 'framer-motion'
import './MysticalOrb.css'

interface MysticalOrbProps {
  isRevealing: boolean
}

export function MysticalOrb({ isRevealing }: MysticalOrbProps) {
  return (
    <div className="orb-wrapper">
      <motion.div
        className="orb"
        animate={{
          scale: isRevealing ? [1, 1.1, 1.05, 1.15, 1] : 1,
          boxShadow: isRevealing
            ? [
                '0 0 60px rgba(0, 229, 255, 0.4), inset 0 0 60px rgba(138, 43, 226, 0.4)',
                '0 0 100px rgba(212, 175, 55, 0.8), inset 0 0 80px rgba(212, 175, 55, 0.6)',
                '0 0 80px rgba(0, 229, 255, 0.6), inset 0 0 70px rgba(138, 43, 226, 0.5)',
                '0 0 120px rgba(212, 175, 55, 1), inset 0 0 100px rgba(255, 215, 0, 0.8)',
                '0 0 60px rgba(0, 229, 255, 0.4), inset 0 0 60px rgba(138, 43, 226, 0.4)',
              ]
            : '0 0 60px rgba(0, 229, 255, 0.4), inset 0 0 60px rgba(138, 43, 226, 0.4)',
        }}
        transition={{
          duration: 2.5,
          ease: 'easeInOut',
        }}
      >
        <div className="orb-inner">
          <div className="orb-glow" />
          <div className="orb-core" />
          <motion.div
            className="orb-swirl"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: isRevealing ? 1 : 20,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
          <motion.div
            className="orb-swirl orb-swirl-2"
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: isRevealing ? 1.5 : 25,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
          {isRevealing && (
            <motion.div
              className="orb-flash"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.5, times: [0, 0.5, 1], repeat: 3 }}
            />
          )}
        </div>
      </motion.div>

      <div className="orb-reflection" />

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
