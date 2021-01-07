/**
 * Create a class/service, possibly don't export it so it's not confused with it's instance
 */
class GlobalRoute {
    /**
     * Expose public routes
     * Can be also as getter functions - possible even better!
     */
    baseUrl = '/';
    routes = {
        about_me: `${this.baseUrl}`,
        projects: `${this.baseUrl}projects`,
        contact: `${this.baseUrl}contact`,
        settings: `${this.baseUrl}settings`,
    };

    /**
     * Provide base url prefix, so module can be mounted deeper in URL.
     */
    constructor(baseUrl = '/') {
        this.setBaseUrl(baseUrl);
    }

    /**
     * Don't let other parts of app decide where user goes by default.
     * This is Settings Domain responsibility.
     */
    getDefaultRoute() {
        return this.ABOUT_ME;
    }

    /**
     * Gives Route for specific key
     * Throws error if key doesn't exist
     */
    getRoute(routeKey) {
        if (!this.routes[routeKey])
            throw Error(`Route with key "${routeKey}" doesn't exist`);
        return this.routes[routeKey];
    }

    /**
     * Sets new base url
     */
    setBaseUrl(baseUrl = '/') {
        this.baseUrl = baseUrl;
    }
}

const Global = new GlobalRoute();

export default Global;
