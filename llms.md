
Use GraphQL Zeus to fetch from GraphQL Backend. Here is the specification of graphql-zeus
  
GraphQL Zeus Spec:

To return the promise of type query for data object:

PROMISE_RETURNING_OBJECT = Chain.[OPERATION_NAME]({
    ...FUNCTION_FIELD_PARAMS
})(
    ...QUERY_OBJECT
).then ( RESPONSE_OBJECT => RESPONSE_OBJECT[OPERATION_FIELD] )

FUNCTION_FIELD_PARAMS = {
  KEY: VALUE
}

QUERY_OBJECT = {
...RETURN_PARAMS
}

Return params is an object containing RETURN_KEY - true if it is a scalar, RETURN_PARAMS if type. Otherwise it is a function where you pass field params and type return params.

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

Aliases
RETURN_PARAMS = {
  __alias: RETURN_PARAMS
}

Example:
Given the following schema:
```graphql
interface Nameable{
	name: String!
}

type Query{
	cardById(
		cardId: String
	): Card
	"""
	Draw a card<br>
	"""
	drawCard: Card!
	drawChangeCard: ChangeCard!
	"""
	list All Cards availble<br>
	"""
	listCards: [Card!]!
	myStacks: [CardStack!]
	nameables: [Nameable!]!
}

"""
create card inputs<br>
"""
input createCard{
	"""
	The name of a card<br>
	"""
	name: String!
	"""
	Description of a card<br>
	"""
	description: String!
}

"""
Stack of cards
"""
type CardStack implements Nameable{
	cards: [Card!]
	name: String!
}

"""
Card used in card game<br>
"""
type Card implements Nameable{
	"""
	Attack other cards on the table , returns Cards after attack<br>
	"""
	attack(
		"""
		Attacked card/card ids<br>
		"""
		cardID: [String!]!
	): [Card!]
	"""
	Description of a card<br>
	"""
	description: String!
	id: ID!
	"""
	The name of a card<br>
	"""
	name: String!
}

type SpecialCard implements Nameable{
	effect: String!
	name: String!
}

type EffectCard implements Nameable{
	effectSize: Float!
	name: String!
}

type Mutation{
	"""
	add Card to Cards database<br>
	"""
	addCard(
		card: createCard!
	): Card!
}

union ChangeCard = SpecialCard | EffectCard

type Subscription{
	deck: [Card!]
}

schema{
	query: Query
	mutation: Mutation
	subscription: Subscription
}

```
For example to use zeus generated file located in zeus folder:

```typescript
import { Chain } from './zeus';

// Create a Chain client instance with the endpoint
const chain = Chain('https://faker.graphqleditor.com/a-team/olympus/graphql');

// Query the endpoint with Typescript autocomplete for arguments and response fields
const listCardsAndDraw = await chain('query')({
  cardById: [
    {
      cardId: 'da21ce0a-40a0-43ba-85c2-6eec2bf1ae21',
    },
    {
      name: true,
      description: true,
    },
  ],
  listCards: {
    name: true,
    attack: [
      {
        cardID: [
          '66c1af53-7d5e-4d89-94b5-1ebf593508f6',
          'fc0e5757-4d8a-4f6a-a23b-356ce167f873',
        ],
      },
      {
        name: true,
      },
    ],
  },
  drawCard: {
    name: true,
  },
});
```

To declare RETURN_TYPE you can also use Selector function imported from zeus. There is also FromSelector function that can convert Selector to a type which is useful to hold returned objects in state. The Selector syntax looks like that:
```typescript
import { Chain, Selector } from './zeus';

// Create a Chain client instance with the endpoint
const chain = Chain('https://faker.graphqleditor.com/a-team/olympus/graphql');

const Card = Selector('Card')({
    name: true,
    description: true,
    id: true
})

type CardType = FromSelector<typeof Card, 'Card'>

// Query the endpoint with Typescript autocomplete for arguments and response fields
const draw = await chain('query')({
  drawCard: {
    name: true,
    description: true,
    id: true
  },
});
```

use zeus Selector and FromSelector to construct types and ZEUS RETURN_TYPE
To insert headers into Chain the syntax is following

```typescript
 Chain(API_URL,{
    headers:{
        HEADER_KEY:HEADER_VALUE
    }
  });
```

use optional chaining for zeus response if the  returned fields are optional.