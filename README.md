# GIDE Sparnatural

A visual SPARQL query builder for bioimaging metadata, built with [Sparnatural](https://sparnatural.eu). Developed as part of the [foundingGIDE](https://founding-gide.eurobioimaging.eu/) project.

The demo lets you explore study-level metadata from the [Image Data Resource (IDR)](https://idr.openmicroscopy.org/) and other GIDE sources. Metadata is converted to RDF via [RO-Crate](https://www.researchobject.org/ro-crate/) and served through SPARQL endpoints on [TriplyDB](https://triplydb.com/).

For the broader rationale and search strategy, see [BioImage-Archive/gide-search](https://github.com/BioImage-Archive/gide-search).

## Live demo

**<https://german-bioimaging.github.io/idr-sparnatural/>**

## How it works

1. The SHACL configuration (`idr_studies_shacl.ttl`) defines which classes and properties appear in the query builder.
2. Users compose queries visually; Sparnatural translates them to SPARQL.
3. Results are displayed with [YASGUI](https://triply.cc/docs/yasgui/).

There is also an [OMERO-ONTOP demo](ontop_demo.html) that queries a virtual knowledge graph backed by an OMERO server.

## Previous work

This project builds on [sparnatural-mpi](https://github.com/mpievolbio-scicomp/sparnatural-mpi) by Mariana Meireles, which provided Sparnatural-based navigation for OMERO datasets related to the [Pseudomonas fluorescens SBW25 Knowledge Hub](http://pflu.evolbio.mpg.de/cv/lookup).

## Credits

- OMERO-ONTOP sandbox provided by [Carsten Fortmann-Grote](https://micropop.evolbio.mpg.de/people/carsten-fortmann-grote/).
- Supported by [German BioImaging](https://gerbi-gmb.de/).
- Built with [Sparnatural](https://github.com/sparna-git/Sparnatural) (LGPL-3.0) and [YASGUI](https://triply.cc/docs/yasgui/).
