/* eslint-disable */

export const AllTypesProps: Record<string,any> = {
	Query:{
		cardById:{

		}
	},
	createCard:{
		skills:"SpecialSkills"
	},
	SpecialSkills: "enum" as const,
	JSON: `scalar.JSON` as const,
	Mutation:{
		addCard:{
			card:"createCard"
		}
	},
	Card:{
		attack:{

		}
	}
}

export const ReturnTypes: Record<string,any> = {
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
	Subscription:{
		deck:"Card"
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
	JSON: `scalar.JSON` as const,
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
		"...on CardStack": "CardStack",
		"...on SpecialCard": "SpecialCard",
		"...on Card": "Card",
		"...on EffectCard": "EffectCard",
		name:"String"
	},
	ChangeCard:{
		"...on SpecialCard":"SpecialCard",
		"...on EffectCard":"EffectCard"
	},
	EffectCard:{
		effectSize:"Float",
		name:"String"
	}
}

export const Ops = {
query: "Query" as const,
	subscription: "Subscription" as const,
	mutation: "Mutation" as const
}