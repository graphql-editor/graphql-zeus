/* eslint-disable */

export const AllTypesProps: Record<string,any> = {
	Card:{
		attack:{

		}
	},
	Mutation:{
		addCard:{
			card:"createCard"
		}
	},
	JSON: "String",
	SpecialSkills: true,
	Query:{
		cardById:{

		}
	},
	createCard:{
		skills:"SpecialSkills"
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
	Nameable:{
		"...on Card": "Card",
		"...on EffectCard": "EffectCard",
		"...on SpecialCard": "SpecialCard",
		"...on CardStack": "CardStack",
		name:"String"
	},
	S3Object:{
		bucket:"String",
		key:"String",
		region:"String"
	},
	EffectCard:{
		effectSize:"Float",
		name:"String"
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
	}
}

export const Ops = {
mutation: "Mutation" as const,
	subscription: "Subscription" as const,
	query: "Query" as const
}