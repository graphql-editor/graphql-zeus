/* eslint-disable */

export const AllTypesProps: Record<string,any> = {
	JSON: `scalar.JSON` as const,
	SpecialSkills: "enum" as const,
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
	Query:{
		cardById:{

		}
	}
}

export const ReturnTypes: Record<string,any> = {
	JSON: `scalar.JSON` as const,
	S3Object:{
		bucket:"String",
		key:"String",
		region:"String"
	},
	EffectCard:{
		effectSize:"Float",
		name:"String"
	},
	Subscription:{
		deck:"Card"
	},
	ChangeCard:{
		"...on SpecialCard":"SpecialCard",
		"...on EffectCard":"EffectCard"
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
	Nameable:{
		"...on EffectCard": "EffectCard",
		"...on Card": "Card",
		"...on CardStack": "CardStack",
		"...on SpecialCard": "SpecialCard",
		name:"String"
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
	SpecialCard:{
		effect:"String",
		name:"String"
	}
}

export const Ops = {
subscription: "Subscription" as const,
	mutation: "Mutation" as const,
	query: "Query" as const
}