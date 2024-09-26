import currencies from '/src/helpers/currencies.json'
import cardTypes from '/src/helpers/cardTypes.json';
import banks from '/src/helpers/banks.json';

class JsonDataHelper {
  constructor(data) {
    this.data = data;
    this.labelMap = {};

    this.data.forEach(item => {
      this.labelMap[item.label.toLowerCase()] = item.value;
    });
  }

  getValue(label) {
    return this.labelMap[label.toLowerCase()] || null;
  }

  getData() {
    return this.data;
  }
}

const currenciesData = () => new JsonDataHelper(currencies);
const typesData = () => new JsonDataHelper(cardTypes);
const banksData = () => new JsonDataHelper(banks);

export { currenciesData, typesData, banksData }