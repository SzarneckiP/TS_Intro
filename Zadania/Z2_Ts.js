"use strict";
function prefixer(text) {
    if (text.substr(0, 2) === 'ts') {
        return text;
    }
    else {
        return `ts ${text}`;
    }
}
;
console.log(`${prefixer('ts jest super')}`);
console.log(`${prefixer('mercedes')}`);
