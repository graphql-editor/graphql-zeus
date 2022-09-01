/* eslint-disable */

export const AllTypesProps: Record<string,any> = {
	SpecialSkills: "enum" as const,
	createCard:{
		skills:"SpecialSkills"
	},
	Card:{
		attack:{

		}
	},
	Query:{
		cardById:{

		}
	},
	JSON: `scalar.JSON` as const,
	Mutation:{
		addCard:{
			card:"createCard"
		}
	}
}

export const ReturnTypes: Record<string,any> = {
	Subscription:{
		deck:"Card"
	},
	Nameable:{
		"...on Card": "Card",
		"...on CardStack": "CardStack",
		"...on SpecialCard": "SpecialCard",
		"...on EffectCard": "EffectCard",
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
	CardStack:{
		cards:"Card",
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
	JSON: `scalar.JSON` as const,
	ChangeCard:{
		"...on SpecialCard":"SpecialCard",
		"...on EffectCard":"EffectCard"
	},
	Mutation:{
		addCard:"Card"
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
	EffectCard:{
		effectSize:"Float",
		name:"String"
	}
}

export const Ops = {
subscription: "Subscription" as const,
	query: "Query" as const,
	mutation: "Mutation" as const
}