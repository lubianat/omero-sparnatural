# OMERO Sparnatural

This is a simple demo of using [Sparnatural](https://sparnatural.eu) as a visual query builder
for the **OMERO Virtual Knowledge Graph**.

It connects to the SPARQL endpoint at: [https://omero-nfdi.uni-muenster.de/vkg/sparql](https://omero-nfdi.uni-muenster.de/vkg/sparql)

---

## Development status

This is in development. Feedback and contributions are welcome.

---

## Previous works 

This OMERO-Sparnatural browser is a sort of continuation of the work at [sparnatural-mpi](https://github.com/mpievolbio-scicomp/sparnatural-mpi), which provided Sparnatural-style navigation for OMERO servers and some datasets related to the [Pseudomonas fluorescens SBW25 Knowledge Hub](http://pflu.evolbio.mpg.de/cv/lookup), implemented by Mariana Meireles. 

Some differences between the two implementations include: 

* This implementation is a sandbox pointing at a public SPARQL endpoint, while Mariana's provides the [graphs (around 100 MB) as Turtle files](https://github.com/mpievolbio-scicomp/sparnatural-mpi/blob/main/mpi_graph/jointed-graphs.ttl). It then queries the Turtle files through a local SPARQL endpoint, served, say, with [Apache Jena Fuseki](https://jena.apache.org/documentation/fuseki2/). 

*  This implementation, while in development, manually builds the SHACL configuration file on the fly, curating data on an [online spreadsheet](https://docs.google.com/spreadsheets/d/1uYJ70YQJRBTRL6-UM8mcFQ94HVaBReXg/edit?gid=792284404), which is converted to SHACL with the [xls2rdf](https://xls2rdf.sparna.fr/rest/) service. #Mariana's implementation hosts the schema for the query builder as [SHACL](https://en.wikipedia.org/wiki/SHACL) files in .ttl format (e.g. as [`mpi-ontology.ttl`](https://github.com/mpievolbio-scicomp/sparnatural-mpi/blob/main/mpi_ontology.ttl).


* Mariana's implementation uses comprehensive SHACL schemas derived automatically (but manually tweaked) from the OMERO-RDF datasets via [SHACL Play](shacl-play.sparna.fr/play/). 


* The underlying data model is slightly different, likely due to differences between [OMERO-RDF](https://github.com/German-BioImaging/omero-rdf) and [OMERO-ONTOP mappings](https://github.com/German-BioImaging/omero-ontop-mappings).

## Credits

- Sandbox provided by [Carsten Fortmann-Grote](https://micropop.evolbio.mpg.de/people/carsten-fortmann-grote/).  
- Development supported by [German BioImaging](https://gerbi-gmb.de/).  
- Built with:
  - [Sparnatural](https://github.com/sparna-git/Sparnatural) (LGPL-3.0)  
  - [YASGUI](https://triply.cc/docs/yasgui/)  

---
