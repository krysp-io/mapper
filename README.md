# node-red-contrib-field-mapper

---

This module provides a “mapper” node in Node-RED for mapping JSON data from one format (i.e. input) to another (i.e. output).

This node can be helpful in scenarios where JSON data transformation is required or while integrating two different third-party APIs.

Mapper uses JSON specification file to assign values of input fields to output fields. Input JSON field can be a simple field or an object. Input fields/objects can be mapped to expected output fields/objects.

During runtime the “mapper” node will assign input fields/objects values to corresponding output fields/objects. Transformed JSON document will contain both input and output fields/objects. Mapper node will NOT delete any fields after transforming input JSON into desired output JSON document. “Change” node may be used to delete obsolete fields after transformation, if needed.

## Public Mapper Definition

Shared Field Mapper Definitions Public field definitions that are peer-reviewed and merged into [mapper-definition](https://github.com/krysp-io/mapper-definitions) for community sharing and usage to help keep definitions up-to-date. Intended to be used and maintained by community.

Contributions are welcome! See the [contribution guidelines](contributing.md).

link: [Public Mapper repository](!https://github.com/krysp-io/mapper-definitions)

## Private Mapper Definition

Private Field Mapper Definitions If your enterprise has a specific object model that will be used in integrations and you would like to keep those definitions private then you can point to a JSON file hosted on your own web servers.
# Pre-requisites

---

The Node-RED Mapper requires Node-RED to be installed.

# Install

---

To install the stable version use the Menu - Manage palette option and search for node-red-contrib-field-mapper, or run the following command in your Node-RED user directory - typically ~/.node-red:

```bash
npm install node-red-contrib-field-mapper
```

Or else install the package directly from Manage Palette

<img src='https://static.node.iopulsedev.net/ManagePalette.png' alt='manage palette'>

Restart your Node-RED instance and you should have a “mapper” node available in the palette.

# Get Started

---

To install the stable version use the Menu - Manage palette option and search for node-red-contrib-field-mapper, or run the following command in your Node-RED user directory - typically ~/.node-red:

<p>1. Drag the <b>“mapper”</b> node from the palette to the workspace.</p>
<p>2. Double click to open the Config node.</p>
<p>3. Click on the edit icon to <b>Add new mapping</b> in the mapping field.</p>
<p>4. Enter the URL for JSON consisting of input and output formats (See example below) and Click <b>Add</b>.</p>

# Usage

---

The mapper node can be utilized in any flow with input and output JSON data. Below is an example usage with an simple JSON inject node.

# Example

---

<p>1. Add an Inject node with below sample JSON, You can add below data in Inject node properties by double clicking the inject node and changing the <code>msg.payload</code> type to JSON</p>

```json
{
  "name": "eugene",
  "age": 26,
  "info": {
    "street": "home-street"
  },
  "test": "mapper"
}
```

<p>2. Add Mapper node to the flow and edit the properties of mapper node by double clicking the mapper node</p>

<p>3. You can create a new mapping by clicking on edit button on Mapper properties panel and having <strong>Add new Mappings...</strong> selected.

Select <strong>Mapping</strong> dropdown to view saved custom mappers

By default public mapper.json file will be selected to load sample mapper JSON object. You can click on <strong>Load</strong> button to load default mapper JSON to schema field and edit as required.

Additionally you can also use private mapper definition by selecting private in dropdown and pasting the link of public S3 bucket/json file or available valid json definition.

Below is an example mapper JSON which takes sample user details as JSON input and converts it to new payload/data. We can also add new key-value pair which may or may not be present in input JSON.

</p>.

```json
{
  "input": {
    "userId": "1",
    "name": "",
    "age": "",
    "info": {
      "street": ""
    },
    "test": ""
  },
  "output": {
    "dynamic-value": "mapper-data",
    "userId": "",
    "name": "",
    "age": "",
    "address": {
      "street": ""
    }
  }
}
```

Once <strong>schema</strong> is set you can click on <strong>Add</strong> button available on top right side of the mapper properties panel to save custom mapper.

<p>4. <strong>(Optional)</strong> You can select <strong>Clean up</strong> checkbox to remove un-mapped fields.</p>

Example: 

With Clean-Up:

```json
{
  "address": {
    "street": "home-street"
  },
  "name": "eugene",
  "dynamic-value": {
    "street": "home-street"
  },
  "age": 26
}
```

Without Clean-Up
```json
{
  "name": "eugene",
  "age": 26,
  "info": {
    "street": "home-street"
  },
  "test": "mapper",
  "address": {
    "street": "home-street"
  }
}
```
<p>5. <strong>Set Field Values</strong>
<br>
Click on the <strong>+ add</strong> button at the bottom of mapper properties panel to add key mapping to <code>output</code> JSON.
<br><br>
Example:
Select <code>info.street</code> to <code>address.street</code> to add mapping

Doing this will create a new property address into the incoming object or <code>input</code> JSON object, Existing key-value pairs will not be removed unless <strong>Clean up</strong> is checked.
</p>
<p>6. Attach the mapper node to the inject node.</p>
<p>7. Attach debug node to mapper node</p>
<p>9. On executing this flow, the expected output will be as follows,</p>

```json
{
  "name": "eugene",
  "age": 26,
  "info": {
    "street": "home-street"
  },
  "test": "mapper",
  "address": {
    "street": "home-street"
  }
}
```

# Example flow

```json
[
    {
        "id": "7f1163f7515c5d6f",
        "type": "tab",
        "label": "Mapper Node",
        "disabled": false,
        "info": "This module provides a “mapper” node in Node-RED for mapping JSON data from one format (i.e. input) to another (i.e. output).\n\nThis node can be helpful in scenarios where JSON data transformation is required or while integrating two different third-party APIs.",
        "env": []
    },
    {
        "id": "e9e8f7b9511cdde5",
        "type": "inject",
        "z": "7f1163f7515c5d6f",
        "name": "Sample JSON",
        "props": [
            {
                "p": "payload"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "{\"name\":\"eugene\",\"age\":26,\"info\":{\"street\":\"home-street\"},\"test\":\"mapper\"}",
        "payloadType": "json",
        "x": 300,
        "y": 180,
        "wires": [
            [
                "68f1d823be6dcbe3",
                "1c5f199f9f0a6f88"
            ]
        ]
    },
    {
        "id": "68f1d823be6dcbe3",
        "type": "Mapper",
        "z": "7f1163f7515c5d6f",
        "name": "Mapper v1.0.23",
        "rules": [
            {
                "pi": "info.street",
                "po": "address.street"
            },
            {
                "pi": "userId",
                "po": "dynamic-value"
            }
        ],
        "cleanup": false,
        "mapping": "18aada988a899f9e",
        "x": 590,
        "y": 180,
        "wires": [
            [
                "876649f1c4f4e161"
            ]
        ]
    },
    {
        "id": "876649f1c4f4e161",
        "type": "debug",
        "z": "7f1163f7515c5d6f",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 940,
        "y": 180,
        "wires": []
    },
    {
        "id": "1c5f199f9f0a6f88",
        "type": "Mapper",
        "z": "7f1163f7515c5d6f",
        "name": "Mapper with clean-up",
        "rules": [
            {
                "pi": "info.street",
                "po": "address.street"
            },
            {
                "pi": "name",
                "po": "name"
            },
            {
                "pi": "info",
                "po": "dynamic-value"
            },
            {
                "pi": "age",
                "po": "age"
            }
        ],
        "cleanup": true,
        "mapping": "18aada988a899f9e",
        "x": 600,
        "y": 260,
        "wires": [
            [
                "0e32244a81ebb7ba"
            ]
        ]
    },
    {
        "id": "0e32244a81ebb7ba",
        "type": "debug",
        "z": "7f1163f7515c5d6f",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 950,
        "y": 260,
        "wires": []
    },
    {
        "id": "18aada988a899f9e",
        "type": "Mapping",
        "name": "User Address",
        "url-type": "public",
        "url-public": "mappings/custom.json",
        "url-private": "",
        "schema": "{\"input\":{\"userId\":\"1\",\"name\":\"\",\"age\":\"\",\"info\":{\"street\":\"\"},\"test\":\"\"},\"output\":{\"dynamic-value\":\"mapper-data\",\"userId\":\"\",\"name\":\"\",\"age\":\"\",\"address\":{\"street\":\"\"}}}"
    }
]
```

# Demo

---

https://www.youtube.com/watch?v=U3YuTAf7YG4

# Krysp Platform Features

<p>Flow execution metrics</p>
<p>Multi-user capabilities</p>
<p>Enhanced log viewer that shows application and system logs</p>

# Contributions
---

Development of Mapper Node happens in the open on GitHub, and we are grateful to the community for contributing bugfixes and improvements. Read below to learn how you can take part in improving mapper node.

## Contributing Guide
Read our [contributing guide](contributing.md) to learn about our development process, how to propose bugfixes and improvements.

# Discussions and suggestions

---

Use the Krysp Forum: https://www.krysp.io/forum to ask questions or to discuss new features.
