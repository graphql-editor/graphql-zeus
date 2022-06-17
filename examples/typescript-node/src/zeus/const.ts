/* eslint-disable */

export const AllTypesProps: Record<string,any> = {
	Mutation:{
		addCard:{
			card:"createCard"
		}
	},
	Query:{
		cardById:{

		}
	},
	SpecialSkills: "enum" as const,
	Card:{
		attack:{

		}
	},
	JSON: `scalar.JSON` as const,
	createCard:{
		skills:"SpecialSkills"
	}
}

export const ReturnTypes: Record<string,any> = {
	S3Object:{
		bucket:"String",
		key:"String",
		region:"String"
	},
	Mutation:{
		addCard:"Card"
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
	CardStack:{
		cards:"Card",
		name:"String"
	},
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
	JSON: `scalar.JSON` as const,
	SpecialCard:{
		effect:"String",
		name:"String"
	},
	Nameable:{
		"...on CardStack": "CardStack",
		"...on EffectCard": "EffectCard",
		"...on Card": "Card",
		"...on SpecialCard": "SpecialCard",
		name:"String"
	}
}

export const Ops = {
mutation: "Mutation" as const,
	subscription: "Subscription" as const,
	query: "Query" as const
}