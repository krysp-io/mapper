
# node-red-contrib-field-mapper
-------

A <a href="http://nodered.org" target="_new">Node-RED</a> node can be used to modify a message’s properties without having to resort to a Function node.

Each node can be configured with multiple operations that are applied in order. The available operations are:

Set - set a property. The value can be a variety of different types, or can be taken from an existing message.

# Install
-------

Run the following command in the root directory of your Node-RED install

        npm install node-red-contrib-field-mapper

Or else install the package directly from Manage Palette



<img src='https://static.node.iopulsedev.net/ManagePalette.png' alt='manage palette'>


# Usage
-------
<p>1) Create a HTTP in node with url.</p>
<p>2) Attach a function node with msg.payload as {
  "input" :{
    "name" : "",
    "age": 0,
    "address" :{
      "street" : ""
    },
    "test": ""
  },
    "output" :{
    "name" : "",
    "age": 0,
    "info" :{
      "street" : ""
    }
}
        <p>Note*: Field Name-name, age, address will be given as per the requirement.
<p>3) Attach a Http reponse node.</p>
<p>4) Point the url in the config of mapper node.</p>



# Demo
-------

https://www.youtube.com/watch?v=U3YuTAf7YG4
