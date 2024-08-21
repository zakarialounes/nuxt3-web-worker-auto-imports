export const useAbc = () => {
  const nuxtApp = tryUseNuxtApp(); // not available in web workers

  return nuxtApp ? 'abcdefghijklmnopqrstuvwxyz' : 'abcdefghijklmnopqrstuvwxyz';
};
