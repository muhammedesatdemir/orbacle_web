import { useState, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { AnimatePresence } from 'framer-motion'
import { MysticalOrb } from './components/MysticalOrb'
import { AnswerCard } from './components/AnswerCard'
import { QuestionInput } from './components/QuestionInput'
import { LanguageSwitcher } from './components/LanguageSwitcher'
import { HistoryPanel } from './components/HistoryPanel'
import { getRandomAnswer } from './utils/getRandomAnswer'
import { saveToHistory, HistoryItem } from './utils/history'
import './styles/App.css'

function App() {
  const { t } = useTranslation()
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState<string | null>(null)
  const [isRevealing, setIsRevealing] = useState(false)
  const [showHistory, setShowHistory] = useState(false)

  const handleAsk = useCallback(() => {
    if (!question.trim() || isRevealing) return

    setIsRevealing(true)
    setAnswer(null)

    setTimeout(() => {
      const newAnswer = getRandomAnswer()
      setAnswer(newAnswer)
      setIsRevealing(false)

      const historyItem: HistoryItem = {
        id: Date.now().toString(),
        question: question.trim(),
        answer: newAnswer,
        timestamp: Date.now()
      }
      saveToHistory(historyItem)
      setQuestion('')
    }, 2500)
  }, [question, isRevealing])

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleAsk()
    }
  }

  return (
    <div className="app">
      <div className="stars-bg" />

      <header className="header">
        <h1 className="title">{t('appName')}</h1>
        <div className="header-actions">
          <button
            className="history-btn"
            onClick={() => setShowHistory(!showHistory)}
            aria-label={t('history')}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12,6 12,12 16,14"/>
            </svg>
          </button>
          <LanguageSwitcher />
        </div>
      </header>

      <main className="main">
        <div className="orb-container">
          <MysticalOrb isRevealing={isRevealing} />
        </div>

        <AnimatePresence mode="wait">
          {answer && !isRevealing && (
            <AnswerCard answer={t(`answers.${answer}`)} />
          )}
        </AnimatePresence>

        <div className="input-section">
          <p className="subtitle">{t('subtitle')}</p>
          <QuestionInput
            value={question}
            onChange={setQuestion}
            onKeyPress={handleKeyPress}
            placeholder={t('placeholder')}
            disabled={isRevealing}
          />
          <button
            className="ask-button"
            onClick={handleAsk}
            disabled={!question.trim() || isRevealing}
          >
            {isRevealing ? t('revealing') : t('askButton')}
          </button>
        </div>
      </main>

      <AnimatePresence>
        {showHistory && (
          <HistoryPanel onClose={() => setShowHistory(false)} />
        )}
      </AnimatePresence>

      <footer className="footer">
        <p>{t('footer')}</p>
      </footer>
    </div>
  )
}

export default App
