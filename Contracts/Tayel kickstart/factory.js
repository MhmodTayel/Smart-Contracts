import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x3d065f41c9e2d985d32ead916a06f3d835852264'
);

export default instance;
