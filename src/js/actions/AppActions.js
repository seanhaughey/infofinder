var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = {
	searchText: function(search){
		AppDispatcher.handleViewAction({
			actionType: AppConstants.SEARCH_TEXT,
			search: search
		});
	}
}

module.exports = AppActions;