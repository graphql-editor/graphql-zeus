/* eslint-disable */

export const AllTypesProps: Record<string,any> = {
	Mutation:{
		addCard:{
			card:"createCard"
		}
	},
	JSON: `scalar.JSON` as const,
	createCard:{
		skills:"SpecialSkills"
	},
	Public:{
		powerups:{

		}
	},
	Card:{
		attack:{

		}
	},
	SpecialSkills: "enum" as const,
	Query:{
		cardById:{

		}
	}
}

export const ReturnTypes: Record<string,any> = {
	Mutation:{
		addCard:"Card"
	},
	JSON: `scalar.JSON` as const,
	Powerup:{
		name:"String"
	},
	EffectCard:{
		effectSize:"Float",
		name:"String"
	},
	Nameable:{
		"...on EffectCard": "EffectCard",
		"...on Card": "Card",
		"...on SpecialCard": "SpecialCard",
		"...on CardStack": "CardStack",
		name:"String"
	},
	Public:{
		powerups:"Powerup"
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
		skills:"SpecialSkills"
	},
	S3Object:{
		bucket:"String",
		key:"String",
		region:"String"
	},
	ChangeCard:{
		"...on SpecialCard":"SpecialCard",
		"...on EffectCard":"EffectCard"
	},
	SpecialCard:{
		effect:"String",
		name:"String"
	},
	CardStack:{
		cards:"Card",
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
	Subscription:{
		deck:"Card"
	}
}

export const Ops = {
mutation: "Mutation" as const,
	query: "Query" as const,
	subscription: "Subscription" as const
}