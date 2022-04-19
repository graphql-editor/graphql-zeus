/* eslint-disable */

export const AllTypesProps: Record<string,any> = {
	JSON: "String",
	createCard:{
		skills:"SpecialSkills"
	},
	Query:{
		cardById:{

		}
	},
	SpecialSkills: true,
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
	S3Object:{
		bucket:"String",
		key:"String",
		region:"String"
	},
	Subscription:{
		deck:"Card"
	},
	SpecialCard:{
		effect:"String",
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
	ChangeCard:{
		"...on SpecialCard":"SpecialCard",
		"...on EffectCard":"EffectCard"
	},
	Nameable:{
		"...on SpecialCard": "SpecialCard",
		"...on EffectCard": "EffectCard",
		"...on CardStack": "CardStack",
		"...on Card": "Card",
		name:"String"
	},
	CardStack:{
		cards:"Card",
		name:"String"
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
	}
}

export const Ops = {
subscription: "Subscription" as const,
	query: "Query" as const,
	mutation: "Mutation" as const
}