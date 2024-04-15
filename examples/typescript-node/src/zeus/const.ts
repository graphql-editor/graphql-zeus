/* eslint-disable */

export const AllTypesProps: Record<string,any> = {
	Public:{
		powerups:{

		}
	},
	SpecialSkills: "enum" as const,
	Query:{
		cardById:{

		}
	},
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
	JSON: `scalar.JSON` as const
}

export const ReturnTypes: Record<string,any> = {
	Public:{
		powerups:"Powerup"
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
	Query:{
		cardById:"Card",
		drawCard:"Card",
		drawChangeCard:"ChangeCard",
		listCards:"Card",
		myStacks:"CardStack",
		nameables:"Nameable",
		public:"Public"
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
	ChangeCard:{
		"...on SpecialCard":"SpecialCard",
		"...on EffectCard":"EffectCard"
	},
	Powerup:{
		name:"String"
	},
	SpecialCard:{
		effect:"String",
		name:"String"
	},
	Mutation:{
		addCard:"Card"
	},
	Subscription:{
		deck:"Card"
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
	JSON: `scalar.JSON` as const
}

export const Ops = {
query: "Query" as const,
	mutation: "Mutation" as const,
	subscription: "Subscription" as const
}