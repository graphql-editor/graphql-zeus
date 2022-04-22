/* eslint-disable */

export const AllTypesProps: Record<string,any> = {
	Query:{
		cardById:{

		}
	},
	SpecialSkills: true,
	JSON: "String",
	Card:{
		attack:{

		}
	},
	Mutation:{
		addCard:{
			card:"createCard"
		}
	},
	createCard:{
		skills:"SpecialSkills"
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
	S3Object:{
		bucket:"String",
		key:"String",
		region:"String"
	},
	ChangeCard:{
		"...on SpecialCard":"SpecialCard",
		"...on EffectCard":"EffectCard"
	},
	Nameable:{
		"...on CardStack": "CardStack",
		"...on Card": "Card",
		"...on SpecialCard": "SpecialCard",
		"...on EffectCard": "EffectCard",
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
	Mutation:{
		addCard:"Card"
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
	}
}

export const Ops = {
query: "Query" as const,
	mutation: "Mutation" as const,
	subscription: "Subscription" as const
}