/* eslint-disable */

export const AllTypesProps: Record<string,any> = {
	createCard:{
		skills:"SpecialSkills"
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
	Mutation:{
		addCard:{
			card:"createCard"
		}
	}
}

export const ReturnTypes: Record<string,any> = {
	S3Object:{
		bucket:"String",
		key:"String",
		region:"String"
	},
	CardStack:{
		cards:"Card",
		name:"String"
	},
	Nameable:{
		"...on CardStack": "CardStack",
		"...on SpecialCard": "SpecialCard",
		"...on EffectCard": "EffectCard",
		"...on Card": "Card",
		name:"String"
	},
	ChangeCard:{
		"...on SpecialCard":"SpecialCard",
		"...on EffectCard":"EffectCard"
	},
	SpecialCard:{
		effect:"String",
		name:"String"
	},
	EffectCard:{
		effectSize:"Float",
		name:"String"
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
		name:"String",
		skills:"SpecialSkills"
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