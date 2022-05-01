/* eslint-disable */

export const AllTypesProps: Record<string,any> = {
	JSON: "String",
	Mutation:{
		addCard:{
			card:"createCard"
		}
	},
	Query:{
		cardById:{

		}
	},
	Card:{
		attack:{

		}
	},
	SpecialSkills: true,
	createCard:{
		skills:"SpecialSkills"
	}
}

export const ReturnTypes: Record<string,any> = {
	EffectCard:{
		effectSize:"Float",
		name:"String"
	},
	CardStack:{
		cards:"Card",
		name:"String"
	},
	Nameable:{
		"...on EffectCard": "EffectCard",
		"...on CardStack": "CardStack",
		"...on Card": "Card",
		"...on SpecialCard": "SpecialCard",
		name:"String"
	},
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
	subscription: "Subscription" as const,
	query: "Query" as const
}