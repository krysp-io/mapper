
# node-red-contrib-field-mapper
-------

This module provides a “mapper” node in Node-RED for mapping JSON data from one format (i.e. input) to another (i.e. output).

This node can be helpful in scenarios where JSON data transformation is required or while integrating two different third-party APIs.

# Pre-requisites
-------

The Node-RED Mapper requires Node-RED to be installed.

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
<p>2. Attach a function node with msg.payload as </p>

        ```
        {
          "input" :{
            "name" : "",
            "age": "",
            "address" :{
              "street" : ""
            },
            "test": ""
          },
            "output" :{
            "name" : "",
            "age": "",
            "info" :{
              "street" : ""
            }
        }
        ```
        
<p>3. To map required fields from input to output data, open config node and <b>Set Field Values</b>. Example, select "address.street" to "info.street" to add the mapping.</p>
<p>4. Attach a Http reponse node.</p>
<p>5. Drag and drop inject node and set msg.payload as </p>

        ```
        {
            "name" : "eugene",
            "age": 26,
            "address" :{
              "street" : "homestreet"
            },
            "test": ""
        }
        ```
<p>6. Attach a mapper node to the inject node.</p>
<p>7. Point the created http in url in the config of mapper node.</p>
<p>8. Attach debug node to mapper node</p>
<p>9. On executing this flow, the expected output will be as follows,</p>

        ```
        {
            "name" : "eugene",
            "age": 26,
            "address" :{
              "street" : "homestreet"
            },
            "test": ""
            "info" :{
              "street" : "homestreet"
            }
        }
        ```
        

# Demo
-------

https://www.youtube.com/watch?v=U3YuTAf7YG4

# Krysp Platform Features
Flow execution metrics
Multi-user capabilities
Enhanced log viewer that should application and system logs

# Discussions and suggestions
-------

Use the Krysp Forum: https://www.krysp.io/forum to ask questions or to discuss new features.

