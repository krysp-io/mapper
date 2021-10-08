const path = 'https://raw.githubusercontent.com/krysp-io/mapper-definitions/feat/mapping-loader/';

const formater = (name) =>
  name
    .replace(/([A-Z])/g, ' $1')
    .toLowerCase()
    .replace(/\s/g, '-');

const getInputElemnt = (elementName) => '#node-config-input-' + formater(elementName);

const fetchResources = async (path = '') => {
  const response = await fetch(path);
  return await response.json();
};

const initUrlPublicInput = (data) => {
  $(getInputElemnt('url-public')).typedInput({
    types: [
      {
        value: 'urlPulic',
        options: data.map(({ file }) => ({ value: file, label: file })),
      },
    ],
  });
};

const initUrlTypeInput = () => {
  const urlTypeEl = $(getInputElemnt('url-type'));
  const urlPublicEl = $(getInputElemnt('url-public'));
  const urlPrivateEl = $(getInputElemnt('url-private'));

  urlTypeEl.typedInput({
    types: [
      {
        value: 'urlType',
        options: [
          { value: 'public', label: 'Public' },
          { value: 'private', label: 'Private' },
        ],
      },
    ],
  });

  urlTypeEl.typedInput('width', '98px');

  urlTypeEl.on('change', async function (event, type, value) {
    if (value === 'private') {
      urlPublicEl.typedInput('hide');
      urlPrivateEl.show();
    } else {
      urlPublicEl.typedInput('show');
      urlPrivateEl.hide();
    }
  });
};

const initSchemaInput = () => {
  $(getInputElemnt('schema')).typedInput({ types: ['json'] });
};

const initControllers = () => {
  const buttonEl = $('.node-config-button-load');

  buttonEl.on('click', async () => {
    const type = $(getInputElemnt('url-type')).typedInput('value');

    if (type === 'public') {
      const value = $(getInputElemnt('url-public')).typedInput('value');
      $(getInputElemnt('schema')).typedInput('value', JSON.stringify(await fetchResources(path + value)));
    } else {
      const value = $(getInputElemnt('url-private')).val();
      $(getInputElemnt('schema')).typedInput('value', JSON.stringify(await fetchResources(value)));
    }
  });
};

async function oneditprepare() {
  const urlPrivateEl = $(getInputElemnt('url-private'));
  const urlPublicEl = $(getInputElemnt('url-public'));

  const schemas = await fetchResources(path + 'index.json');
  initUrlPublicInput(schemas);
  initUrlTypeInput();
  initSchemaInput();
  initControllers();

  const type = this['url-type'];

  if (type && type === 'private') {
    urlPublicEl.typedInput('hide');
  } else {
    urlPublicEl.typedInput('show');
    urlPrivateEl.hide();
  }
}

async function oneditsave() {
  var node = this;
  node.name = this.name;
  node.url = this.url;
  node.schema = this.schema;
  node['url-type'] = this['url-type'];
  node['schema'] = this['schema'];
  node['url-public'] = this['url-public'];
  node['url-private'] = this['url-private'];
}

const mapperNodeConfig = {
  category: 'config',
  color: 'rgb(218, 196, 180)',
  defaults: {
    name: { value: '' },
    ['url-type']: { value: '', required: true },
    ['url-public']: { value: '', required: false },
    ['url-private']: { value: '', required: false },
    schema: { value: '{}', required: true },
  },
  label: function () {
    return this.name || 'Mapping config';
  },
  oneditsave,
  oneditprepare,
};

RED.nodes.registerType('Mapping', mapperNodeConfig);
