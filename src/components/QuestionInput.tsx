import './QuestionInput.css'

interface QuestionInputProps {
  value: string
  onChange: (value: string) => void
  onKeyPress: (e: React.KeyboardEvent) => void
  placeholder: string
  disabled: boolean
}

export function QuestionInput({
  value,
  onChange,
  onKeyPress,
  placeholder,
  disabled,
}: QuestionInputProps) {
  return (
    <div className="input-wrapper">
      <textarea
        className="question-input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={onKeyPress}
        placeholder={placeholder}
        disabled={disabled}
        rows={2}
        maxLength={200}
      />
      <div className="input-border" />
      <span className="char-count">{value.length}/200</span>
    </div>
  )
}
