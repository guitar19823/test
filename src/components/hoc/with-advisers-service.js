import React from 'react';
import { AdvisersConsumer } from '../advisers-context';

const withAdvisersService = () => (Wrapped) => {
	return (props) => {
		return (
			<AdvisersConsumer>
				{
					(advisersService) => {
						return (
							<Wrapped
								{...props}
								advisersService={advisersService}
							/>
						);
					}
				}
			</AdvisersConsumer>
		);
	}
};

export default withAdvisersService;