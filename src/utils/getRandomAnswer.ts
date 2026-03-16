const answerKeys = [
  'yes',
  'no',
  'maybe',
  'certainly',
  'doubtful',
  'askAgain',
  'likely',
  'unlikely',
  'absolutely',
  'neverInAMillionYears',
  'theFutureIsUnclear',
  'signsPointToYes',
  'dontCountOnIt',
  'withoutADoubt',
  'concentrateAndAskAgain',
  'mySourcesSayNo',
  'outlookGood',
  'veryDoubtful',
  'itIsDecidedlySo',
  'betterNotTellYouNow',
]

export function getRandomAnswer(): string {
  const randomIndex = Math.floor(Math.random() * answerKeys.length)
  return answerKeys[randomIndex]
}
