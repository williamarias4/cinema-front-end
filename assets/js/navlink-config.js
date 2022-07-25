export const nav_items = {
    HOME: {
        TEXT: "Home",
        LINK: "index.html"
    },
    CONTACT_US: {
        TEXT: "Contact us",
        LINK: "#"
    },
    ORDERS: {
        TEXT: "Orders",
        LINK: "#"
    },


    THEATERS: {
        TEXT: "Theaters",
        LINK: "#"
    },
    MOVIES: {
        TEXT: "Movies",
        LINK: "#"
    },
    MOVIE_SCHEDULES: {
        TEXT: "Schedules",
        LINK: "#"
    },
    TICKETS: {
        TEXT: "Tickets",
        LINK: "#"
    },


    REGISTER: {
        TEXT: "Register",
        LINK: "#"
    },
    LOG_IN: {
        TEXT: "Login",
        LINK: "/login.html"
    },
    LOG_OUT: {
        TEXT: "Logout",
        LINK: "#"
    }
}

export const index_guest = [
    nav_items.HOME,
    nav_items.CONTACT_US,
    nav_items.REGISTER,
    nav_items.LOG_IN
]

export const index_admin = [
    nav_items.HOME,
    nav_items.THEATERS,
    nav_items.MOVIES,
    nav_items.MOVIE_SCHEDULES,
    nav_items.TICKETS,
    nav_items.LOG_OUT
]

export const index_user = [
    nav_items.HOME,
    nav_items.CONTACT_US,
    nav_items.ORDERS,
    nav_items.LOG_OUT
]