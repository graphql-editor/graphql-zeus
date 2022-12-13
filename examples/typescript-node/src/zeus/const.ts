/* eslint-disable */

export const AllTypesProps: Record<string,any> = {
	SpecialSkills: "enum" as const,
	JSON: `scalar.JSON` as const,
	Card:{
		attack:{

		}
	},
	createCard:{
		skills:"SpecialSkills"
	},
	Mutation:{
		addCard:{
			card:"createCard"
		}
	},
	Query:{
		cardById:{

		}
	},
	Public:{
		powerups:{

		}
	}
}

export const ReturnTypes: Record<string,any> = {
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
	Powerup:{
		name:"String"
	},
	ChangeCard:{
		"...on SpecialCard":"SpecialCard",
		"...on EffectCard":"EffectCard"
	},
	EffectCard:{
		effectSize:"Float",
		name:"String"
	},
	Nameable:{
		"...on Card": "Card",
		"...on EffectCard": "EffectCard",
		"...on CardStack": "CardStack",
		"...on SpecialCard": "SpecialCard",
		name:"String"
	},
	CardStack:{
		cards:"Card",
		name:"String"
	},
	S3Object:{
		bucket:"String",
		key:"String",
		region:"String"
	},
	Mutation:{
		addCard:"Card"
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
	SpecialCard:{
		effect:"String",
		name:"String"
	},
	Public:{
		powerups:"Powerup"
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