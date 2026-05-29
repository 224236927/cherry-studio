import { DEFAULT_COLOR_PRIMARY } from '@renderer/config/constant'
import { describe, expect, it } from 'vitest'

import { normalizeThemeColor } from '../useUserTheme'

describe('normalizeThemeColor', () => {
  it('falls back when legacy theme enum values are stored as colors', () => {
    expect(normalizeThemeColor('NEUTRAL')).toBe(DEFAULT_COLOR_PRIMARY)
  })

  it('normalizes valid color strings', () => {
    expect(normalizeThemeColor('rgb(0, 185, 107)')).toBe(DEFAULT_COLOR_PRIMARY.toUpperCase())
  })
})
