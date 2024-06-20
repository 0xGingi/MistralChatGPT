export const officialAPIEndpoint = 'https://api.mistral.ai/v1/chat/completions';
export const codestralFullAPIEndpoint = 'https://codestral.mistral.ai/v1/chat/completions';
export const defaultAPIEndpoint = import.meta.env.VITE_DEFAULT_API_ENDPOINT || '/v1/chat/completions';
export const codestralAPIEndpoint = import.meta.env.VITE_CODESTRAL_API_ENDPOINT || '/codestral/v1/chat/completions';

export const availableEndpoints = [
  defaultAPIEndpoint,
  officialAPIEndpoint,
  codestralAPIEndpoint,
  codestralFullAPIEndpoint
];