import { describe, expect, it } from "vitest";
import { isRpcNotFoundError } from "./isRpcNotFoundError";

class MetaError extends Error {
  readonly condition: number;

  constructor(condition: number) {
    super("Meta error: " + condition);
    this.condition = condition;
    Object.setPrototypeOf(this, MetaError.prototype);
  }
}

describe("isRpcNotFoundError", () => {
  it("recognizes RPC_NOT_FOUND even when Error.name is the inherited 'Error'", () => {
    const error = new MetaError(2);

    expect(error.name).toBe("Error");
    expect(isRpcNotFoundError(error)).toBe(true);
  });

  it("does not treat other MetaError conditions as unsupported RPCs", () => {
    expect(isRpcNotFoundError(new MetaError(1))).toBe(false);
  });

  it("does not mistake a generic error with the same message for MetaError", () => {
    expect(isRpcNotFoundError(new Error("Meta error: 2"))).toBe(false);
  });

  it("rejects non-Error values", () => {
    expect(isRpcNotFoundError({ condition: 2 })).toBe(false);
  });
});
