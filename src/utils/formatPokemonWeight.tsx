export const formatPokemonWeight = (weight: number | any) => {
  if (weight < 10) {
    return `0.${weight}KG`;
  } else if (weight < 10000) {
    let W = weight.toString().split("");
    return `${W[0]}.${W[1]}KG`;
  } else if (weight < 1000) {
    let W = weight.toString().split("");
    return `${W[0]}${W[1]}.${W[2]}KG`;
  } else {
    if (weight >= 1000) {
      let W = weight.toString().split("");
      return `${W[0]}${W[1]}${W[2]}.${W[3]}KG`;
    }
  }
};
