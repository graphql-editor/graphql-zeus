/* eslint-disable */

export const AllTypesProps: Record<string,any> = {
	JSON: `scalar.JSON` as const,
	Public:{
		powerups:{

		}
	},
	Mutation:{
		addCard:{
			card:"createCard"
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
	Query:{
		cardById:{

		}
	}
}

export const ReturnTypes: Record<string,any> = {
	Nameable:{
		"...on CardStack": "CardStack",
		"...on EffectCard": "EffectCard",
		"...on SpecialCard": "SpecialCard",
		"...on Card": "Card",
		name:"String"
	},
	ChangeCard:{
		"...on SpecialCard":"SpecialCard",
		"...on EffectCard":"EffectCard"
	},
	Subscription:{
		deck:"Card"
	},
	Powerup:{
		name:"String"
	},
	JSON: `scalar.JSON` as const,
	CardStack:{
		cards:"Card",
		name:"String"
	},
	EffectCard:{
		effectSize:"Float",
		name:"String"
	},
	SpecialCard:{
		effect:"String",
		name:"String"
	},
	Public:{
		powerups:"Powerup"
	},
	Mutation:{
		addCard:"Card"
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
	}
}

export const Ops = {
query: "Query" as const,
	mutation: "Mutation" as const,
	subscription: "Subscription" as const
}