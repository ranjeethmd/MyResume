export const useEvents = (() => {

    const events = {all:[]};

    const publish = (event, message) => {

        const callbacks = [...events[event]||[], ...events.all];

        callbacks.forEach(callback => callback(event, message));
    }


    const subscribe = (callback, event) => {
        if (event) {

            if (!event in events) {
                events[event] = [];
            }

            const callbacks = events[event];
            callbacks.push(callback);
            return () => {
                events[event] = callbacks.filter(item => item !== callback);
            };
        }
        else {
            const callbacks = events.all;
            callbacks.push(callback);
            return () => {
                events.all = callbacks.filter(item => item !== callback);
            };
        }
        
    }
     
    return () => [subscribe, publish ];


})();
