$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("EbaySearchResults.feature");
formatter.feature({
  "line": 1,
  "name": "Search Results. Where one can sort, filter and see details of resulting products.",
  "description": "",
  "id": "search-results.-where-one-can-sort,-filter-and-see-details-of-resulting-products.",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Search and verify results",
  "description": "",
  "id": "search-results.-where-one-can-sort,-filter-and-see-details-of-resulting-products.;search-and-verify-results",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@001"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am a non-registered customer And I navigate to www.ebay.co.uk in browser \"\u003cbrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I search for an item \"\u003csearchItem\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I get a list of matching results for item \"\u003csearchItem\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Resulting items cards show: postage price, No of bids, price or show BuyItNow tag",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I can sort the results by Lowest Price And the results are listed in the page in the correct order",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I can sort the results by Highest Price And the results are listed in the page in the correct order",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I can filter the results by \u0027Buy it now\u0027 And all the results shown in the page have the \u0027Buy it now\u0027 tag",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "search-results.-where-one-can-sort,-filter-and-see-details-of-resulting-products.;search-and-verify-results;",
  "rows": [
    {
      "cells": [
        "browser",
        "searchItem"
      ],
      "line": 14,
      "id": "search-results.-where-one-can-sort,-filter-and-see-details-of-resulting-products.;search-and-verify-results;;1"
    },
    {
      "cells": [
        "chrome",
        "Kids Winter Wear"
      ],
      "line": 15,
      "id": "search-results.-where-one-can-sort,-filter-and-see-details-of-resulting-products.;search-and-verify-results;;2"
    },
    {
      "cells": [
        "chrome",
        "Mobiles"
      ],
      "line": 16,
      "id": "search-results.-where-one-can-sort,-filter-and-see-details-of-resulting-products.;search-and-verify-results;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": "Search and verify results",
  "description": "",
  "id": "search-results.-where-one-can-sort,-filter-and-see-details-of-resulting-products.;search-and-verify-results;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@001"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am a non-registered customer And I navigate to www.ebay.co.uk in browser \"chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I search for an item \"Kids Winter Wear\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I get a list of matching results for item \"Kids Winter Wear\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Resulting items cards show: postage price, No of bids, price or show BuyItNow tag",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I can sort the results by Lowest Price And the results are listed in the page in the correct order",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I can sort the results by Highest Price And the results are listed in the page in the correct order",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I can filter the results by \u0027Buy it now\u0027 And all the results shown in the page have the \u0027Buy it now\u0027 tag",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 76
    }
  ],
  "location": "ResultStepDefinition.navigateToEbayWebsite(String)"
});
