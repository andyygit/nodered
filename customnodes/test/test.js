module.exports = function (RED) {
  function TestNode(config) {
    RED.nodes.createNode(this, config);
    let node = this;
    node.on('input', function (msg) {
      msg.topic = 'Bla bla Bleah';
      node.send(msg);
    });
  }
  RED.nodes.registerType('test', TestNode);
};
