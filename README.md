# Restaurant finder

Find your restaurant using Mapbox 🗺️.

## How to run

```shell
npm install
npm run dev
```

### Other useful commands

Testing:

```shell
npm run test
```

TypeScript compiler & linter:

```shell
npm run tsx && npm run lint
```

#### What I learned

- To play with mapbox it's better to use layers - you can easily attach listeners to layers or fly maps
  to symbols on those layers.
- For working with mapbox I prefer webpack instead of parcel - problem with bundling deps.
- Maybe it will be better to move map logic from `componentDidUpdate` to epics ? I see how much code
  is in [map component](./src/containers/map/map.tsx).
- Marble tests are good if you don't use Promises in your services - I'm using them - still no idea
  how to write proper unit tests with e.g delay operator in epic.
- I may use power of react-testing-library better - current tests can be done using simple react test renderer.
- Code organization was good - easy to read.
