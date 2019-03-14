import React from 'react';
import AdviserContainer from '../adviser';

import ErrorBoundry from '../error-boundry';

const AdviserPage = ({ itemId }) => {
	return (
		<ErrorBoundry>
			<AdviserContainer itemId={itemId}/>
		</ErrorBoundry>
	);
};

export default AdviserPage;