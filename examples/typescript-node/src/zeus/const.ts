/* eslint-disable */

export const AllTypesProps: Record<string,any> = {
	Card:{
		attack:{

		}
	},
	SpecialSkills: "enum" as const,
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
	}
}

export const ReturnTypes: Record<string,any> = {
	ChangeCard:{
		"...on SpecialCard":"SpecialCard",
		"...on EffectCard":"EffectCard"
	},
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
	SpecialCard:{
		effect:"String",
		name:"String"
	},
	Nameable:{
		"...on EffectCard": "EffectCard",
		"...on Card": "Card",
		"...on SpecialCard": "SpecialCard",
		"...on CardStack": "CardStack",
		name:"String"
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
		nameables:"Nameable"
	},
	S3Object:{
		bucket:"String",
		key:"String",
		region:"String"
	},
	Mutation:{
		addCard:"Card"
	},
	CardStack:{
		cards:"Card",
		name:"String"
	},
	JSON: `scalar.JSON` as const
}

export const Ops = {
subscription: "Subscription" as const,
	query: "Query" as const,
	mutation: "Mutation" as const
}