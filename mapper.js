const lodash = require('lodash');

module.exports = function (RED) {
  function MappingNode(n) {
    RED.nodes.createNode(this, n);
    this.in = n.in;
    this.out = n.out;
    this.url = n.url;
  }

  RED.nodes.registerType('Mapping', MappingNode);

  function MapperNode(n) {
    RED.nodes.createNode(this, n);
    var node = this;
    this.rules = n.rules;

    node.on('input', (msg) => {
      const newPayload = {};
      for (let i = 0; i < this.rules.length; i++) {
        const rule = this.rules[i];
        lodash.set(newPayload, rule.po, lodash.get(msg.payload, rule.pi));
      }

      msg.payload = {
        ...(n.cleanup ? { ...newPayload } : { ...msg.payload, ...newPayload }),
      };
      node.send(msg);
    });
  }

  RED.nodes.registerType('Mapper', MapperNode);
};
