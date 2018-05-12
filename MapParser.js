/**
 * Copyright (c) 2018 PROPHESSOR
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

'use strict';

const fs = require('fs');

module.exports = (FILENAME) => {
    const file = fs.readFileSync(`./input/${FILENAME}.vmf`, 'utf8');

    const outfile = file
        // .replace(/(world)\s+/g, '"$1": ')
        .replace(/world\s+/g, '')
        .replace(/[\x0d]/g, '')
        .replace(/\n{/g, ' {')
        .replace(/\n\s*(solid|side|connections)/g, ',\n')
        .replace(/" +"/g, '": "')
        .replace(/"\n(\s+)"/g, '",\n$1"')
        .replace(/",\n(\s*){/g, '",\n$1"array": [\n$1\t{')
        .replace(/}\n(\s*)}/g, '}\n$1\t]\n$1}')
        .replace(/}\n(\s*)}/g, '}\n$1\t]\n$1}');

    fs.writeFileSync(`./input/${FILENAME}.json`, outfile, 'utf8');

    return true;
};

if (require.main) module.exports('map');