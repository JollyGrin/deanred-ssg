export const filterText = (string) => {
  if (string.includes(completeBan)) {
    return;
  }

  ban.forEach((word) => {
    string = string.replace(word, '');
  });
  return string;
};

const ban = [
  'MAVIC',
  'AIR',
  '-',
  'Drone',
  '–',
  'Mavic',
  'Air',
  'Brunssummerheide',
];

const completeBan = 'Brightlands Smart Services Campus with a Mavic Air';
