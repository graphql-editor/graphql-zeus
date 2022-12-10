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
	ChangeCard:{
		"...on SpecialCard":"SpecialCard",
		"...on EffectCard":"EffectCard"
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
	EffectCard:{
		effectSize:"Float",
		name:"String"
	},
	Subscription:{
		deck:"Card"
	},
	SpecialCard:{
		effect:"String",
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
		skills:"SpecialSkills"
	},
	S3Object:{
		bucket:"String",
		key:"String",
		region:"String"
	},
	JSON: `scalar.JSON` as const,
	Powerup:{
		name:"String"
	},
	Public:{
		powerups:"Powerup"
	},
	CardStack:{
		cards:"Card",
		name:"String"
	},
	Nameable:{
		"...on EffectCard": "EffectCard",
		"...on SpecialCard": "SpecialCard",
		"...on Card": "Card",
		"...on CardStack": "CardStack",
		name:"String"
	},
	Mutation:{
		addCard:"Card"
	}
}

export const Ops = {
query: "Query" as const,
	subscription: "Subscription" as const,
	mutation: "Mutation" as const
}