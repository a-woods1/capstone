import { previewScenes } from '../data/temp-data-util.js';

export function DataManager(viewId) {

	// this will be the default starting record for testing
	const startingRecord = viewId;

	// the data constant lives here
	const data = initData();

	// loads data from the 'previewScenes' module
	// TODO: replace this with a database function
	function initData() {

		console.log('initData called');

		var data = getDataById(startingRecord);
		return data;

	}

	function getDataById(recordId) {

		var record = previewScenes.find(function(previewScene){
			return previewScene.id == recordId;
		});
		
		return record;
		
	}

	return {

		data,
		getDataById,
		startingRecord,
		initData

	}

}