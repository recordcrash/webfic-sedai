const EN = {
  title: 'Ages of Webfic',
  subtitle: 'Click to select webfic you have read',
  website: 'webfic.recordcrash.com',
  readCount: 'I have read {{count}}/{{total}} webfic',
  selectAll: 'Select All',
  clear: 'Clear',
  copyImage: 'Copy Image',
  downloadImage: 'Download Image',
  copySuccess: 'Copy successful',
  downloadSuccess: 'Download successful',
  copyFailed: 'Copy failed: {{error}}',
  downloadFailed: 'Download failed: {{error}}',
  copying: 'Copying',
  downloading: 'Downloading',
  unknownError: 'Unknown error',
  copy: 'Copy',
  footer: 'Data from RoyalRoad and multiple fiction sites, sorted on vibes, made by ',
  madeBy: ', ',
  viewCode: 'View Code',
  otherProducts: 'Other products by the author: ',
  completed: 'Caught up',
  inProgress: 'Reading',
  dropped: 'Dropped',
  none: 'Not Started',
} as const

export type StringKey = keyof typeof EN

export function t(
  key: StringKey,
  vars: Record<string, string | number> = {},
): string {
  let out = EN[key] as string
  Object.entries(vars).forEach(([k, v]) => {
    out = out.replace(`{{${k}}}`, String(v))
  })
  return out
}
