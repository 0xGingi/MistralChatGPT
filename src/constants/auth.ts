export const officialAPIEndpoint = 'https://api.mistral.ai/v1/chat/completions';
export const codestralAPIEndpoint = 'https://codestral.mistral.ai/v1/chat/completions';
export const defaultAPIEndpoint = 
 import.meta.env.VITE_DEFAULT_API_ENDPOINT || '/v1/chat/completions';

export const availableEndpoints = [
  defaultAPIEndpoint,
  officialAPIEndpoint,
  codestralAPIEndpoint,
];