import { AiModel } from './types';

export const MODEL_CATALOG: AiModel[] = [

  // ─── Gemini Free ─────────────────────────────────────────────────
  {
    id: 'gemini-2.0-flash',
    label: 'Gemini 2.0 Flash',
    provider: 'gemini',
    model: 'gemini-2.0-flash',
    good: true,
    free: true,
    category: 'text',
  },
  {
    id: 'gemini-1.5-flash',
    label: 'Gemini 1.5 Flash',
    provider: 'gemini',
    model: 'gemini-1.5-flash',
    free: true,
    category: 'text',
  },

  // ─── OpenRouter Free ─────────────────────────────────────────────
  {
    id: 'gemma-3-12b',
    label: 'Google Gemma 3 12B',
    provider: 'openrouter',
    model: 'google/gemma-3-12b-it:free',
    free: true,
    category: 'text',
  },

];