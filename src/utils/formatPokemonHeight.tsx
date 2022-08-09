export const formatPokemonHeight = (height: number | any) => {
  if (height < 10) {
    return `0.${height}m`;
  } else {
    if (height) {
      let H = height.toString().split("");
      return `${H[0]}.${H[1]}m`;
    }
  }
};
