export const GAME_TITLE = process.env.REACT_APP_GAME_NAME!

export const WIN_MESSAGES = ['מעולה!', 'כל הכבוד', 'יפה מאוד!']
export const GAME_COPIED_MESSAGE = 'Game copied to clipboard'
export const NOT_ENOUGH_LETTERS_MESSAGE = 'לא מספיק אותיות'
export const WORD_NOT_FOUND_MESSAGE = 'מילה לא נמצאה'
export const HARD_MODE_ALERT_MESSAGE =
  'Hard Mode can only be enabled at the start!'
export const HARD_MODE_DESCRIPTION =
  'Any revealed hints must be used in subsequent guesses'
export const HIGH_CONTRAST_MODE_DESCRIPTION = 'For improved color vision'
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `${solution}המילה היא `
export const WRONG_SPOT_MESSAGE = (guess: string, position: number) =>
  `${position} במיקום ${guess}חובה להשתמש ב`
export const NOT_CONTAINED_MESSAGE = (letter: string) =>
  `${letter}הניחוש חייב לכלול `
export const ENTER_TEXT = 'אשר'
export const DELETE_TEXT = 'מחק'
export const STATISTICS_TITLE = 'Statistics'
export const GUESS_DISTRIBUTION_TEXT = 'Guess Distribution'
export const NEW_WORD_TEXT = 'New word in'
export const SHARE_TEXT = 'Share'
export const TOTAL_TRIES_TEXT = 'Total tries'
export const SUCCESS_RATE_TEXT = 'Success rate'
export const CURRENT_STREAK_TEXT = 'Current streak'
export const BEST_STREAK_TEXT = 'Best streak'
