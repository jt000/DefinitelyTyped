let requireReturnsString = () => {
    const foo = require('./foo');
    foo.concat('otherstringdoesnterror');
};

let requireTReturnsT = () => {
    const foo = require<{bar: number}>('./foo');
    const max = Math.max(3, foo.bar);
};

let requireEnsure = () => {
    require.ensure(['b'], (r) => {
        const c = r('c');
    });
};
