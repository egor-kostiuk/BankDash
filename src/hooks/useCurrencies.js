import data from '/src/helpers/currenciesList.json'

class Currencies {
  constructor() {
    this.data = data;
    this.labelMap = {};

    this.data.forEach(currency => {
      this.labelMap[currency.label.toLowerCase()] = currency.value;
    });
  }

  getValue(label) {
    return this.labelMap[label.toLowerCase()] || null;
  }

  getData() {
    return this.data;
  }
}

const currenciesList = () => new Currencies();

export default currenciesList;