const searchClient = algoliasearch('JBOP1QD3ED', '1c8efacb90b9e0d1f87ed438e2c5f324');


const search = instantsearch({
  indexName: 'tedtalks',
  searchClient: searchClient,
});


function renderHits({ hits, widgetParams }) {
  console.log('hits', hits)
  const { container } = widgetParams;

  const hitTemplate = hit => {
    return `<div>
              <div><i>${hit._highlightResult.name.value}</i></div>
              <div><b>${hit._highlightResult.speakers[0].value}</b></div>
            </div>`;
  };

  container.querySelector(".hits").innerHTML = hits
    .map(hitTemplate)
    .join("<hr/>");
}


const customHits = instantsearch.connectors.connectHits(renderHits);


search.addWidget(
  customHits({ container: document.querySelector("#talks") })
);


search.addWidget(
  instantsearch.widgets.searchBox({
    container: document.querySelector("#searchBox"),
    placeholder: "Search for inspiration",
  })
);


search.addWidget(
  instantsearch.widgets.pagination({
    container: '#pagination',
    cssClasses: {
      root: 'pagination',
      active: 'active'
    }
  })
);

search.start();
