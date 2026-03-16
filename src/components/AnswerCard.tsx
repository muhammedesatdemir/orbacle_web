import { motion } from 'framer-motion'
import './AnswerCard.css'

interface AnswerCardProps {
  answer: string
}

export function AnswerCard({ answer }: AnswerCardProps) {
  return (
    <motion.div
      className="answer-card"
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <div className="answer-glow" />
      <div className="answer-content">
        <motion.span
          className="answer-icon"
          initial={{ rotate: -180, scale: 0 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5, type: 'spring' }}
        >
          ✧
        </motion.span>
        <motion.p
          className="answer-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {answer}
        </motion.p>
        <motion.span
          className="answer-icon"
          initial={{ rotate: 180, scale: 0 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5, type: 'spring' }}
        >
          ✧
        </motion.span>
      </div>
    </motion.div>
  )
}
