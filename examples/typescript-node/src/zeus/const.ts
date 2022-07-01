/* eslint-disable */

export const AllTypesProps: Record<string,any> = {
	Mutation:{
		addCard:{
			card:"createCard"
		}
	},
	createCard:{
		skills:"SpecialSkills"
	},
	JSON: `scalar.JSON` as const,
	Query:{
		cardById:{

		}
	},
	SpecialSkills: "enum" as const,
	Card:{
		attack:{

		}
	}
}

export const ReturnTypes: Record<string,any> = {
	CardStack:{
		cards:"Card",
		name:"String"
	},
	Mutation:{
		addCard:"Card"
	},
	S3Object:{
		bucket:"String",
		key:"String",
		region:"String"
	},
	JSON: `scalar.JSON` as const,
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
	Nameable:{
		"...on CardStack": "CardStack",
		"...on EffectCard": "EffectCard",
		"...on Card": "Card",
		"...on SpecialCard": "SpecialCard",
		name:"String"
	},
	Subscription:{
		deck:"Card"
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
	SpecialCard:{
		effect:"String",
		name:"String"
	}
}

export const Ops = {
mutation: "Mutation" as const,
	query: "Query" as const,
	subscription: "Subscription" as const
}