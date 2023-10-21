/* eslint-disable */

export const AllTypesProps: Record<string,any> = {
	JSON: `scalar.JSON` as const,
	createCard:{
		skills:"SpecialSkills"
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
	Public:{
		powerups:{

		}
	},
	Card:{
		attack:{

		}
	},
	SpecialSkills: "enum" as const
}

export const ReturnTypes: Record<string,any> = {
	Powerup:{
		name:"String"
	},
	Nameable:{
		"...on SpecialCard": "SpecialCard",
		"...on EffectCard": "EffectCard",
		"...on Card": "Card",
		"...on CardStack": "CardStack",
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
	JSON: `scalar.JSON` as const,
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
	S3Object:{
		bucket:"String",
		key:"String",
		region:"String"
	},
	Mutation:{
		addCard:"Card"
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
	Subscription:{
		deck:"Card"
	},
	CardStack:{
		cards:"Card",
		name:"String"
	}
}

export const Ops = {
query: "Query" as const,
	mutation: "Mutation" as const,
	subscription: "Subscription" as const
}