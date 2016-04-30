import {makeMousePositionDriver} from '../src/mouse-positions-driver';

import assert from 'assert';
import simulant from 'simulant';

describe("makeMousePositionDriver", () => {
  describe("positions", () => {
    it("returns a stream of mouse positions", (done) => {
      const sources = makeMousePositionsDriver()();

      sources.positions().take(1).subscribe(() => done());

      const event = simulant('mousemove');

      simulant.fire(document.body, event);
    });
  });
})
