export const API_MODE = {
  mocked: 'mocked',
  live: 'live',
};

export const API = {
  basePath: {
    [API_MODE.mocked]: 'mocked_api',
    [API_MODE.live]: 'https://zgif.org/api'
  }
};

export const CURRENT_API_MODE = API_MODE.mocked;
