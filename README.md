
# node-red-contrib-field-mapper
-------

A <a href="http://nodered.org" target="_new">Node-RED</a> node can be used to modify a message’s properties without having to resort to a Function node.

Each node can be configured with multiple operations that are applied in order. The available operations are:

Set - set a property. The value can be a variety of different types, or can be taken from an existing message.

This module provides a “mapper” node in Node-RED for mapping JSON data from one format (i.e. input) to another (i.e. output).

This node can be helpful in scenarios where JSON data transformation is required or while integrating two different third-party APIs.

# Pre-requisites
-------

The Node-RED-Dashboard requires Node-RED to be installed.

# Install
-------

To install the stable version use the Menu - Manage palette option and search for node-red-contrib-field-mapper, or run the following command in your Node-RED user directory - typically ~/.node-red: 

        npm install node-red-contrib-field-mapper

Or else install the package directly from Manage Palette


<img src='https://static.node.iopulsedev.net/ManagePalette.png' alt='manage palette'>

Restart your Node-RED instance and you should have a “mapper” node available in the palette.

# Get Started
-------

To install the stable version use the Menu - Manage palette option and search for node-red-contrib-field-mapper, or run the following command in your Node-RED user directory - typically ~/.node-red: 

<p>1. Drag the <b>“mapper”</b> node from the palette to the workspace.</p>
<p>2. Double click to open the Config node.</p>
<p>3. Click on the edit icon to <b>Add new mapping</b> in the mapping field.</p>
<p>4. Enter the URL for JSON consisting of input and output formats (See example below) and Click <b>Add</b>.</p>

# Usage
-------

The mapper node can be utilized in any flow with input and output JSON data. Below is an example usage with http in and http response nodes.

# Example
-------
<p>1. Create a HTTP in node with url.</p>
<p>2. Attach a function node with msg.payload as 
        ```
        {
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
        ```
<p>3. To map required fields from input to output data, open config node and <b>Set Field Values</b>. Example, select "address.street" to "info.street" to add the mapping.</p>
<p>4. Attach a Http reponse node.</p>
<p>5. Point the url in the config of mapper node.</p>
<p>6. On executing this flow, the expected output will be as follows,</p>

        ```
        {
          "input" :{
            "name" : "eugene",
            "age": 26,
            "address" :{
              "street" : "homestreet"
            },
            "test": ""
          },
            "output" :{
            "name" : "eugene",
            "age": 26,
            "info" :{
              "street" : "homestreet"
            }
        }
        ```
        

# Demo
-------

https://www.youtube.com/watch?v=U3YuTAf7YG4

# Discussions and suggestions
-------

Use the Krysp Forum: https://www.krysp.io/forum to ask questions or to discuss new features.

