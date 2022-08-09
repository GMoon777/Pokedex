export const routes = {
    intro: "/",
    main: "/main",
    selected: "/selected",
    pokemon: (id: number | ":id") => `/${id}`
  } as const;