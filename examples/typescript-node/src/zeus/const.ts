/* eslint-disable */

export const AllTypesProps: Record<string,any> = {
	SpecialSkills: true,
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
	JSON: "String",
	Query:{
		cardById:{

		}
	}
}

export const ReturnTypes: Record<string,any> = {
	Subscription:{
		deck:"Card"
	},
	S3Object:{
		bucket:"String",
		key:"String",
		region:"String"
	},
	Mutation:{
		addCard:"Card"
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
	Query:{
		cardById:"Card",
		drawCard:"Card",
		drawChangeCard:"ChangeCard",
		listCards:"Card",
		myStacks:"CardStack",
		nameables:"Nameable"
	},
	Nameable:{
		"...on SpecialCard": "SpecialCard",
		"...on CardStack": "CardStack",
		"...on Card": "Card",
		"...on EffectCard": "EffectCard",
		name:"String"
	},
	EffectCard:{
		effectSize:"Float",
		name:"String"
	}
}

export const Ops = {
subscription: "Subscription" as const,
	mutation: "Mutation" as const,
	query: "Query" as const
}