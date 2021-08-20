import data from './data.json';

const sensors = data.map(site => [site.latitude, site.longitude, Math.floor(Math.random() * 250) + 0])

export default sensors;