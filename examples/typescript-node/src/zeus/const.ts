/* eslint-disable */

export const AllTypesProps: Record<string,any> = {
	SpecialSkills: "enum" as const,
	Query:{
		cardById:{

		}
	},
	Mutation:{
		addCard:{
			card:"createCard"
		}
	},
	JSON: `scalar.JSON` as const,
	createCard:{
		skills:"SpecialSkills"
	},
	Card:{
		attack:{

		}
	}
}

export const ReturnTypes: Record<string,any> = {
	Nameable:{
		"...on EffectCard": "EffectCard",
		"...on Card": "Card",
		"...on SpecialCard": "SpecialCard",
		"...on CardStack": "CardStack",
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
	Mutation:{
		addCard:"Card"
	},
	JSON: `scalar.JSON` as const,
	S3Object:{
		bucket:"String",
		key:"String",
		region:"String"
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
	},
	CardStack:{
		cards:"Card",
		name:"String"
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