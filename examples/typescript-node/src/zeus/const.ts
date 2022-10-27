/* eslint-disable */

export const AllTypesProps: Record<string,any> = {
	Query:{
		cardById:{

		}
	},
	createCard:{
		skills:"SpecialSkills"
	},
	Card:{
		attack:{

		}
	},
	SpecialSkills: "enum" as const,
	JSON: `scalar.JSON` as const,
	Public:{
		powerups:{

		}
	},
	Mutation:{
		addCard:{
			card:"createCard"
		}
	}
}

export const ReturnTypes: Record<string,any> = {
	CardStack:{
		cards:"Card",
		name:"String"
	},
	Subscription:{
		deck:"Card"
	},
	Nameable:{
		"...on CardStack": "CardStack",
		"...on SpecialCard": "SpecialCard",
		"...on Card": "Card",
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
	S3Object:{
		bucket:"String",
		key:"String",
		region:"String"
	},
	SpecialCard:{
		effect:"String",
		name:"String"
	},
	ChangeCard:{
		"...on SpecialCard":"SpecialCard",
		"...on EffectCard":"EffectCard"
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
	JSON: `scalar.JSON` as const,
	Public:{
		powerups:"Powerup"
	},
	Mutation:{
		addCard:"Card"
	},
	Powerup:{
		name:"String"
	},
	EffectCard:{
		effectSize:"Float",
		name:"String"
	}
}

export const Ops = {
subscription: "Subscription" as const,
	query: "Query" as const,
	mutation: "Mutation" as const
}