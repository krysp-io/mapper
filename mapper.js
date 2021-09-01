const lodash = require('lodash');

module.exports = function (RED) {
  function MappingNode(n) {
    RED.nodes.createNode(this, n);
    this.in = n.in;
    this.out = n.out;
    this.url = n.url;
  }

  RED.nodes.registerType("Mapping", MappingNode);

  function MapperNode(n) {
    RED.nodes.createNode(this, n);
    this.mapping = RED.nodes.getNode(n.mapping);

    var node = this;
    this.rules = n.rules;
    node.on("input", function (msg) {
      for(let i = 0; i < this.rules.length; i++) {
        const rule = this.rules[i];
        lodash.set(msg.payload, rule.po, lodash.get(msg.payload, rule.pi)); 
      }
      node.send(msg);
    });
  }

  RED.nodes.registerType("Mapper", MapperNode);
};
  