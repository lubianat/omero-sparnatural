var example_1 = {
  "distinct": true,
  "variables": [
    {
      "termType": "Variable",
      "value": "Study_1"
    },
    {
      "termType": "Variable",
      "value": "Species_2"
    }
  ],
  "order": null,
  "branches": [
    {
      "line": {
        "s": "Study_1",
        "p": "https://data.example.com/ontologies/sparnatural-config/studied_species",
        "o": "Species_2",
        "sType": "https://data.example.com/ontologies/sparnatural-config/Study",
        "oType": "https://data.example.com/ontologies/sparnatural-config/Species",
        "values": [
          {
            "label": "Arabidopsis thaliana",
            "rdfTerm": {
              "type": "uri",
              "value": "http://purl.obolibrary.org/obo/NCBITaxon_3702"
            }
          }
        ]
      },
      "children": []
    }
  ],
  "limit": 1000
};

var example_2 = {
  "distinct": true,
  "variables": [
    {
      "expression": {
        "type": "aggregate",
        "aggregation": "sample",
        "distinct": false,
        "expression": {
          "termType": "Variable",
          "value": "Study_1"
        }
      },
      "variable": {
        "termType": "Variable",
        "value": "Study_1_sample"
      }
    },
    {
      "termType": "Variable",
      "value": "Species_2"
    }
  ],
  "order": null,
  "branches": [
    {
      "line": {
        "s": "Study_1",
        "p": "https://data.example.com/ontologies/sparnatural-config/studied_species",
        "o": "Species_2",
        "sType": "https://data.example.com/ontologies/sparnatural-config/Study",
        "oType": "https://data.example.com/ontologies/sparnatural-config/Species",
        "values": []
      },
      "children": []
    },
    {
      "line": {
        "s": "Study_1",
        "p": "https://data.example.com/ontologies/sparnatural-config/studied_species",
        "o": "Species_3",
        "sType": "https://data.example.com/ontologies/sparnatural-config/Study",
        "oType": "https://data.example.com/ontologies/sparnatural-config/Species",
        "values": [
          {
            "label": "Mus musculus",
            "rdfTerm": {
              "type": "uri",
              "value": "http://purl.obolibrary.org/obo/NCBITaxon_10090"
            }
          },
          {
            "label": "Homo sapiens",
            "rdfTerm": {
              "type": "uri",
              "value": "http://purl.obolibrary.org/obo/NCBITaxon_9606"
            }
          }
        ]
      },
      "children": [],
      "notExists": true
    }
  ],
  "limit": 1000
};

var example_3 = {
  "distinct": true,
  "variables": [
    {
      "termType": "Variable",
      "value": "Date"
    },
    {
      "termType": "Variable",
      "value": "Study"
    },
    {
      "termType": "Variable",
      "value": "ImagingMethod"
    }
  ],
  "order": "desc",
  "branches": [
    {
      "line": {
        "s": "Study",
        "p": "https://data.example.com/ontologies/sparnatural-config/release_date",
        "o": "Date",
        "sType": "https://data.example.com/ontologies/sparnatural-config/Study",
        "oType": "https://data.example.com/ontologies/sparnatural-config/Date",
        "values": [
          {
            "label": "From 1.1.2020",
            "start": "2020-01-01T03:00:00.000Z",
            "stop": null
          }
        ]
      },
      "children": []
    },
    {
      "line": {
        "s": "Study",
        "p": "https://data.example.com/ontologies/sparnatural-config/used_imaging_method",
        "o": "ImagingMethod",
        "sType": "https://data.example.com/ontologies/sparnatural-config/Study",
        "oType": "https://data.example.com/ontologies/sparnatural-config/ImagingMethod",
        "values": []
      },
      "children": [],
      "optional": true
    }
  ],
  "limit": 1000
};


var example_4 = {
  "distinct": true,
  "variables": [
    {
      "termType": "Variable",
      "value": "Study_1"
    },
    {
      "termType": "Variable",
      "value": "ImagingMethod_6"
    },
    {
      "termType": "Variable",
      "value": "Species_2"
    }
  ],
  "order": null,
  "branches": [
    {
      "line": {
        "s": "Study_1",
        "p": "https://data.example.com/ontologies/sparnatural-config/studied_species",
        "o": "Species_2",
        "sType": "https://data.example.com/ontologies/sparnatural-config/Study",
        "oType": "https://data.example.com/ontologies/sparnatural-config/Species",
        "values": []
      },
      "children": [
        {
          "line": {
            "s": "Species_2",
            "p": "https://data.example.com/ontologies/sparnatural-config/species_parent_taxon",
            "o": "Species_3",
            "sType": "https://data.example.com/ontologies/sparnatural-config/Species",
            "oType": "https://data.example.com/ontologies/sparnatural-config/Species",
            "values": [
              {
                "label": "Bacteria",
                "rdfTerm": {
                  "type": "uri",
                  "value": "http://purl.obolibrary.org/obo/NCBITaxon_2"
                }
              }
            ]
          },
          "children": []
        }
      ]
    },
    {
      "line": {
        "s": "Study_1",
        "p": "https://data.example.com/ontologies/sparnatural-config/used_imaging_method",
        "o": "ImagingMethod_6",
        "sType": "https://data.example.com/ontologies/sparnatural-config/Study",
        "oType": "https://data.example.com/ontologies/sparnatural-config/ImagingMethod",
        "values": []
      },
      "children": [
        {
          "line": {
            "s": "ImagingMethod_6",
            "p": "https://data.example.com/ontologies/sparnatural-config/imaging_method_parent",
            "o": "ImagingMethodParent_7",
            "sType": "https://data.example.com/ontologies/sparnatural-config/ImagingMethod",
            "oType": "https://data.example.com/ontologies/sparnatural-config/ImagingMethodParent",
            "values": [
              {
                "label": "light microscopy",
                "rdfTerm": {
                  "type": "uri",
                  "value": "http://purl.obolibrary.org/obo/FBBI_00000345"
                }
              }
            ]
          },
          "children": []
        }
      ]
    }
  ],
  "limit": 1000
};
