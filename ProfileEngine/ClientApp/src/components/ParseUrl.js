export const parseUri = (uri, expression) => {
    

    const units = expression.split('/');
    const components = uri.split('/');

    let result = {};

    for (let i = 0; i < uri.length; i++) {

        if (i >= components.length) break;

        if (units[i] === components[i]) continue;

        if (units[i] !== components[i] && !units[i].startsWith(':')) {
            return {};
        }

        if (units[i] !== components[i] && units[i].startsWith(':')) {
            result[units[i].replace(':','')] = components[i];
        }

        return result;

    }
}