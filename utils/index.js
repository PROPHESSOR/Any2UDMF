/**
 * Copyright (c) 2018 PROPHESSOR
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

'use strict';

const [
	Linedef,
	Sector,
	Thing,
	Sidedef,
	Vertex,
	Vec3,
	Brush
] = [
	require('../structures/linedef'),
	require('../structures/sector'),
	require('../structures/thing'),
	require('../structures/sidedef'),
	require('../structures/vertex'),
	require('../structures/Vec3'),
	require('../structures/Brush')
];

/** Создает новый прямоугольный 3D Brush
 * @param  {Vec3} vec1 - 1 точка браша
 * @param  {Vec3} vec2 - 2 точка браша
 * @param  {Vec3} vec3 - 3 точка браша
 * @param  {Vec3} vec4 - 4 точка браша
 * @returns {Brush} браш
 */
exports.createBrush = (vec1, vec2, vec3, vec4) => new Brush(vec1, vec2, vec3, vec4);