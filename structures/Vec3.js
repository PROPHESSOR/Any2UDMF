/**
 * Copyright (c) 2018 PROPHESSOR
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

'use strict';

module.exports = class Vec3 {
	constructor(x, y, z) {
		[this.x, this.y, this.z] = [x, y, z];
	}
};