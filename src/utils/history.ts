const HISTORY_KEY = 'orbacle_history'
const MAX_HISTORY_ITEMS = 50

export interface HistoryItem {
  id: string
  question: string
  answer: string
  timestamp: number
}

export function getHistory(): HistoryItem[] {
  try {
    const stored = localStorage.getItem(HISTORY_KEY)
    if (!stored) return []
    return JSON.parse(stored)
  } catch {
    return []
  }
}

export function saveToHistory(item: HistoryItem): void {
  try {
    const history = getHistory()
    history.unshift(item)

    if (history.length > MAX_HISTORY_ITEMS) {
      history.pop()
    }

    localStorage.setItem(HISTORY_KEY, JSON.stringify(history))
  } catch {
    // Silently fail if localStorage is not available
  }
}

export function clearHistory(): void {
  try {
    localStorage.removeItem(HISTORY_KEY)
  } catch {
    // Silently fail
  }
}
