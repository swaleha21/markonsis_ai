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
  {
    id: 'gemini-1.5-pro',
    label: 'Gemini 1.5 Pro',
    provider: 'gemini',
    model: 'gemini-1.5-pro',
    good: true,
    free: true,
    category: 'text',
  },

  // ─── OpenRouter Free (confirmed working) ─────────────────────────
  {
    id: 'llama-4-maverick',
    label: 'Llama 4 Maverick',
    provider: 'openrouter',
    model: 'meta-llama/llama-4-maverick:free',
    good: true,
    free: true,
    category: 'text',
  },
  {
    id: 'gemma-3-27b',
    label: 'Google Gemma 3 27B',
    provider: 'openrouter',
    model: 'google/gemma-3-27b-it:free',
    free: true,
    category: 'text',
  },
  {
    id: 'gemma-3-12b',
    label: 'Google Gemma 3 12B',
    provider: 'openrouter',
    model: 'google/gemma-3-12b-it:free',
    free: true,
    category: 'text',
  },

  // ─── PRO Models (requires OpenRouter credits) ─────────────────────
  {
    id: 'gpt-4o',
    label: 'GPT-4o ⭐ Pro',
    provider: 'openrouter',
    model: 'openai/gpt-4o',
    good: true,
    category: 'text',
  },
  {
    id: 'claude-sonnet-4',
    label: 'Claude Sonnet 4 ⭐ Pro',
    provider: 'openrouter',
    model: 'anthropic/claude-sonnet-4-5',
    good: true,
    category: 'text',
  },
  {
    id: 'gemini-2.5-pro',
    label: 'Gemini 2.5 Pro ⭐ Pro',
    provider: 'gemini',
    model: 'gemini-2.5-pro-preview-05-06',
    good: true,
    category: 'text',
  },
  {
    id: 'gpt-4.1',
    label: 'GPT-4.1 ⭐ Pro',
    provider: 'openrouter',
    model: 'openai/gpt-4.1',
    good: true,
    category: 'text',
  },

  // ─── Open Provider Image ──────────────────────────────────────────
  {
    id: 'open-flux',
    label: 'FLUX Image Generator',
    provider: 'open-provider',
    model: 'flux',
    free: true,
    good: true,
    category: 'image',
  },
  {
    id: 'open-turbo',
    label: 'Turbo Image Generator',
    provider: 'open-provider',
    model: 'turbo',
    free: true,
    category: 'image',
  },
];