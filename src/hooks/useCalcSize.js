export const useCalcSize = (value) => ({
  width: `calc(50px + 10px * ${value}`,
  height: `calc(50px + 10px * ${value}`
})