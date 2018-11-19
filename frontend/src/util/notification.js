import {Position, Toaster} from "@blueprintjs/core";

const toaster = Toaster.create({
  position: Position.TOP,
});

export function showError(message) {
  toaster.show({
    intent: "danger",
    message
  });
}