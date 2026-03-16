import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { getHistory, clearHistory, HistoryItem } from '../utils/history'
import './HistoryPanel.css'

interface HistoryPanelProps {
  onClose: () => void
}

export function HistoryPanel({ onClose }: HistoryPanelProps) {
  const { t } = useTranslation()
  const [history, setHistory] = useState<HistoryItem[]>([])

  useEffect(() => {
    setHistory(getHistory())
  }, [])

  const handleClear = () => {
    clearHistory()
    setHistory([])
  }

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString(undefined, {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  return (
    <>
      <motion.div
        className="history-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />
      <motion.div
        className="history-panel"
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
      >
        <div className="history-header">
          <h2>{t('history')}</h2>
          <button className="close-btn" onClick={onClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        <div className="history-content">
          {history.length === 0 ? (
            <p className="empty-state">{t('noHistory')}</p>
          ) : (
            <ul className="history-list">
              {history.map((item) => (
                <li key={item.id} className="history-item">
                  <span className="history-date">{formatDate(item.timestamp)}</span>
                  <p className="history-question">{item.question}</p>
                  <p className="history-answer">✧ {t(`answers.${item.answer}`)}</p>
                </li>
              ))}
            </ul>
          )}
        </div>

        {history.length > 0 && (
          <div className="history-footer">
            <button className="clear-btn" onClick={handleClear}>
              {t('clearHistory')}
            </button>
          </div>
        )}
      </motion.div>
    </>
  )
}
