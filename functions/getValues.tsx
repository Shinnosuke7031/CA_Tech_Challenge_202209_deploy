export const getChannelName = (ch_id: string | string[]) => {
  switch (ch_id) {
    case 'ch-0':
      return 'ABEMA NEWS';
    case 'ch-1':
      return 'ABEMA SPECIAL'
    case 'ch-2':
      return 'ABEMA GOLD';
    case 'ch-3':
      return 'ABEMA アニメ';
    case 'ch-4':
      return '行動指針';
    default:
      return 'Error';
  }
}