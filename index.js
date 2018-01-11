// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. see LICENSE in the project root for license information.
"use strict";

Office.initialize = function(reason) {
  $(document).ready(function(){
    loadEntities();
  });
}

function loadEntities() {
  // getSelectedRegExMatches is in preview, so need to test for it
  if (Office.context.mailbox.item.getSelectedRegExMatches !== undefined) {
    var selectedMatches = Office.context.mailbox.item.getSelectedRegExMatches();
    if (selectedMatches) {
      // Note that the use of selectedMatches.OrderNumber, where
      // OrderNumber corresponds to the RegExName attribute of the Rule element
      // in the manifest
      $("#selected-match").text(JSON.stringify(selectedMatches.OrderNumber, null, 2));
    } else {
      $("#selected-match").text("Selected matches was null");
    }
  } else {
    $("#selected-match").text("Method not supported on your client");
  }

  // Get all matches
  var allMatches = Office.context.mailbox.item.getRegExMatches();
  if (allMatches) {
    // Note that the use of selectedMatches.OrderNumber, where
    // OrderNumber corresponds to the RegExName attribute of the Rule element
    // in the manifest
    $("#all-matches").text(JSON.stringify(allMatches.OrderNumber, null, 2));
  } else {
    $("#all-matches").text("All matches was null");
  }
}

function showError(message) {
  $("#error-msg").text(message);
  $("#error").show();
}