export const routes = {
    intro: "/",
    main: "/main",
    pokemon: (id: number | ":id") => `/${id}`
  } as const;