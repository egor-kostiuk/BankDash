import data from '/src/helpers/currenciesList.json'

class CurrenciesList { // TODO: delete unnecessary functions
  constructor() {
    this.data = data;
    this.labelMap = {};
    this.valueMap = {};

    this.data.forEach(currency => {
      this.labelMap[currency.label.toLowerCase()] = currency.value;
      this.valueMap[currency.value.toLowerCase()] = currency.label;
    });
  }

  getValue(label) {
    return this.labelMap[label.toLowerCase()] || null;
  }

  getLabel(value) {
    return this.valueMap[value.toLowerCase()] || null;
  }

  getLabels() {
    return this.data.map(country => country.label);
  }

  getValues() {
    return this.data.map(country => country.value);
  }

  getLabelList() {
    return this.labelMap;
  }

  getValueList() {
    return this.valueMap;
  }

  getData() {
    return this.data;
  }

  setLabel(value, label) {
    this.data.forEach(currency => {
      if (currency.value === value) {
        currency.label = label;
        this.valueMap[currency.value.toLowerCase()] = currency.label;
      }
    });

    return this;
  }

  setEmpty(label) {
    this.data.unshift({
      value: '',
      label: label,
    });
    this.valueMap[''] = label;
    this.labelMap[label.toLowerCase()] = '';

    return this;
  }
}

const currenciesList = () => new CurrenciesList();

export default currenciesList;