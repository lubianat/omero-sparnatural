var example_1 = {
  "distinct": true,
  "variables": [
    {
      "termType": "Variable",
      "value": "Study_1"
    }
  ],
  "order": null,
  "branches": [
    {
      "line": {
        "s": "Study_1",
        "p": "https://data.example.com/ontologies/sparnatural-config/organism",
        "o": "TaxonName_2",
        "sType": "https://data.example.com/ontologies/sparnatural-config/Study",
        "oType": "https://data.example.com/ontologies/sparnatural-config/TaxonName",
        "values": []
      },
      "children": [
        {
          "line": {
            "s": "TaxonName_2",
            "p": "https://data.example.com/ontologies/sparnatural-config/Wikidata_has_organism_name",
            "o": "WikidataTaxon_4",
            "sType": "https://data.example.com/ontologies/sparnatural-config/TaxonName",
            "oType": "https://data.example.com/ontologies/sparnatural-config/WikidataTaxon",
            "values": []
          },
          "children": [
            {
              "line": {
                "s": "WikidataTaxon_4",
                "p": "https://data.example.com/ontologies/sparnatural-config/organismParentTaxon",
                "o": "WikidataTaxon_6",
                "sType": "https://data.example.com/ontologies/sparnatural-config/WikidataTaxon",
                "oType": "https://data.example.com/ontologies/sparnatural-config/WikidataTaxon",
                "values": [
                  {
                    "label": "Plantae",
                    "rdfTerm": {
                      "type": "uri",
                      "value": "http://www.wikidata.org/entity/Q756"
                    }
                  }
                ]
              },
              "children": []
            }
          ]
        }
      ]
    }
  ],
  "limit": 1000
}

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
      "value": "TaxonName_2"
    }
  ],
  "order": null,
  "branches": [
    {
      "line": {
        "s": "Study_1",
        "p": "https://data.example.com/ontologies/sparnatural-config/organism",
        "o": "TaxonName_2",
        "sType": "https://data.example.com/ontologies/sparnatural-config/Study",
        "oType": "https://data.example.com/ontologies/sparnatural-config/TaxonName",
        "values": []
      },
      "children": [
        {
          "line": {
            "s": "TaxonName_2",
            "p": "https://data.example.com/ontologies/sparnatural-config/Wikidata_has_organism_name",
            "o": "WikidataTaxon_18",
            "sType": "https://data.example.com/ontologies/sparnatural-config/TaxonName",
            "oType": "https://data.example.com/ontologies/sparnatural-config/WikidataTaxon",
            "values": []
          },
          "children": [
            {
              "line": {
                "s": "WikidataTaxon_18",
                "p": "https://data.example.com/ontologies/sparnatural-config/organismParentTaxon",
                "o": "WikidataTaxon_20",
                "sType": "https://data.example.com/ontologies/sparnatural-config/WikidataTaxon",
                "oType": "https://data.example.com/ontologies/sparnatural-config/WikidataTaxon",
                "values": [
                  {
                    "label": "Animalia",
                    "rdfTerm": {
                      "type": "uri",
                      "value": "http://www.wikidata.org/entity/Q729"
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
            "s": "TaxonName_2",
            "p": "https://data.example.com/ontologies/sparnatural-config/Wikidata_has_organism_name",
            "o": "WikidataTaxon_22",
            "sType": "https://data.example.com/ontologies/sparnatural-config/TaxonName",
            "oType": "https://data.example.com/ontologies/sparnatural-config/WikidataTaxon",
            "values": []
          },
          "children": [
            {
              "line": {
                "s": "WikidataTaxon_22",
                "p": "https://data.example.com/ontologies/sparnatural-config/organismParentTaxon",
                "o": "WikidataTaxon_24",
                "sType": "https://data.example.com/ontologies/sparnatural-config/WikidataTaxon",
                "oType": "https://data.example.com/ontologies/sparnatural-config/WikidataTaxon",
                "values": [
                  {
                    "label": "Mammalia",
                    "rdfTerm": {
                      "type": "uri",
                      "value": "http://www.wikidata.org/entity/Q7377"
                    }
                  }
                ]
              },
              "children": []
            }
          ],
          "notExists": true
        }
      ]
    }
  ],
  "limit": 1000
}

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
      "expression": {
        "type": "aggregate",
        "aggregation": "group_concat",
        "distinct": false,
        "expression": {
          "termType": "Variable",
          "value": "ImagingMethod"
        }
      },
      "variable": {
        "termType": "Variable",
        "value": "ImagingMethod_group_concat"
      }
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
}