/* eslint-disable */

export const AllTypesProps: Record<string,any> = {
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
		"...on SpecialCard": "SpecialCard",
		"...on CardStack": "CardStack",
		"...on Card": "Card",
		name:"String"
	},
	S3Object:{
		bucket:"String",
		key:"String",
		region:"String"
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
	EffectCard:{
		effectSize:"Float",
		name:"String"
	},
	SpecialCard:{
		effect:"String",
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
		name:"String",
		skills:"SpecialSkills"
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