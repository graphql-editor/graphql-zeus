/* eslint-disable */

export const AllTypesProps: Record<string,any> = {
	createCard:{
		skills:"SpecialSkills"
	},
	Query:{
		cardById:{

		}
	},
	SpecialSkills: "enum" as const,
	Mutation:{
		addCard:{
			card:"createCard"
		}
	},
	JSON: `scalar.JSON` as const,
	Card:{
		attack:{

		}
	}
}

export const ReturnTypes: Record<string,any> = {
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
	},
	Nameable:{
		"...on EffectCard": "EffectCard",
		"...on SpecialCard": "SpecialCard",
		"...on Card": "Card",
		"...on CardStack": "CardStack",
		name:"String"
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
	CardStack:{
		cards:"Card",
		name:"String"
	}
}

export const Ops = {
query: "Query" as const,
	mutation: "Mutation" as const,
	subscription: "Subscription" as const
}