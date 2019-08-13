
![](images/zeus.gif)


[![npm](https://img.shields.io/npm/v/graphql-zeus.svg?style=flat-square)](https://www.npmjs.com/package/graphql-zeus) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)](http://commitizen.github.io/cz-cli/) [![npm downloads](https://img.shields.io/npm/dt/graphql-zeus.svg?style=flat-square)](https://www.npmjs.com/package/graphql-zeus)

GraphQL Zeus creates autocomplete client library for `Javascript` or `Typescript` which provides autocompletion for strongly typed queries.

Supported Languages:
- Javascript
  - Browser
  - NodeJS
  - React Native
- Typescript
  - Browser
  - NodeJS
  - React Native
## How it works

Given the following schema [Olympus Cards](https://app.graphqleditor.com/aexol/olympus)

![](images/autocomplete-greek.gif)

[Play with it live!](https://www.typescriptlang.org/play/?esModuleInterop=true#code/PQKgBALgzgNglgOwgLgCZygQwEYwKZgjABQwwYAokngE5gBaeArlGABYQQAOUyZA5nAhsm2AHQBjAPYBbYPxqYubAI4wAtHnQQpNeYuVr1AL2ZRixaQigQwNJgjABeMJigBPBBLAAKAJTOAHxgAN7EYGBWNpFsmIjOYADCsYg+AEQc3LxkAGaYANa0YgpKqvjaupKywJh4AB5SMMCN7jJcLPqlaml+ANwWERFkYAAqNO4xmAiC02AAiky0EwCEYABKeDKb2LSQUmAsBIkjawAywIkAsgAiYADUYADKAAoAgokUYDm6rkw60m18BACL11H4BpEpNZbCEwPAbIlMDRULwwDZMBJ8gAaMCoRQAd0RyOQYAQeEJSNQYAAvglMPi4rYJCkEGIFksfGFBnCMBAiSiSVzuaTMFsSRB7HgseFhRJKQBJGSYfh4QUy4VgbBMTF4FCQSXSjXUw2DY3q3EE-lqjWvTgY-Lig3ms0Ral9GXm4bPGCYCb4oRsOx4KBcKFQAjomi2fE0ISIfjIT3kMkU5HLMQylP89O2iD2mVRRp4MQwKT8HzozE4rOU93U-r2BD+foWCxRWyvGAwEbuLjB540KQ8EkbaTIgA8Nlj0yxU3cwRcYQAkOzxshl0u5ciAELueWodfEJfHreofeH4-HiC91VpR4S+NpaWXpdIxTuZB5GDh5+Xt++jYVCYOAaC0T9MG-KUj0vUCgJAsCv3DaCl2paDUJQ58rQ3TA7UxC8TwVa58KvG9kDvB9pifZDXxod9kAlRZf2Pf93EA4DQIPRCoJfWD2LAhi8GQ9CUKPM0l0ePsJDgCDHnyOAu1RNI8AQJgZCopdLj+HC4ChfDMFQVAsOQ09iKXa8+zIiRQJwvB+XUv9aN9cDIKYmj3zY+DOIgn9qN4zz6MlIS0NE58rLwGyjOPKA5IU4jzNvCS8CkmSYu-ey3KcgSmJYjyOOcnyYLwOC8oEtDfwQUVVQ3MzSPI6d+HSlj8u45jHNYoq+K8lzkL8krAuPMSl1QYMrLgLgIB0hA4tq+96satrmuytrcoQ7yWqXXr+P6jDoOSeS8WU6aLLSeUkHmuiuKW9yOv8y6epuvKuLK6Dc3tI7b1OiBzqcu6HOu4rVu6wqAYPUqBt-a48ByZTw3esjPu+j9fta-7OsW+6QYCxZgpE1DLDDWwNggJgaAQHs+1RUddFQScKP4WcEHnBJl1XD8N1PXdzzSOzfzxekrW5yl7L5wlYmmWzKTI5IphVHnoPhPlKV4QXkTSEKj0ipdXrwk6zt-PaYAOqbda+iGoZhj69egnC8x1uWCORRVlQSgBmAB5bAACsktN6DhqgUbxsmsjZsfX84APE7rnsiqxTqsPoOi+TvxDyTpJgWTk6gNWdvE92vZ9-CtR1FB48o39Cg-MuGt-UDBF06uc7ExLkpgTWoehiRS9D8voNjhK6ab58KByTvFeJDcO59x44FMMiADFSxwmPKpDwf1Y0rSJt07CDIFuzROIPH4rAAA1CDFnJ4NmfNABtNJWbSABdNVN0pTmDx8LhB2HEI38d1AAB+ZAU54xuiCGfC+eAr5QHvnZJ+z5QDgGuASVwkRKTjmwDQYIRAjwiytOfGAl8bywJVqgZ+z58Fi1lpLQhxCKZwOoRLVWCCjxIJ5NETsMAkhK1cAANziDAXAmBMHYMICQJcCt+S8DodAkhcChZP1vk-I+iCQDgH5AccMVJ4injAPwSqoicEkAUSw1+7CRhsAIDbe0YBQz4loEY8RR5tYOhUjIHYNA1HgHHOgPhgQAASUh8RgCVIzGI+1QKOGEAQBQeA8D5H0VIKksQabAD8cYjWbBInKWAe4zx3jRhWNxObawBB7GOKwZkpckNoZlOQPk2ghTXFgCkDEugp5WBQkgMUvMuACA4lAsTUmrBpGuByMCOgNjMRONwa+XCDov4-14H-dhritDoORMAPREcoCzIkaeeU1xgGgOmMo8BThgiyJgaY8hSjWFLnYc8P4YB3BSBJiUgOsYg7dKsaBZx-8zxKhVMA658i7z529l3ChbD1FgEhl8sa29HBSByGg08+y8EjW+cikBdNnwRzxfVQpliCD91aWizAmyaZVIBf3Il8ZnxJwUqCqBNy7xpxSlnZ+yjVGwvAK8fErBHguzAPPeSBBcH3xFR7KFX0X6hCPMXQoKBTn0yPJXBlM4jx12DmqvlS5pWcozqlbOL8W7p0zgpZ8jCZbMLuYKY898xAuu6RaiC8CwAkjBQwjlSV07wN-M611jgR5j09d6tl4Kw0+3gQao1-qPWKNflPLuWr1VLnpfqsS98Y1d3gSm0e09Z6qkaV4o8Wa6bxrSJpPMyLn7mLhfpKkmidA8ORKwVAOEcBuDwJi18e9JZLKHCswFyAfXBnvmFCKiiLlXKjb6uNYl2HTuBNSsAiB2jQExVO6ywIC2KseXCzdLzmXfgBWeqArKiFyN9e6k13L7kkuKeS1F6KMG0rmZW4l-L4XYqRZNCl76Jyfokf7QOuK1WFN8XAfxQSQlhImMyHJ0TilxISUklJ+lxzpNg9Ug2Rs8mqQKb+0lrgFl2OCZUsRczXENOI000jxThp1PDJRhxNB+21ItvRjxtAj4ymPjeeYixxg30BR-ZAw7f6Av3Ccumc722oEKSg+kwGaU0bA5aSW-JKGWiYVaaW4tdO-oVmALhSnWCYAEfJYR-apFK2QPyXleN2GaMODoxweiDFbExSfTRi4mPWIoxUzjoGXELN4yRo9PiMnwdCXOCJhsok9NiaBDD-BknsGw7h-xAKCNRKI3x8tMWikEBYxbdj1HqncfqWW5pFG2l-OpV01DBA+n4DAIM3UJNrCWfGZM8jtt8j9umYs7+I71ylfWVSU82zKQbpRP2w5xz03nICJcpTyjCnPNsG8j54GcWAb+ZKg5CpgV4GATKguXcVP-p+Siyl1L+2HYA7pKDR5CUfdK2R19T2MXhczavb7l6rvGqtd+FzFg1lCqeKK8VnXcEn2u3K8TyrdTpufJq77ur3tVrxspVSTxwemsPfPeUaxPguDSOTyn6kRgBIAKoADlrgUDWAkNIDOWds7WOpNYrx5TM85wLoXashN9iSAZhbLh72aIAD6UCLfmykFhkfGoC4e1Nqr8UVuB-jtXwm83jypIFpc2uZ5z3q3rsU2bDeS9rdpbpZv2HNqU3sfrXa+m9tG4O4k0nR0mVXfaxT-IBOkDhcH9dJ7t3hZPsHzXy52Ex7RKTuZoPkD3oh7Ah5FiX2VSA1SgHmmbeqm++whFEHANvqLx+kvQ17uQd16VmDcHgkJfCch5LylUv6PS4kzLWG0kZPy9k7vCAivRbz8F4bVWwv17o9bn7zHSlsdC1x1fpaGM0HDxIH0UBWAAHEDBsDmKcCgtEfj1GBAgFElBL90CFBEds9gu66C-qIeA3hQIhjDKqMAx+pQZ+Gwv+ZSAQT+gwUATAfYNA6QPQ-QGohY+AYgtAg4sBP+oYYBCBpo5oOgPc5Y4B5oEQQyvWYAaQgBygZ+6wwYmBbGF+aBaQ2BrogmrYxAJ888DgEg44zwYA1+ykd+c4226wC4vgLqYgSI-AqIzwG2wQaw-QJ8rwjMHBXgCQyhXBc4OIc4gQLYJ88oUAV844lwOIIwOI9AOIpwIhIwvBdQN+d+lwYAgCDAXqYApw8hwmehjwcoPonGJhDA5hIhehBhaqYAiu2AUgRYUwIRpI2+xhph-hOhwmAA6gGFfMzpVLIuOCMJYWAAAGSKoRAAD6BR8U-cwC+oiw-Q9Y9uBAnY0k+hN4mRIhyRwgqR6RUCjRuR+RYARREEdRZRVME4UGYAzRbArRWwGRWR2hR8CRkuIxYxeARMvWHRLgVheRQoRRJRlUZRaqlRMxNR8AvaqAixpMBhWRCQcxN4aRWwxxCA44MoEBt8PB8Qlcb6IwCqIwjxT82BqEwQORMoAxNM5oH23IFxfYVxCxPWpMdxGoEB3IjxG6jgLxaKbxJIHxzwXxRBNI5ogQMoUxbBwmrwNAkhBh881hthrAih7gahIhpJfBt+rAah44iA0MdAzwmhjMwQjhPBJIZIfCtAbhkubsOQpx2RdJd+hJ74TJCALJwhDh6wzhIwApBA4qNANghJ-AqkykEA44tJNh-BFJShnBIhQpBh6p9RfYOpgQeJiAkyeQEgBAFBp+pwIBtBBAQoXumA-RSU1MtMxKrgHJ2BqBugV6JIEpvo44EBWwB+zsJIOxgmUxEuBA94NkyxXR8JzxeAbyyJT8ZRaJT8ZJ+pvgYZ7gUpMpawwQiuDgLGiAWg4I3IjhxZ44tRhxNxBhyZwI445ZVp5oqJnxBZ9J5mhpXg5oDZBx2irZDR7ZfaE5FpeZVpOJ3IJIHhXhSImRnxxh655mY5WgM5faU5a56J85ux1RYA3ocQCAsqPsqZQo6ZiJmZrxOZvZ6J-Zd+PgjZzJuw5ZURVZUMNZqAdZgwDZbU3BPoiAl5XcnZ3Zi5owfZYpBpVJnBI5EQZ5YFN22pu5B5T8UFgwS5UAnhEEq5eZG56JOIKFF5aFmFVpx5+JkuIBjQfJExopepA5750pn5C5cpjweA+AXck0XF6FHFqJL58FahMojhy5BFnGmJGFWRJocJKpapRJmpSAjRrCGot8ClEA6pyl2pslTw3FPsfFuo44JpDRMl85Ki3IglYAEl3hmRxhwlBwt+v5ZIVIjhP5OQf5zhWU+lPFyK-FjReJyOBlvFUIAVZxLgtlq5MovhowjlHlXl7lzlnlrl3lgUOIW5dRBh5osJYAt5YASJowj51BUA9FeAExnxUx3IqEEQVFJ5jpwBkJZIPhTF5J5mwFH5dAX5jhXFflRlAlzhvVhlYVxlWRexYAbsMBTuZMUgDVpw44p8WIEVvgUgJIc1Nxjip8gQMhp5g4MgGAfazZ45TVbZdafakxQVwmdFMAfJrwXAcA4q3FNMy1VhcF7VkpnVwhYlNleFK5nGawOIANTwZ1kF1lr1zF4pQ5Eg31UVnGplFp5lgQsRwNKZ8N05J1DRF11lsN9lowOI+5kx41d1D1cAT1Iws1J+Z+C1S1IhPgq1JVZVGRW1O1A4sgB1nZwYZVxNj1hsgV410MEAzIk1yKrALgZpBh8Ub6AtzIeJbYBMTwf111fJdALgFYf1sZ+KYAAiN6JIc4O1QoUA-ogtgYatklhB3IcobGAA5PgVbYmBqCQaTGAAAAZpAAAkIQ2tiw1IaQztTB6C1tn0dtmJjtjgztHtXteA1Ift5oltBAVti8UgOEwdDtTVLtEdUC0d-tcdYAVt244R+AUwKdwood6dntmdMdFtvaudRyxd3IpdrtGdN6PtldgwOdVthOMgddgwDdTd3trdz+1dVtAckl3dxBad4d5dzdA9JSeQTAMAKAIdadXE3x0xct0IowJCrNPAStuwqtQokdJo8UJo-cJolcJouAUgmIxZ5g1I1oWtUCutjM2B8UGt9U2B9KaIdM2Blc2x39Mol919bUIZmoBd4UCAlRfgb98YECQoQIQYpVN1WgsiCQXCMC29sC8USi-cGJEQcAaKPglc5tPdnNSDqAKDLgP+ZV5DUCt8lcuDWJz+8t8Uu9puCD1DsiYg8U2B7YG6UAxZJIYRERjglDpDfJNDN64hbU2B+DvgGAxZuReRywgD+QN9xD49wyYdt8fdgkGoYgSoXAPgPgfCT97gO16Dyyu9sBsIkdJIfCOIx9IoWwOI59mopYQD74qIAkNIfgAF3IYgnsUgqQVtWIVtfg1IT8rdNVkIG9P+pY4j+F3hCQiTSIVjPgLDYjWgOIkd7oeDBDywcTUgCTf16jMT0QVDZDV8qDXYFjI6t8GTiD4jDDeTvgktaKFT4jVTTg3TudUgaFYTXRFt8tEhUAAA0pmaLRNWhWIJXFAD4B01oFfLkyXRPSEB7SM+M+4OYBqBEGIJ5QvbQEYwUDtZHbfAUPmcsD0wla5X48KPo0oD4JidyD4McxApPQUHfR7bUzvZk9Yw-Trf84sGc-kAgpAKRGC32Kw9WKvK4Ikm6NHU82AOE1nc6OaKXSkzQGk2g1vcsvUzeKw6Czk64KwHGcwRo6QYU8U5JdRbw-I21GocigkI8xEFwEiFqdA2cmpa4KY7yvrQWPLbfJHVAIMvmS4JgDwwK0qIgJsy45mTiGIbM6K3Ymy0gBKxvZXLIpM+BRADMxM8Y1AlAO6DKLIz4MsLMyWMpPwMIKU+S07Rqwaxa9MMIGAMEAAAyIuOHO0+Ae32s3rbM7P+MGPMsBvCjGMyGIsBuT18KfMhDfNQBpO5UhuDC2OAuTp8JctJsaiv0JbStysRshuf3n35sBuapa3FvCjwvO3lu3MBsBNBNNghNhNuge10COESjWa0Dhjk1cUJI31fwqsQCDIBAkhW1W0IsBuOgduqnQJSA9uqPAP9tRKDt2DLPMH8sb14uQu-ObNKvmshhf54CEMTOOtWuBjqBgAACMOIF7yz8Dkd5Nu9CQu5sCUrCAO7dDmZDD3wdAPgvDiSb6szpT97Ugj7Lgz7grbKIHmTSiILq9670QEhOl+Bzg5ovriwUAJ7zrbrmJnr3rIQaHwY+b9zhj5bYbQQ5bEQUbMbcbCbFHybj9qbsC6bclmbEQ2bwHu9LHrHn9DTZVNAMrdHEQpbfCdHlb+bNbdzgTwToT4TfgLbcp7bytXbs78S87nji7WpQ7zho747wok7SnM7c7fbrLS7Q72BpdiHWwSA+BNL8tCzozp8TLDoX9fpJjoDwjURwRiusIt8dQHL-ACqQjhdjgiuwRc6MobTWtzgPTVtQX4DVtcpiS4oN4b6fC0XLgVtfTcqCXnrPr1IazIQWXPs5NYw8SYb1I0dzhk9+Q1IEdKL+MG9RXXcJX6WTL9NPnfnLn8YgXYDkRoXdMPj-n5HlHBX2rurWzdNfgxHRj+QO1k99np8hDOIUgdDT84TztU3UnDbudyLMdDX0QinnbhnqnN9TLJn7LXXnLmhZRetQ3m2QoJrywmAAQpdo7MjBDY3szLzU3+ATrgY3TLgrrpTr3Vtq9EQ8D2AI43pgxmtWhzMVRLTb5bUYgdL7433wPadqPvoDLk0Pgt8Yh53SAoLz33xvBkEgzG6BDkXVKAPvT-TNrUzcq43czz303hDfLAbJriStPVtPRY5Azibgwn3ermAq3U3QbLzY5mzHPmbvDvRbgk1tA01kzovILZzUvn7-tAbcvY5ivigyK4JCQwvE38vUAevyvfgt8rrzTIbOvdR5vjLYruvU1It6v9vLvk04JNvAb2At8dH7zzvSvBvlU1IfPdRRR6zGv7gd9YAkf7vQfnvIfVbrHSrh3073bJ3C7+PLqhPy7pvDvifWwxPgf+vk0q7OzboWvpoZPbGgvEQvvILCQafynRnWfBPA7LjxPYvVfZLFb5ftI3FtfS9mjudoPqLvfpdTXEALXZX2AdYLYvDWo+0rMTL2bQxnpUPY4NMGh-p844bbHigBnGfvbWfWDmhU3oEXAPo9pPgwAAAOmkHjwAHohBP9YhP938IAf-PwgB+AP9Sa3wX+b-D-l-wf5Pxf+8gHEFbTdoXtkAbtAAExhMF+8tICEsESAExX8tgVWnqCtqswEuiuK2o7mRT4Dc6jwUQIigewDNNsdNTfj6R35aE5uHtHVjoFOBUYaAiIcMP4Fq4hAl+hsVmOk2W7rdkBG9HIPPTbgsh0B0ITAW1weyohpabAYWpNENYQJ0mI7PAVEUIFbxJoJAm2uQKrxQgqBwQGgdQS37jh6BHJffq4HurzxdQzIOmrIJxCoDxgkgqcNqAgDpM-Ak3I1rw3DAJJ54ugI6tfFVr009asDY1lTxS5op9gPPKfglxyJ5EpApTP9hMyN7TMvuiQ-2lz2Pa-dT2YAccJewZ6h1-a0TITse2-YUAMQbAGbjLyGYb1I6CQFbrB0xJc8UezlOoEKR8C88CipvIogM0uYuB1AN7CnrUOiC3whwCfKEJoTHK7sxA+7IQJ0LD5uBeh5fbkCt1N5Ks6+eVcYaXyhAKpI6iLBHjs2GhAgCAjQ73jSBr5ulEWJrYsij34ZtR9WN6XxsMOFCR09mugCoXYN8H5B-BNAQIYax74XDB+VwpNia0i71CYh9PF4RqG+G-D-hjwxYCsIrYHDMSJQnxqvSqLr0EO1g2wf9xWqyCSQ8gxQWGEcGiYPwl3fgDULhC6gvguInHlCH9rwMnB7gZDi4GZGMiaRRI2QQ0NkG3wL2+ZeXN50OEH8JggveQfSJEZBgAYnQhAMkjwDqB5BSA50OgmNq+AgyNABnmxzYCDgQkKYe-GgXSDehwobGRAOiC7C51ZRw0BUbiIS5tpDgYAUwCwARKkg5RnsVgMpD4QgQoQVnL6P33NAmsuRItfRrqDYBZZ4htI42sSOsDBjhAWWHnofgoAjABemJCUKKPzbMjWRUoviJ0OZFqowmswumPg3cA+BmRSI2kHKFVE+B1RmowYMIB1GkhyQ+o9-HeFkAhiYGmWMkGABjBQh+AudXMXTAS4YA0EJnWwG+ktF4A3RvBBAJ6MHAIAfR8BVEcP1ILijOCyKHwJPSHCu9re1IQBMyKcAe0MxCmZ2jiEDFKCJOuzGJE2HmY0E-8pjHahgT-wBNSqTYAIG4F2ps1ww44dajeLKTbVEWXDKxFeIfH1IAClNZ0j+PDBUiNQJrYCeGBQIP5lBmwrUfWL1FzV6C7+WCXgCRHVV82sIgIduTmaYSxAHpbCSQxH5ESPSgIyvuPzInLi6Rq43HhuN5HbjjxLwsIqgHJEAApR4G7GZwFj6oRYzkGAGZEkhDx9UHxlx1CQhjkkI7Z4G7EeBJjJJVifSJ23voagrakgm-BAHUBXw7audJQFfzgAVjJowAN0QYNRGSSxCp4sMM6Ak4ATlIRjTCXeIgRESzJL44lu+P2qfjvxoBcMH+L0aXjHJEE--D5NdJQTBgME4KfBLQKIT82dY9vKhLAnoT0CwU0iWiO5B4S-hBE68b5OLAkTARpdCid2ir7UTXQ2BVsLw2ljxBVaYhTcUoMJG4ioxyg6gUKFZgkgjGIQxmJYIiCiCuwVUhAC4IYhdx7BItTwbgLJFhNJu9kpsJiRymulnJm2TCR5P3KswOKEQZ4W+IL5Qhyac1BaguknQPwyRFCVadKCIHBxfAxg0IZcnNC9TxB55QaZgJGlnjOhZ0gwZ4MSHTTg2zzJybv3vHBTlpINV6QgDWlItXxrALaTNV2kTpSEQMihEDJxLUTeGxNJlrVIJERihasgnapyBlBtSXhHMPcAeAumrUrpIMnqWIP6kPS3BT0sMGNLwGeDBe+M88K0lRFTdApc028STIQaulJA78AmRtIpLWDSahsHaWBL2k3obk40pYFbSURW1GZqAaWViFZi3xZZvM-cNLKRrEB8EksImcgBJmYlbpFMjAVTLqk0zOhdM7GQGy1nEhmZRoVmYBKCm5TdZXUlyVFKtn-kwZ5mQWWTQppAF5q0M5WXgJlluyFZSsq2sHKwrSgqEdqK0DrL1kagDZEgo2cNJNnWBaZE0+mYiyjnGZtZUgFmZ9PZn1JOZFE-TNHNrAezuaQs1ACLN9liz6Ek6SWeMGlnKys5NCZECHLJHNyS52ctuRHOIAOYO07UmgXHOFAJz7pSc9wSnMNZmz05FsnZv3IFA2y+++cpyUXKinzzDW5cr2cLJ9mUE-Z+02BA3PcBNyra689uUsGVmnysKgmU6VoN0gvDm0McjqU7LMbDcR55MxOVIONmYyXpt8hAJNMF4Pyc5ectmSvOdmLSopgC5EPzM9kk1vZUM-ecrKBnHzIF8shBEDOVkoL1ZLBRGfLUYBOjAsEQXGTQO-GaNNqCCw6UsGfjbUIEzIymcNMPmTTEhN8utOdOIVgSNqnGf2TWl-lUKdqtC8eT-JYVvTJua9SqW4CwFdEiFxMsBcEH2BviVpZIjWUDPanSKX5m2ORcKkBm-yEZ2BIAA)


## Table of contents
- [How it works](#how-it-works)
- [Table of contents](#table-of-contents)
- [License](#license)
- [How to use](#how-to-use)
  - [As a CLI](#as-a-cli)
    - [Installation](#installation)
    - [Usage with Javascript](#usage-with-javascript)
    - [Usage with TypeScript](#usage-with-typescript)
    - [Usage with NodeJS](#usage-with-nodejs)
    - [Usage with React Native](#usage-with-react-native)
    - [Load from URL](#load-from-url)
  - [Use generated client example](#use-generated-client-example)
    - [Perform query with Chain](#perform-query-with-chain)
    - [Unions](#unions)
    - [Perform query with aliases](#perform-query-with-aliases)
    - [Single query with Api](#single-query-with-api)
    - [Gql string](#gql-string)
    - [Javascript TypeCasting](#javascript-typecasting)
    - [Typescript SelectionSet](#typescript-selectionset)
  - [Spec](#spec)
    - [Use Alias Spec](#use-alias-spec)
  - [Use In your Project to generate code](#use-in-your-project-to-generate-code)
  - [Use in your project to dynamically fetch schema](#use-in-your-project-to-dynamically-fetch-schema)
- [Support](#support)
- [Contribute](#contribute)
- [Parsing](#parsing)


## License

MIT

## How to use 

Main usage of graphql zeus should be as a CLI.

### As a CLI

#### Installation

Install globally

```sh
$ npm i -g graphql-zeus
```

Of course you can install locally to a project and then use as a npm command or with `npx`

#### Usage with Javascript

```sh
$ zeus schema.graphql ./
```
It will also generate corresponding out.d.ts file so you can have autocompletion,

#### Usage with TypeScript
```sh
$ zeus schema.graphql ./  --ts 
```

#### Usage with NodeJS
```sh
$ zeus schema.graphql ./  --node 
```

#### Usage with React Native

Same as browser

```sh
$ zeus schema.graphql ./ 
```
#### Load from URL

```sh
$ zeus https://faker.graphqleditor.com/aexol/olympus/graphql ./generated
```

With Authorization header

```sh
$ zeus https://faker.graphqleditor.com/aexol/olympus/graphql ./generated --header=Authorization:dsadasdASsad
```

### Use generated client example

```sh
$ zeus https://faker.graphqleditor.com/aexol/olympus/graphql ./generated
```

```js
import { Api } from "./generated/graphql-zeus"
```

#### Perform query with Chain

```js
import { Chain } from './graphql-zeus';
const createCards = async () => {
  const chain = Chain('https://faker.graphqleditor.com/aexol/olympus/graphql');
  const listCardsAndDraw = await chain.Query({
    cardById: [
      {
        cardId: 'sdsd'
      },
      {
        description: true
      }
    ],
    listCards: {
      name: true,
      skills: true,
      attack: [
        { cardID: ['s', 'sd'] },
        {
          name: true
        }
      ]
    },
    drawCard: {
      name: true,
      skills: true,
      Attack: true
    }
  });
};
createCards();
// Result of a query
// {
//     "drawCard": {
//         "Attack": 83920,
//         "name": "Raphaelle",
//         "skills": [
//             "RAIN",
//             "THUNDER",
//         ]
//     },
//     "cardById": {
//         "description": "Customer"
//     },
//     "listCards": [
//         {
//             "name": "Lon",
//             "skills": [
//                 "THUNDER"
//             ],
//             "attack": [
//                 {
//                     "name": "Christop"
//                 },
//                 {
//                     "name": "Theodore"
//                 },
//                 {
//                     "name": "Marcelle"
//                 }
//             ]
//         },
//         {
//             "name": "Etha",
//             "skills": null,
//             "attack": [
               
//                 {
//                     "name": "Naomie"
//                 }
//             ]
//         },
//         {
//             "attack": [
//                 {
//                     "name": "Kyle"
//                 },
//             ],
//             "name": "Arlene",
//             "skills": [
//                 "FIRE",
//             ]
//         }
//     ]
// }
```

#### Unions

You can use Zeus with unions:

```js
const { drawChangeCard } = await chain.Query({
    drawChangeCard: {
      __typename: true,
      '...on EffectCard': {
        effectSize: true,
        name: true
      },
      '...on SpecialCard': {
        effect: true,
        name: true
      }
    }
});
// drawChangeCard result:
// {
//     "effectSize": 195.99532210956377,
//     "name": "Destinee",
//     "__typename": "EffectCard"
// }
```

#### Perform query with aliases

```js
const aliasedQueryExecute = await chain.Query({
    listCards: {
      __alias: {
        atak: {
          attack: [
            { cardID: ["1"] },
            {
              name: true,
              description: true,
            },
          ],
        },
      },
    },
  });
// RESULT
// {
//     "listCards": [
//         {
//             "atak": {
//                 "attack": [
//                     {
//                         "name": "Zelma",
//                         "description": "Central"
//                     }
//                 ]
//             }
//         }
//     ]
// }
```
So you can access properties type-safe like this

```js
aliasedQueryExecute.listCards.map(c=>c.atak.attack)
```

#### Single query with Api 

Use single query with Api to get response casted.

```js
import { Api } from './graphql-zeus';
const createCards = async () => {
  const api = Api('https://faker.graphqleditor.com/aexol/olympus/graphql');
  const drawedCard = await api.Query.drawCard({
    Attack: true,
    name: true
  });
};
createCards();
// Result of a query
// {
//     "Attack": 83098,
//     "name": "Jeanne"
// }
```

#### Gql string
Use Zeus to generate gql string

```js
import { Zeus } from './graphql-zeus';
const createCards = async () => {
  const stringGql = Zeus.Query({
    listCards: {
      name: true,
      skills: true,
      Attack: true
    }
  });
  // query{listCards{name skills Attack}}
};
createCards();

```

To run the example navigate to: `./example` and run
```sh
$ npm i
```

then run 

```
$ npm run start
```

Use `Api` for single queries mutations and `Chain` for query chaining

#### Javascript TypeCasting
You can cast your response from fetch/apollo/other-lib  to correct type even if you are using Javascript:

```js
import { Cast } from './graphql-zeus';
const myQuery = Cast.Query(myLib("somegraphqlendpoint"))
```

#### Typescript SelectionSet

In typescript you can make type-safe selection sets to reuse them across queries

```ts
import { SelectionSet,Chain,Card } from './graphql-zeus';
const chain = Chain('https://faker.graphqleditor.com/aexol/olympus/graphql');
const cardSelectionSet: SelectionSet<Card> = {
  name: true,
  description: true,
  Attack: true,
  skills: true,
  Defense: true,
  cardImage: {
    key: true,
    bucket: true,
  },
};
const queryWithSelectionSet = await chain.Query({
  drawCard: cardSelectionSet,
  listCards: cardSelectionSet,
});
```

### Spec

Promise of type query data object is returned.

```
PROMISE_RETURNING_OBJECT = Chain.[OPERATION_NAME]({
    ...FUNCTION_FIELD_PARAMS
})(
    ...QUERY_OBJECT
).then ( RESPONSE_OBJECT => RESPONSE_OBJECT[OPERATION_FIELD] )
```

Simple function params object

```
FUNCTION_FIELD_PARAMS = {
  KEY: VALUE
}
```

Query object 

```
QUERY_OBJECT = {
    ...RETURN_PARAMS
}
```

Return params is an object containg RETURN_KEY - true if it is a `scalar`, RETURN_PARAMS if `type` otherwise it is a function where you pass Fiel params and type return params.


```
RETURN_PARAMS = {
    RETURN_KEY: true,
    RETURN_KEY: {
        ...RETURN_PARAMS
    },
    RETURN_FUNCTION_KEY:[
        {
            ...FUNCTION_FIELD_PARAMS
        },
        {
            ...RETURN_PARAMS
        }
    ]
}
```

#### Use Alias Spec

```
RETURN_PARAMS = {
  __alias: RETURN_PARAMS
}
```

Access aliased operation type-safe
```
PROMISE_RETURNING_OBJECT[ALIAS_STRING][OPERATION_NAME]
```

### Use In your Project to generate code 

This will be rarely used, but here you are!

```js
import { Parser,TreeToTS } from 'graphql-zeus';

const schemaFileContents = `
type Query{
    hello: String!
}
schema{
    query: Query
}
`

const typeScriptDefinition = TreeToTS.resolveTree(Parser.parse(schemaFileContents));

const jsDefinition = TreeToTS.javascript(Parser.parse(schemaFileContents));
```

### Use in your project to dynamically fetch schema

This is useful when you need some schema fetched from your GraphQL endpoint

```js
import { Utils } from 'graphql-zeus';

Utils.getFromUrl("https://faker.graphqleditor.com/aexol/olympus/graphql").then(schemaContent => {
  // Use schema content here
})

```

## Support 

[Join our GraphQL Editor Channel](https://join.slack.com/t/graphqleditor/shared_invite/enQtNDkwOTgyOTM5OTc1LWI4YjU3N2U5NGVkNzQ2NzY5MGUxMTJiNjFlZDM1Zjc2OWRmNTI0NDM3OWUxYTk4Yjk3MzZlY2QwOWUzZmM2NDI)

Leave a star ;)

## Contribute

For a complete guide to contributing to GraphQL Editor, see the [Contribution Guide](CONTRIBUTING.md).

1.  Fork this repo
2.  Create your feature branch: git checkout -b feature-name
3.  Commit your changes: git commit -am 'Add some feature'
4.  Push to the branch: git push origin my-new-feature
5.  Submit a pull request

## Parsing

Simplier approach to GraphQL parsing. Using graphql-js library and parsing AST to simplier types.