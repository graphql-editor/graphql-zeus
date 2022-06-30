/* eslint-disable */

export const AllTypesProps: Record<string,any> = {
	Card:{
		attack:{

		}
	},
	SpecialSkills: "enum" as const,
	createCard:{
		skills:"SpecialSkills"
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
	EffectCard:{
		effectSize:"Float",
		name:"String"
	},
	Nameable:{
		"...on Card": "Card",
		"...on EffectCard": "EffectCard",
		"...on CardStack": "CardStack",
		"...on SpecialCard": "SpecialCard",
		name:"String"
	},
	CardStack:{
		cards:"Card",
		name:"String"
	},
	S3Object:{
		bucket:"String",
		key:"String",
		region:"String"
	},
	JSON: `scalar.JSON` as const,
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
	},
	SpecialCard:{
		effect:"String",
		name:"String"
	},
	Mutation:{
		addCard:"Card"
	},
	Subscription:{
		deck:"Card"
	}
}

export const Ops = {
query: "Query" as const,
	mutation: "Mutation" as const,
	subscription: "Subscription" as const
}