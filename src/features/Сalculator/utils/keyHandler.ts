import { allowedKeys, keyMap } from "./constants";

export const mapKeyToLabel = (key: string): string | null => {
  const mappedKey = keyMap[key] || keyMap[key.toLowerCase()] || key;
  return allowedKeys.includes(mappedKey) ? mappedKey : null;
};