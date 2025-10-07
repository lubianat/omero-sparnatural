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
        "o": "OrganismBinomial_2",
        "sType": "https://data.example.com/ontologies/sparnatural-config/Study",
        "oType": "https://data.example.com/ontologies/sparnatural-config/OrganismBinomial",
        "values": []
      },
      "children": [
        {
          "line": {
            "s": "OrganismBinomial_2",
            "p": "https://data.example.com/ontologies/sparnatural-config/Wikidata_has_organism_name",
            "o": "WikidataTaxonID_4",
            "sType": "https://data.example.com/ontologies/sparnatural-config/OrganismBinomial",
            "oType": "https://data.example.com/ontologies/sparnatural-config/WikidataTaxonID",
            "values": []
          },
          "children": [
            {
              "line": {
                "s": "WikidataTaxonID_4",
                "p": "https://data.example.com/ontologies/sparnatural-config/organismParentTaxon",
                "o": "WikidataTaxonID_6",
                "sType": "https://data.example.com/ontologies/sparnatural-config/WikidataTaxonID",
                "oType": "https://data.example.com/ontologies/sparnatural-config/WikidataTaxonID",
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
