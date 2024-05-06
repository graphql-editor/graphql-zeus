/* eslint-disable */

export const AllTypesProps: Record<string,any> = {
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
	}
}

export const ReturnTypes: Record<string,any> = {
	EffectCard:{
		effectSize:"Float",
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
	Public:{
		powerups:"Powerup"
	},
	Mutation:{
		addCard:"Card"
	},
	SpecialCard:{
		effect:"String",
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
	ChangeCard:{
		"...on SpecialCard":"SpecialCard",
		"...on EffectCard":"EffectCard"
	},
	CardStack:{
		cards:"Card",
		name:"String"
	},
	Nameable:{
		"...on EffectCard": "EffectCard",
		"...on Card": "Card",
		"...on SpecialCard": "SpecialCard",
		"...on CardStack": "CardStack",
		name:"String"
	},
	Powerup:{
		name:"String"
	},
	Subscription:{
		deck:"Card"
	}
}

export const Ops = {
query: "Query" as const,
	mutation: "Mutation" as const,
	subscription: "Subscription" as const
}