export type PersonaKey = 'athlete' | 'adhd' | 'immigrant' | 'artist';
export type PersonaCode = 'a1' | 'b2' | 'c3' | 'd4';

export type FitCheckOptions = {
  audience?: PersonaKey;
};

export const PERSONA_CODE_BY_KEY: Record<PersonaKey, PersonaCode> = {
  athlete: 'a1',
  adhd: 'b2',
  immigrant: 'c3',
  artist: 'd4',
};

export const PERSONA_KEY_BY_CODE: Record<PersonaCode, PersonaKey> = {
  a1: 'athlete',
  b2: 'adhd',
  c3: 'immigrant',
  d4: 'artist',
};

const LEGACY_PERSONA_VALUES: Record<string, PersonaKey> = {
  athlete: 'athlete',
  adhd: 'adhd',
  immigrant: 'immigrant',
  artist: 'artist',
};

export function resolvePersona(value?: string | null): PersonaKey | undefined {
  if (!value) return undefined;
  const normalized = value.toLowerCase().trim();
  if (!normalized) return undefined;
  const fromCode = (PERSONA_KEY_BY_CODE as Record<string, PersonaKey>)[normalized];
  if (fromCode) return fromCode;
  return LEGACY_PERSONA_VALUES[normalized];
}

export function personaCode(persona?: PersonaKey): PersonaCode | undefined {
  if (!persona) return undefined;
  return PERSONA_CODE_BY_KEY[persona];
}
