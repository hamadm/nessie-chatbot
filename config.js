'use strict';

const WIT_TOKEN = 'OTQRF4JLPHHMLY2TDY7GFMTYFMTMP2CR'
      //process.env.WIT_TOKEN
if (!WIT_TOKEN) {
  throw new Error('Missing WIT_TOKEN. Go to https://wit.ai/docs/quickstart to get one.')
}


var FB_PAGE_TOKEN = process.env.FB_PAGE_TOKEN || 'EAAQ8XHBqm7IBAAxVJhrClZAChzu6YZBiOKmPlWLI6K6sHJCRoYd6wZADL8ZBQDDmnEytm2be3v6IJ3bPF5dTP5HrqxQgi0lFMTYWof89B7tZCKZB24WLnJWeIWwSXXQM1mDNWr6hMCuWznbjFOeXYJN2PMn0YLPqZCoKqH4ZBeSR6AZDZD';
if (!FB_PAGE_TOKEN) {
	throw new Error('Missing FB_PAGE_TOKEN. Go to https://developers.facebook.com/docs/pages/access-tokens to get one.')
}

var FB_VERIFY_TOKEN = process.env.FB_VERIFY_TOKEN || 'just_do_it'

module.exports = {
  WIT_TOKEN: WIT_TOKEN,
  FB_PAGE_TOKEN: FB_PAGE_TOKEN,
  FB_VERIFY_TOKEN: FB_VERIFY_TOKEN,
}
