import advisersData from './data/advisers';
import careerLevelsData from './data/career-levels';
import industriesData from './data/industries';

export default class AdvisersService {
	advisersNewData = [];

	constructor() {
		this.advisersData = advisersData;
		this.careerLevelsData = careerLevelsData;
		this.industriesData = industriesData;
		this.advisersNewData.length === 0 && this.collectAdvisersData();
	};

	collectAdvisersData = () => {
		this.advisersData.map(({ id, photo, name, industries, career_levels, country, cities, price }) => {
			let newIndustries = [],
					newCareerLevels = [];

			industries.map((data) => {
				return newIndustries.push(this.industriesData.find(({ id }) => +id === data).title);
			});

			career_levels.map((data) => {
				return newCareerLevels.push(this.careerLevelsData.find(({ id }) => +id === data).title);
			});

			return this.advisersNewData.push({
				id,
				photo,
				name,
				industries: newIndustries,
				career_levels: newCareerLevels,
				country,
				cities,
				price
			});
		});
	};

	// Имитация загрузки с сервера
	getResource = (resource) => {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if (Math.random() < 0.99 && resource[0] !== undefined) {
					resolve(resource);
				} else {
					reject(new Error('Something bad happened'));
				}
			}, Math.random() * 900);
		});
  };

  getAllAdvisers = () => {
  	return this.getResource(this.advisersNewData);
  };

  getAdviser = (idx) => {
	  	const adviser = this.advisersNewData.find(({ id }) => id === +idx);

	  	return this.getResource([adviser]);
  };

  getAllCareerLevels = () => {
  	return this.careerLevelsData;
  };

  getAllIndustries = () => {
  	return this.industriesData;
  };
}