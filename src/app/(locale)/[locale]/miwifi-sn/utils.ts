import md5 from 'crypto-js/md5'

const salt = {
  r1d: 'A2E371B0-B34B-48A5-8C40-A7133F3B5D88',
  others: 'd44fb0960aa0-a5e6-4a30-250f-6d2df50a',
}

function swapSalt(s: string) {
  return s.split('-').reverse().join('-')
}

function getSalt(sn: string) {
  if (sn.includes('/')) {
    return swapSalt(salt.others)
  } else {
    return salt.r1d
  }
}

export function getPasswd(sn: string) {
  const hex = md5(sn + getSalt(sn)).toString()
  return hex.substring(0, 8)
}
