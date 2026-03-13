# GIDE Sparnatural

A visual SPARQL query builder for bioimaging metadata, built with [Sparnatural](https://sparnatural.eu). Developed as part of the [foundingGIDE](https://founding-gide.eurobioimaging.eu/) project.

The demo lets you explore study-level metadata from the [Image Data Resource (IDR)](https://idr.openmicroscopy.org/) and other GIDE sources. Metadata is converted to RDF via [RO-Crate](https://www.researchobject.org/ro-crate/) and served through SPARQL endpoints on [TriplyDB](https://triplydb.com/).

For the broader rationale and search strategy, see [BioImage-Archive/gide-search](https://github.com/BioImage-Archive/gide-search).

## Live demo

**<https://german-bioimaging.github.io/gide-sparnatural/>**

## How it works

1. The SHACL configuration (`idr_studies_shacl.ttl`) defines which classes and properties appear in the query builder.
2. Users compose queries visually; Sparnatural translates them to SPARQL.
3. SPARQL queries are run against endpoints hosted on TriplyDB with a dump for the metadata triples enriched with FBbi and NCBITaxon terms.
4. Results are displayed with [YASGUI](https://triply.cc/docs/yasgui/).

## Previous work

This project builds on [sparnatural-mpi](https://github.com/mpievolbio-scicomp/sparnatural-mpi) by Mariana Meireles, which provided Sparnatural-based navigation for OMERO datasets related to the [Pseudomonas fluorescens SBW25 Knowledge Hub](http://pflu.evolbio.mpg.de/cv/lookup).

It gradually evolved to a study-level search for the GIDE project.

## Credits

- RO-Crates for SSBD and BIA provided by Koji Kyoda and François Sherwood respectively. See the [gide-crate-combine](https://github.com/lubianat/gide-crate-combine) repository for details.
- Supported by [German BioImaging](https://gerbi-gmb.de/).
- OMERO-ONTOP sandbox originally provided by [Carsten Fortmann-Grote](https://micropop.evolbio.mpg.de/people/carsten-fortmann-grote/).
- Built with [Sparnatural](https://github.com/sparna-git/Sparnatural) (LGPL-3.0) and [YASGUI](https://triply.cc/docs/yasgui/).
