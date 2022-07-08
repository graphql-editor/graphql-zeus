/* eslint-disable */

export const AllTypesProps: Record<string,any> = {
	SpecialSkills: "enum" as const,
	Mutation:{
		addCard:{
			card:"createCard"
		}
	},
	createCard:{
		skills:"SpecialSkills"
	},
	Query:{
		cardById:{

		}
	},
	Card:{
		attack:{

		}
	},
	JSON: `scalar.JSON` as const
}

export const ReturnTypes: Record<string,any> = {
	S3Object:{
		bucket:"String",
		key:"String",
		region:"String"
	},
	Subscription:{
		deck:"Card"
	},
	Nameable:{
		"...on SpecialCard": "SpecialCard",
		"...on EffectCard": "EffectCard",
		"...on Card": "Card",
		"...on CardStack": "CardStack",
		name:"String"
	},
	Mutation:{
		addCard:"Card"
	},
	ChangeCard:{
		"...on SpecialCard":"SpecialCard",
		"...on EffectCard":"EffectCard"
	},
	SpecialCard:{
		effect:"String",
		name:"String"
	},
	EffectCard:{
		effectSize:"Float",
		name:"String"
	},
	Query:{
		cardById:"Card",
		drawCard:"Card",
		drawChangeCard:"ChangeCard",
		listCards:"Card",
		myStacks:"CardStack",
		nameables:"Nameable"
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
	CardStack:{
		cards:"Card",
		name:"String"
	}
}

export const Ops = {
subscription: "Subscription" as const,
	mutation: "Mutation" as const,
	query: "Query" as const
}