import { definePattern } from "@pandacss/dev";

export const container = definePattern({
  transform(props) {
    return {
      position: "relative",
      maxWidth: "8xl",
      mx: "auto",
      px: { base: "4", md: "8", lg: "12", xl: "24" },
      ...props,
    };
  },
});
