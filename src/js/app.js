import GameSaving from './game-saving';
import GameSavingLoader from './game-saving-loader';

GameSavingLoader.load().then((saving) => {
  const saveData = new GameSaving(JSON.parse(saving));
  return saveData;
}, (error) => {
  console.log(error);
});
