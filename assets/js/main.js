//
// Place any custom JS here
//

// reference to the sparnatural webcomponent
const sparnatural = document.querySelector("spar-natural");

// Check for endpoint in URL parameters
const urlParams = new URLSearchParams(window.location.search);
const endpointParam = urlParams.get('endpoint');

if (endpointParam) {
  sparnatural.setAttribute('endpoint', endpointParam);
}

// Set up the endpoint selector
const endpointSelect = document.getElementById('endpointSelect');
if (endpointSelect) {
  // Set initial value based on URL or sparnatural attribute
  endpointSelect.value = sparnatural.getAttribute('endpoint');

  endpointSelect.addEventListener('change', (event) => {
    const newEndpoint = event.target.value;
    const url = new URL(window.location);
    url.searchParams.set('endpoint', newEndpoint);
    window.location.href = url.toString();
  });
}

// display on the page the endpoint URL with which sparnatural is configured (if element exists)
const displayEndpoint = document.querySelector("#displayEndpoint");
if (displayEndpoint) {
  displayEndpoint.setAttribute("href", sparnatural.getAttribute("endpoint"));
  displayEndpoint.textContent = sparnatural.getAttribute("endpoint");
}

// init yasQE query editor
const yasqe = new Yasqe(document.getElementById("yasqe"), {
	requestConfig: {
		// make sure the endpoint is the same as sparnatural
		endpoint: sparnatural.getAttribute("endpoint"),
		method: "GET",
		header: {}
	},
	copyEndpointOnNewTab: false
});

// init yasR result display
// register a specific plugin that is capable of displaying clikable label + URI
Yasr.registerPlugin("TableX", SparnaturalYasguiPlugins.TableX);
Yasr.registerPlugin("Grid", SparnaturalYasguiPlugins.GridPlugin);
delete Yasr.plugins['table'];

const yasr = new Yasr(document.getElementById("yasr"), {
	pluginOrder: ["TableX", "Grid", "response"],
	defaultPlugin: "TableX"
});

// link yasqe and yasr
yasqe.on("queryResponse", function (_yasqe, response, duration) {
	yasr.setResponse(response, duration);
	// when response is received, enable the button
	sparnatural.enablePlayBtn();
});


sparnatural.addEventListener("init", (event) => {
	// notify the specification to yasr plugins
	for (const plugin in yasr.plugins) {
		if (yasr.plugins[plugin].notifyConfiguration) {
			yasr.plugins[plugin].notifyConfiguration(
				event.detail.config
			);
		}
	}
});

// listener when sparnatural updates the query
// see http://docs.sparnatural.eu/Javascript-integration.html#sparnatural-events
sparnatural.addEventListener("queryUpdated", (event) => {
	// get the SPARQL query string, and pass it to yasQE
	queryString = sparnatural.expandSparql(event.detail.queryString);
	yasqe.setValue(queryString);
	// display the JSON query on the console
	console.log("Sparnatural JSON query structure:");
	console.dir(event.detail.queryJson);

	// notify the query to yasr plugins
	for (const plugin in yasr.plugins) {
		if (yasr.plugins[plugin].notifyQuery) {
			yasr.plugins[plugin].notifyQuery(event.detail.queryJson);
		}
	}
});

// --- Patch duplicated SERVICE blocks ---
// Purpose: flatten nested SERVICE <url> { ... SERVICE <same url> { ... } ... }
// while keeping indentation readable for YasQE.

function flattenDuplicateServices(query) {
	// Work on a copy
	let cleaned = query;

	// Regex to detect nested SERVICE with the same endpoint
	const servicePattern = /SERVICE\s*<([^>]+)>\s*\{\s*([^{}]*?)\s*SERVICE\s*<\1>\s*\{([^{}]*)\}\s*\}/gis;

	// Repeat until all duplicates are flattened
	while (servicePattern.test(cleaned)) {
		cleaned = cleaned.replace(servicePattern, (match, endpoint, outer, inner) => {
			// Clean and indent inner content
			const merged = `${outer.trim()}\n  ${inner.trim()}`;
			return `SERVICE <${endpoint}> {\n  ${merged}\n}`;
		});
	}

	// Normalize indentation: 2 spaces per block level
	return cleaned
		.replace(/\{\s*/g, '{\n  ')
		.replace(/\s*\}/g, '\n}')
		.replace(/\s*\n\s*\n+/g, '\n')  // remove double blank lines
		.trim() + '\n';
}

// Intercept query updates: show the flattened + formatted version in YasQE
sparnatural.addEventListener("queryUpdated", (event) => {
	let queryString = sparnatural.expandSparql(event.detail.queryString);
	queryString = flattenDuplicateServices(queryString); // 👈 patch & format
	yasqe.setValue(queryString);

	console.log("Sparnatural JSON query structure:");
	console.dir(event.detail.queryJson);

	for (const plugin in yasr.plugins) {
		if (yasr.plugins[plugin].notifyQuery) {
			yasr.plugins[plugin].notifyQuery(event.detail.queryJson);
		}
	}
	sparnatural.lastPatchedQuery = queryString;
});

// Intercept right before sending to ensure backend also gets the formatted version
yasqe.on("query", function (_yasqe) {
	let q = _yasqe.getValue();
	const patched = flattenDuplicateServices(q);
	if (patched !== q) {
		console.info("Flattened duplicate SERVICE blocks before query execution.");
		_yasqe.setValue(patched);
	}
});

// listener when the sparnatural submit button is clicked
// see http://docs.sparnatural.eu/Javascript-integration.html#sparnatural-events
sparnatural.addEventListener("submit", (event) => {
	// enable loader on button
	sparnatural.disablePlayBtn();
	// trigger the query from YasQE
	yasqe.query();
});

// listener when the sparnatural reset button is clicked
// see http://docs.sparnatural.eu/Javascript-integration.html#sparnatural-events
sparnatural.addEventListener("reset", (event) => {
	// empties the SPARQL query on yasQE
	yasqe.setValue("");
});

// hide/show yasQE
document.getElementById('sparql-toggle').onclick = function () {
	if (document.getElementById('yasqe').style.display == 'none') {
		document.getElementById('yasqe').style.display = 'block';
		yasqe.setValue(yasqe.getValue());
		yasqe.refresh();
	} else {
		document.getElementById('yasqe').style.display = 'none';
	}
	return false;
};
