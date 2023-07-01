---
slug: diagrams
title: Test Diagram Carousel
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import {Carousel} from '@trendyol-js/react-carousel';

Some Kratix images.

<Carousel
className={'exampleCarousel1'}
show={1}
slide={1}
transition={0.5}>

<figure
  className="diagram fullwidth">
  <img
    src={useBaseUrl('/img/docs/workshop/promise-components/emphasis-on=all.png')}
    alt="TODO"
  />
  <figcaption>
    Fig.1 - Trulli, Puglia, Italy.
  </figcaption>
</figure>

<figure>
  <img
    src={useBaseUrl('/img/docs/workshop/promise-components/emphasis-on=api.png')}
    alt="TODO"
  />
  <figcaption>
    Fig.1 - Trulli, Puglia, Italy.
  </figcaption>
</figure>
<figure>
  <img
    src={useBaseUrl('/img/docs/workshop/promise-components/emphasis-on=pipeline.png')}
    alt="TODO"
  />
  <figcaption>
    Fig.1 - Trulli, Puglia, Italy.
  </figcaption>
</figure>

<figure>
  <img
    src={useBaseUrl('/img/docs/workshop/promise-components/emphasis-on=state-store.png')}
    alt="TODO"
  />
  <figcaption>
    Fig.1 - Trulli, Puglia, Italy.
  </figcaption>
</figure>

<figure>
  <img
    src={useBaseUrl('/img/docs/workshop/promise-components/emphasis-on=dependencies.png')}
    alt="TODO"
  />
  <figcaption>
    Fig.1 - Trulli, Puglia, Italy.
  </figcaption>
</figure>

</Carousel>
