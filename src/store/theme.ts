import { create } from 'zustand'

type Theme = 'light' | 'dark'

interface ThemeState {
  theme: Theme
  toggleTheme: () => void
  setTheme: (theme: Theme) => void
}

// Initialize theme from localStorage or default to dark
const getInitialTheme = (): Theme => {
  if (typeof window === 'undefined') return 'dark'

  const stored = localStorage.getItem('cardio-master-theme')
  if (stored) {
    try {
      const parsed = JSON.parse(stored)
      return parsed.state?.theme || 'dark'
    } catch {
      return 'dark'
    }
  }
  return 'dark'
}

// Apply theme to document
const applyTheme = (theme: Theme) => {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

// Initialize theme on load
if (typeof window !== 'undefined') {
  applyTheme(getInitialTheme())
}

export const useThemeStore = create<ThemeState>((set) => ({
  theme: getInitialTheme(),
  toggleTheme: () =>
    set((state) => {
      const newTheme = state.theme === 'light' ? 'dark' : 'light'
      applyTheme(newTheme)
      // Persist to localStorage
      localStorage.setItem('cardio-master-theme', JSON.stringify({ state: { theme: newTheme } }))
      return { theme: newTheme }
    }),
  setTheme: (theme) =>
    set(() => {
      applyTheme(theme)
      // Persist to localStorage
      localStorage.setItem('cardio-master-theme', JSON.stringify({ state: { theme } }))
      return { theme }
    }),
}))
