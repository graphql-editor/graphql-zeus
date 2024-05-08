/* eslint-disable */

export const AllTypesProps: Record<string,any> = {
	Public:{
		powerups:{

		}
	},
	Query:{
		cardById:{

		}
	},
	Mutation:{
		addCard:{
			card:"createCard"
		}
	},
	JSON: `scalar.JSON` as const,
	createCard:{
		skills:"SpecialSkills"
	},
	Card:{
		attack:{

		}
	},
	SpecialSkills: "enum" as const
}

export const ReturnTypes: Record<string,any> = {
	Public:{
		powerups:"Powerup"
	},
	ChangeCard:{
		"...on SpecialCard":"SpecialCard",
		"...on EffectCard":"EffectCard"
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
	},
	Mutation:{
		addCard:"Card"
	},
	JSON: `scalar.JSON` as const,
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
	Nameable:{
		"...on EffectCard": "EffectCard",
		"...on Card": "Card",
		"...on SpecialCard": "SpecialCard",
		"...on CardStack": "CardStack",
		name:"String"
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
	CardStack:{
		cards:"Card",
		name:"String"
	},
	Powerup:{
		name:"String"
	}
}

export const Ops = {
query: "Query" as const,
	mutation: "Mutation" as const,
	subscription: "Subscription" as const
}