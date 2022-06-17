/* eslint-disable */

export const AllTypesProps: Record<string,any> = {
	JSON: `scalar.JSON` as const,
	createCard:{
		skills:"SpecialSkills"
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
	Mutation:{
		addCard:{
			card:"createCard"
		}
	}
}

export const ReturnTypes: Record<string,any> = {
	JSON: `scalar.JSON` as const,
	SpecialCard:{
		effect:"String",
		name:"String"
	},
	EffectCard:{
		effectSize:"Float",
		name:"String"
	},
	ChangeCard:{
		"...on SpecialCard":"SpecialCard",
		"...on EffectCard":"EffectCard"
	},
	CardStack:{
		cards:"Card",
		name:"String"
	},
	Subscription:{
		deck:"Card"
	},
	Nameable:{
		"...on SpecialCard": "SpecialCard",
		"...on EffectCard": "EffectCard",
		"...on CardStack": "CardStack",
		"...on Card": "Card",
		name:"String"
	},
	S3Object:{
		bucket:"String",
		key:"String",
		region:"String"
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
	Mutation:{
		addCard:"Card"
	}
}

export const Ops = {
subscription: "Subscription" as const,
	query: "Query" as const,
	mutation: "Mutation" as const
}