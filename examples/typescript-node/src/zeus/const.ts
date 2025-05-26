/* eslint-disable */

export const AllTypesProps: Record<string,any> = {
	SpecialSkills: "enum" as const,
	Query:{
		cardById:{

		}
	},
	createCard:{
		skills:"SpecialSkills"
	},
	Card:{
		attack:{

		},
		testFn:{

		}
	},
	Mutation:{
		addCard:{
			card:"createCard"
		}
	},
	JSON: `scalar.JSON` as const,
	Public:{
		powerups:{

		}
	},
	ID: `scalar.ID` as const
}

export const ReturnTypes: Record<string,any> = {
	Nameable:{
		"...on CardStack": "CardStack",
		"...on Card": "Card",
		"...on SpecialCard": "SpecialCard",
		"...on EffectCard": "EffectCard",
		name:"String"
	},
	Query:{
		cardById:"Card",
		drawCard:"Card",
		drawChangeCard:"ChangeCard",
		listCards:"Card",
		myStacks:"CardStack",
		nameables:"Nameable",
		public:"Public"
	},
	CardStack:{
		cards:"Card",
		name:"String"
	},
	Card:{
		Attack:"Int",
		Children:"Int",
		Defense:"Int",
		attack:"Card",
		cardImage:"S3Object",
		description:"String",
		id:"ID",
		image:"String",
		info:"JSON",
		name:"String",
		skills:"SpecialSkills",
		testFn:"String",
		ids:"ID"
	},
	SpecialCard:{
		effect:"String",
		name:"String"
	},
	EffectCard:{
		effectSize:"Float",
		name:"String"
	},
	Mutation:{
		addCard:"Card"
	},
	JSON: `scalar.JSON` as const,
	S3Object:{
		bucket:"String",
		key:"String",
		region:"String"
	},
	Public:{
		powerups:"Powerup"
	},
	Powerup:{
		name:"String"
	},
	ChangeCard:{
		"...on SpecialCard":"SpecialCard",
		"...on EffectCard":"EffectCard"
	},
	Subscription:{
		deck:"Card"
	},
	ID: `scalar.ID` as const
}

export const Ops = {
query: "Query" as const,
	mutation: "Mutation" as const,
	subscription: "Subscription" as const
}