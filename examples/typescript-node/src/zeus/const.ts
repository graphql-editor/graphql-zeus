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
	JSON: `scalar.JSON` as const,
	Query:{
		cardById:{

		}
	},
	Mutation:{
		addCard:{
			card:"createCard"
		}
	}
}

export const ReturnTypes: Record<string,any> = {
	Nameable:{
		"...on CardStack": "CardStack",
		"...on Card": "Card",
		"...on SpecialCard": "SpecialCard",
		"...on EffectCard": "EffectCard",
		name:"String"
	},
	CardStack:{
		cards:"Card",
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
	JSON: `scalar.JSON` as const,
	ChangeCard:{
		"...on SpecialCard":"SpecialCard",
		"...on EffectCard":"EffectCard"
	},
	EffectCard:{
		effectSize:"Float",
		name:"String"
	},
	Subscription:{
		deck:"Card"
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
	Mutation:{
		addCard:"Card"
	}
}

export const Ops = {
subscription: "Subscription" as const,
	query: "Query" as const,
	mutation: "Mutation" as const
}