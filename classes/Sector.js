/**
 * Copyright (c) 2018 PROPHESSOR
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

'use strict';

/*
 array: [
	 [x, y],
	 [x, y],
	 [x, y]
 ]
 */

module.exports = class Sector {
	constructor(vec1, vec2, vec3) {
		this.lines = [
			[
				[vec1.x, vec1.y],
				[vec2.x, vec2.y]
			],
			[
				[vec2.x, vec2.y],
				[vec3.x, vec3.y]
			],
			[
				[vec3.x, vec3.y],
				[vec1.x, vec1.y]
			]
		];

		this.height = Math.min(vec1.z, vec2.z, vec3.z);
	}
};