export const formatValue = (value: string) => {
  return value.replaceAll('_', ' ');
};

export function formatMeasurement(value: string) {
  return value
    .replace(/(\d+(?:\.\d+)?)(kWh|l|m)/g, '$1 $2')
    .replace('/', ' / ');
}

export function formatLocation(location: string) {
  if (!location) return '';

  const locationArray = location.split(',').map(item => item.trim());

  if (locationArray.length === 2) {
    const [country, city] = locationArray;
    return `${city}, ${country}`;
  }

  return location;
}
