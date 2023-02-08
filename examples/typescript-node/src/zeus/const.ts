/* eslint-disable */

export const AllTypesProps: Record<string,any> = {
	createCard:{
		skills:"SpecialSkills"
	},
	Public:{
		powerups:{

		}
	},
	Mutation:{
		addCard:{
			card:"createCard"
		}
	},
	JSON: `scalar.JSON` as const,
	Card:{
		attack:{

		}
	},
	Query:{
		cardById:{

		}
	},
	SpecialSkills: "enum" as const
}

export const ReturnTypes: Record<string,any> = {
	ChangeCard:{
		"...on SpecialCard":"SpecialCard",
		"...on EffectCard":"EffectCard"
	},
	CardStack:{
		cards:"Card",
		name:"String"
	},
	Public:{
		powerups:"Powerup"
	},
	Mutation:{
		addCard:"Card"
	},
	S3Object:{
		bucket:"String",
		key:"String",
		region:"String"
	},
	Powerup:{
		name:"String"
	},
	SpecialCard:{
		effect:"String",
		name:"String"
	},
	EffectCard:{
		effectSize:"Float",
		name:"String"
	},
	Nameable:{
		"...on CardStack": "CardStack",
		"...on SpecialCard": "SpecialCard",
		"...on EffectCard": "EffectCard",
		"...on Card": "Card",
		name:"String"
	},
	JSON: `scalar.JSON` as const,
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
		skills:"SpecialSkills"
	},
	Subscription:{
		deck:"Card"
	},
	Query:{
		cardById:"Card",
		drawCard:"Card",
		drawChangeCard:"ChangeCard",
		listCards:"Card",
		myStacks:"CardStack",
		nameables:"Nameable",
		public:"Public"
	}
}

export const Ops = {
mutation: "Mutation" as const,
	subscription: "Subscription" as const,
	query: "Query" as const
}