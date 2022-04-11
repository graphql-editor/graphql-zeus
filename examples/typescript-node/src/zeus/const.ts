/* eslint-disable */

export const AllTypesProps: Record<string,any> = {
	createCard:{
		skills:"SpecialSkills"
	},
	Mutation:{
		addCard:{
			card:"createCard"
		}
	},
	SpecialSkills: true,
	Query:{
		cardById:{

		}
	},
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
	Mutation:{
		addCard:"Card"
	},
	SpecialCard:{
		effect:"String",
		name:"String"
	},
	S3Object:{
		bucket:"String",
		key:"String",
		region:"String"
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
	Nameable:{
		"...on EffectCard": "EffectCard",
		"...on SpecialCard": "SpecialCard",
		"...on CardStack": "CardStack",
		"...on Card": "Card",
		name:"String"
	},
	ChangeCard:{
		"...on SpecialCard":"SpecialCard",
		"...on EffectCard":"EffectCard"
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
		name:"String",
		skills:"SpecialSkills"
	}
}

export const Ops = {
    query: "Query" as const,
    mutation: "Mutation" as const,
    subscription: "Subscription" as const
}