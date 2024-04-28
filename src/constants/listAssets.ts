export const companyAssets = {
  vtr: [1, 2, 3, 4, 5, 6, 7],
  certie: [1, 2, 3, 4, 5, 6],
  hobids: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  'agreeculture.id': [1, 2, 3, 4, 5, 6, 7, 8],
  'dashboard-zeus-hermes': [1],
  'dana-syariah': [1, 2, 3, 4, 5, 6],
  'dashboard-zurich-insurance': [1, 2, 3, 4, 5],
  'mirocks-insurance': [1, 2, 3, 4, 5, 6, 7, 8, 9],
  'landing-page-qatros': [1, 2, 3, 4, 5, 6],
  'woowa-dashboard': [1, 2, 3],
  'liveness-detection': [1, 2, 3, 4, 5],
}

export const personalAssets = {
  'tartil-me': [1, 2, 3, 4, 5, 6],
  'burger-city': [1, 2, 3, 4, 5, 6, 7, 8, 9],
  'financial-planner': [1, 2, 3, 4, 5, 6, 7, 8],
  'my-doctor': [1, 2, 3, 4, 5, 6, 7, 8, 9],
  'task-io': [1, 2, 3, 4, 5, 6],
}

type TAllImgAssets = typeof companyAssets & typeof personalAssets

export const allImageAssets: TAllImgAssets = {
  ...companyAssets,
  ...personalAssets,
}
