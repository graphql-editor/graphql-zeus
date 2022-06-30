/* eslint-disable */

export const AllTypesProps: Record<string,any> = {
	Card:{
		attack:{

		}
	},
	JSON: `scalar.JSON` as const,
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
	SpecialSkills: "enum" as const
}

export const ReturnTypes: Record<string,any> = {
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
	Subscription:{
		deck:"Card"
	},
	Nameable:{
		"...on Card": "Card",
		"...on SpecialCard": "SpecialCard",
		"...on EffectCard": "EffectCard",
		"...on CardStack": "CardStack",
		name:"String"
	},
	JSON: `scalar.JSON` as const,
	EffectCard:{
		effectSize:"Float",
		name:"String"
	},
	S3Object:{
		bucket:"String",
		key:"String",
		region:"String"
	},
	CardStack:{
		cards:"Card",
		name:"String"
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
		nameables:"Nameable"
	},
	ChangeCard:{
		"...on SpecialCard":"SpecialCard",
		"...on EffectCard":"EffectCard"
	}
}

export const Ops = {
subscription: "Subscription" as const,
	mutation: "Mutation" as const,
	query: "Query" as const
}